import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../services/login/login.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() singleItem: [string, number];

  constructor(private login: LoginService) {
  }

  ngOnInit() {
  }

  toCart() {
    this.login.addToCart(this.singleItem)
  }

  toWishlist() {
    this.login.addToWishlist(this.singleItem)
  }
}
