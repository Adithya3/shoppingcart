import {Component, OnInit} from '@angular/core';
import {StoreItemsService} from '../services/store-items/store-items.service';

@Component({
  selector: 'app-icecreames',
  templateUrl: './icecreames.component.html',
  styleUrls: ['./icecreames.component.css']
})
export class IcecreamesComponent implements OnInit {
  icecreames

  constructor(private storeService: StoreItemsService) {
  }

  ngOnInit() {
    this.icecreames = this.storeService.getIcecreames()
  }

}
