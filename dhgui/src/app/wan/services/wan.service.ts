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

  constructor(private http: HttpClient, private constants: ConstantsService) {
    this.http.get(this.constants.getTopology).toPromise().then(data => {
      this.topology = <WanMember[]>data;
    });

    this.http.get(this.constants.getTaskForces).toPromise().then(data => {
      this.forces = <TaskForce[]>data;
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
}
