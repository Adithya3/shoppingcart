import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login/login.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlist

  constructor(private login: LoginService) {
  }

  ngOnInit() {
    this.wishlist = this.login.getWishlist()
  }
}
