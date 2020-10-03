import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'src/app/services/worker.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-work-categories',
  templateUrl: './work-categories.component.html',
  styleUrls: ['./work-categories.component.css']
})
export class WorkCategoriesComponent implements OnInit {
  workers: Array<Worker>;
  categories: Array<any>;
  constructor(private workerService: WorkerService) {
    this.workers = [];
    this.categories = [];
  }

  async ngOnInit() {
    this.workers = await this.workerService.getAllWorkers();
    this.groupWorkersByCategories();
  }

  groupWorkersByCategories(): void {
    this.categories = _.groupBy(this.workers, ele => ele.category );
  }

  catKeys(): Array<string> {
    return Object.keys(this.categories);
  }

}
