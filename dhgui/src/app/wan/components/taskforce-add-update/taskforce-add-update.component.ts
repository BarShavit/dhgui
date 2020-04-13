import { WanService } from './../../services/wan.service';
import { Component, OnInit, Inject, ViewChild, OnDestroy, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
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
  styleUrls: ['./taskforce-add-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskforceAddUpdateComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('multiSelect', { static: true }) multiSelect: MatSelect | undefined;
  isAdd: boolean = false;
  force: TaskForce;
  matcher = new MyErrorStateMatcher();
  form: FormGroup;
  allMembers: WanMember[] = [];
  filteredPlatform: ReplaySubject<WanMember[]> = new ReplaySubject<WanMember[]>(1);
  private _onDestroy = new Subject<void>();
  title: string;

  constructor(fb: FormBuilder,
    private platformService: PlatformService,
    private wanService: WanService,
    private dialogRef: MatDialogRef<TaskforceAddUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) data: TaskForce) {
    if (data == null) {
      this.isAdd = true;
      this.force = new TaskForce();
      this.title = "יצירת כוח משימה"
    } else {
      this.force = data;
      this.title = `כוח משימה: ${this.force.name}`;
    }

    this.form = fb.group({
      'name': ['', [Validators.required, Validators.maxLength(16)]],
      'platforms': ['', [Validators.required]],
      'filter-platforms': ['', []]
    }, {});
  }

  ngOnInit() {
    this.fillAllMembers();
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
        if (this.multiSelect != null) {
          this.multiSelect.compareWith = (a: WanMember, b: WanMember) => a && b && a.id === b.id;
        }
      });
  }

  private fillAllMembers() {
    let currentPlatform = this.platformService.currentPlatform$.getValue();
    let allPlatform = this.platformService.platforms$.getValue();

    if (allPlatform == null || currentPlatform == null) {
      return;
    }

    allPlatform.forEach(platform => {
      if (currentPlatform != null && platform.id != currentPlatform.id) {
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

    let result: WanMember[] = [];

    this.force.members.forEach(forceMember => {
      this.allMembers.forEach(platform => {
        if (forceMember.id == platform.id) {
          result.push(platform);
        }
      })
    });

    return result;
  }

  getButtonText(): string {
    if (this.isAdd) {
      return "צור כוח משימה";
    }

    return "עדכן כוח משימה";
  }

  save() {
    this.force.name = this.form.controls["name"].value;
    this.force.members = this.form.controls["platforms"].value;

    if (this.isAdd) {
      this.wanService.createTaskForce(this.force);
    } else {
      this.wanService.updateTaskForce(this.force);
    }

    this.dialogRef.close(true);
  }

  trackByFunc(_: number, value: WanMember) {
    return value.id;
  }
}