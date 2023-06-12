import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{

  public HRD: any = [];

  constructor( public router: Router) { 
    this.getUser();
  }

  async getUser(){
    const user = this.router.getCurrentNavigation().extras.state;
    this.HRD = user;
  }

  ngOnInit(): void {
    
  }

}
