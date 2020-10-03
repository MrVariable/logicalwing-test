import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Worker } from '../models/worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(private http: HttpClient) { }

  async getAllWorkers(): Promise<any> {
    return this.http.get('assets/workers.json').toPromise();
  }
}
