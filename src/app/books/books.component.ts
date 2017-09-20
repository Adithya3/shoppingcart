import {Component, OnInit} from '@angular/core';
import {StoreItemsService} from '../services/store-items/store-items.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books

  constructor(private storeService: StoreItemsService) {
  }

  ngOnInit() {
    this.books=this.storeService.getbooks()
  }

}
