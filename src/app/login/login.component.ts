import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as data from '../../assets/users.json';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdata: any = [];
  isDataLoading: boolean;
  loginForm: FormGroup;
  get loginform() { return this.loginForm.controls; }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    const username = localStorage.getItem('username');
    const fullname = localStorage.getItem('fullname');

    if (username || fullname) {
      this.router.navigate(['/dashboard']);
    }
    this.isDataLoading = false;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  getUserData() {
    // this.http.get('assets/users.json').subscribe(data => {
      this.userdata = data;
      this.isDataLoading = false;
    // });
  }

  login() {
    this.isDataLoading = true;
    const logindata = this.loginForm.value;
    setTimeout(async () => {
      await this.getUserData();
      const validuser = _.find(this.userdata.default, logindata);
      if (validuser) {
        localStorage.setItem('username', validuser.username);
        localStorage.setItem('fullname', validuser.fullname);
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid username or password');
        this.loginForm.reset();
      }
      this.isDataLoading = false;
    }, 3000);
  }

}
