import {Component, OnInit} from '@angular/core';
import {StoreItemsService} from '../services/store-items/store-items.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css'],
})
export class ElectronicsComponent implements OnInit {

  electronics

  constructor(private storeService: StoreItemsService) {
  }

  ngOnInit() {
    this.electronics = this.storeService.getElectronics()
  }

}
