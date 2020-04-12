import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { WanMember } from 'src/app/shared/models/wan/member';
import { TaskForce } from 'src/app/shared/models/wan/task-force';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class WanService {

  topology$ = new BehaviorSubject<WanMember[]>([]);
  forces$ = new BehaviorSubject<TaskForce[]>([]);
  isActive$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get<WanMember[]>(this.constants.getTopology).toPromise().then(data => {
      // Changing moshe's last seen to the last hour
      // so you will see him in the short topology
      // TODO:Delete this shit
      let moshe = data.find(m => m.id == 3);
      if (moshe != null) {
        moshe.lastSeen = moment().subtract(5, "minutes").toDate();
      }

      this.topology$.next(data);
    });

    this.http.get<TaskForce[]>(this.constants.getTaskForces).toPromise().then(data => {
      this.forces$.next(data);
    });

    this.http.get<boolean>(this.constants.getIsWanActive).toPromise().then(data => {
      this.isActive$.next(data);
    });
  }

  createTaskForce(force: TaskForce) {
    let memberString = force.members.map(force => force.name).join(",");
    console.log(`Adding task force with parameters: id: ${force.id},
     name: ${force.name}, members: ${memberString}`)
    //TODO:HTTP
  }

  updateTaskForce(force: TaskForce) {
    let memberString = force.members.map(force => force.name).join(",");
    console.log(`Updating task force with parameters: id: ${force.id},
     name: ${force.name}, members: ${memberString}`)
    //TODO:HTTP
  }

  leaveTaskForce(force: TaskForce) {
    console.log(`Leaving task force ${force.name}`);
    //TODO:HTTP
  }

  deleteTaskForce(force: TaskForce) {
    console.log(`Deleting task force ${force.name}`);
    //TODO:HTTP
  }

  changeWanStatus() {
    this.isActive$.next(!this.isActive$.value);
    console.log(`Changed wan status to ${this.isActive$.value}`);
    //TODO:HTTP
  }
}
