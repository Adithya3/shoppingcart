import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-cart-wishlist',
  templateUrl: './item-cart-wishlist.component.html',
  styleUrls: ['./item-cart-wishlist.component.css']
})
export class ItemCartWishlistComponent implements OnInit {
  @Input() singleItem: [string, number];

  constructor() {
  }

  ngOnInit() {
  }

}
