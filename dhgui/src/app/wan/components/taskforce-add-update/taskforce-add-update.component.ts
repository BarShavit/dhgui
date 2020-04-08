import { Component, OnInit, Inject, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskForce } from 'src/app/shared/models/wan/task-force';
import { MyErrorStateMatcher } from 'src/app/shared/services/error-state-matcher';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlatformService } from 'src/app/shared/services/platform.service';
import { WanMember } from 'src/app/shared/models/wan/member';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-taskforce-add-update',
  templateUrl: './taskforce-add-update.component.html',
  styleUrls: ['./taskforce-add-update.component.scss']
})
export class TaskforceAddUpdateComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect;
  isAdd: boolean = false;
  force: TaskForce;
  matcher = new MyErrorStateMatcher();
  form: FormGroup;
  allMembers: WanMember[] = [];
  filteredPlatform: ReplaySubject<WanMember[]> = new ReplaySubject<WanMember[]>(1);
  private _onDestroy = new Subject<void>();

  constructor(fb: FormBuilder,
    private platformService: PlatformService,
    private dialogRef: MatDialogRef<TaskforceAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    if (data == null) {
      this.isAdd = true;
      this.force = new TaskForce();
    } else {
      this.force = data;
    }

    this.form = fb.group({
      'name': ['', [Validators.required, Validators.maxLength(16)]],
      'platforms': ['', [Validators.required]],
      'filter-platforms': ['', []]
    }, {});
  }

  async ngOnInit() {
    await this.fillAllMembers();
    this.form.controls["name"].setValue(this.force.name);

    // put the current task force members as default for updates
    this.form.controls["platforms"].setValue(this.getDefaultSelectedMembers());

    // load the initial platform list
    this.filteredPlatform.next(this.allMembers.slice());

  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  private setInitialValue() {
    this.filteredPlatform
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.multiSelect.compareWith = (a: WanMember, b: WanMember) => a && b && a.id === b.id;
      });
  }

  private async fillAllMembers() {
    let currentPlatform = await this.platformService.getMyPlatform();
    let allPlatform = await this.platformService.getPlatforms();

    allPlatform.forEach(platform => {
      if (platform.id != currentPlatform.id) {
        this.allMembers.push(new WanMember(platform.id, platform.name));
      }
    });
  }

  protected filterMembers() {
    if (!this.allMembers) {
      return;
    }
    // get the search keyword
    let search = this.form.controls["filter-platforms"].value;
    if (!search) {
      this.filteredPlatform.next(this.allMembers.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredPlatform.next(
      this.allMembers.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
    );
  }

  private getDefaultSelectedMembers(): WanMember[] {
    if (this.force.members.length == 0) {
      return [];
    }

    let result = [];

    this.force.members.forEach(forceMember => {
      this.allMembers.forEach(platform => {
        if (forceMember.id == platform.id) {
          result.push(platform);
        }
      })
    });

    return result;
  }
}
