import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../services/login/login.service';

@Component({
  selector: 'app-item-cart-wishlist',
  templateUrl: './item-cart-wishlist.component.html',
  styleUrls: ['./item-cart-wishlist.component.css']
})
export class ItemCartWishlistComponent implements OnInit {
  @Input() singleItem: [string, number];
  @Input() index: number;
  @Input() what: string;

  constructor(private  loginservice: LoginService) {
  }

  ngOnInit() {
  }

  deleteitem() {
    // console.log(typeof this.index)
    // console.log(typeof this.what)
    this.loginservice.delete(this.index, this.what)
  }
}
