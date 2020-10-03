import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public pendingTaskCounts = new Subject();
  get pendingTaskCounter() {
    return this.pendingTaskCounts;
  }
}
