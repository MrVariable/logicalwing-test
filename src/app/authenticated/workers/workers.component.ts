import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'src/app/services/worker.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  showModal: boolean;
  workers: Array<Worker>;
  workersToShow: Array<Worker>;
  categories: Array<any>;
  constructor(private workerService: WorkerService) {
    this.showModal = false;
    this.workers = [];
    this.categories = [];
    this.workersToShow = [];
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

  toggleModal(isOpen: boolean, category?: string) {
    this.showModal = isOpen;
    this.showModal ? this.filterWorkers(category ? category : null) : this.workersToShow = [];
  }

  filterWorkers(category?: string) {
    this.workersToShow = category ? _.filter(this.workers, ele => ele.category === category) : this.workers;
  }
}
