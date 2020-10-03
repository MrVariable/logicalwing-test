import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pendingTasks: Array<any>;
  constructor(private common: CommonService) { }

  ngOnInit() {
    this.pendingTasks = this.getPendingTasks();
    this.common.pendingTaskCounts.next(this.pendingTasks.length);
  }

  getPendingTasks() {
    return [
      {
        id: 1,
        task: 'Learn Horse riding 🏇',
      },
      {
        id: 2,
        task: 'Get Deep Knowledge about Vedic Mathematics and Science ⚛️',
      },
      {
        id: 3,
        task: 'Meet Elon Musk 🤖',
      },
      {
        id: 4,
        task: 'Meet Ratan Tata 💸',
      },
      {
        id: 5,
        task: 'Share the stage with Shariq Kaifi once in a life time 🖋️',
      },
      {
        id: 6,
        task: 'Own a Telescope 🔭',
      },
      {
        id: 7,
        task: 'Own a Bullet 500 🏍️',
      },
      {
        id: 8,
        task: 'Meet SRK 💖',
      },
      {
        id: 9,
        task: 'Learn Tap Dancing 🕺',
      },
      {
        id: 10,
        task: 'Take one month break from everything to explore the nature 🌳',
      },
    ];
  }

  markDone(id) {
    this.pendingTasks.splice(id, 1);
    this.common.pendingTaskCounts.next(this.pendingTasks.length);
  }

}
