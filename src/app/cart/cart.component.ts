import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart

  constructor(private login: LoginService) {
  }

  ngOnInit() {
    this.cart = this.login.getCart()
  }

}
