import {Component, OnInit} from '@angular/core';
import {StoreItemsService} from "../services/store-items/store-items.service";

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
  clothes

  constructor(private storeService: StoreItemsService) {
  }

  ngOnInit() {
    this.clothes = this.storeService.getClothes()
  }

}
