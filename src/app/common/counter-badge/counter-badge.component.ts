import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-counter-badge',
  templateUrl: './counter-badge.component.html',
  styleUrls: ['./counter-badge.component.css']
})
export class CounterBadgeComponent implements OnInit {

  counter: any = 0;
  constructor(private common: CommonService) { }

  ngOnInit() {
    this.common.pendingTaskCounter.subscribe(counts => {
      this.counter = counts;
    });
  }

}
