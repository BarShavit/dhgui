import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  
  constructor(private socket:Socket) {
  }

  consume<T>(key:string) : Observable<T>{
    return this.socket.fromEvent(key);
  }
}
