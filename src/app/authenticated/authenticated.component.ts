import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent implements OnInit {
  pendingCounts: any = 0;
  userfullname = localStorage.getItem('fullname');
  constructor(private router: Router, private common: CommonService) {
    const username = localStorage.getItem('username');
    const fullname = localStorage.getItem('fullname');

    if (!username || !fullname) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit() {
    this.common.pendingTaskCounter.subscribe(counts => {
      this.pendingCounts = counts;
    });
  }

  logout() {
    this.userfullname = null;
    localStorage.removeItem('username');
    localStorage.removeItem('fullname');
    this.router.navigate(['/login']);
  }

}
