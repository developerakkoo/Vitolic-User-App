import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.page.html',
  styleUrls: ['./view-order.page.scss'],
})
export class ViewOrderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewOrderDetails(order){
    this.router.navigate(['order-detail']);
  }
}
