import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from 'src/app/shared/services/constants.service';
import { WanMember } from 'src/app/shared/models/wan/member';
import { TaskForce } from 'src/app/shared/models/wan/task-force';

@Injectable({
  providedIn: 'root'
})
export class WanService {

  topology: WanMember[] = [];
  forces: TaskForce[] = [];
  isActive: boolean = true;

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get<WanMember[]>(this.constants.getTopology).toPromise().then(data => {
      this.topology = data;
    });

    this.http.get<TaskForce[]>(this.constants.getTaskForces).toPromise().then(data => {
      this.forces = data;
    });

    this.http.get<boolean>(this.constants.getIsWanActive).toPromise().then(data => {
      this.isActive = data;
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
    this.isActive = !this.isActive;
    console.log(`Changed wan status to ${this.isActive}`);
    //TODO:HTTP
  }
}
