import {Injectable} from '@angular/core';

@Injectable()
export class StoreItemsService {

  items = {
    electronics: [['camera', 90],
      ['smartphone', 200],
      ['iphone', 700],
      ['laptop', 1000],
      ['ipad', 800],
      ['kindle', 40],
      ['tablet', 300]]
    ,
    icecreames: [['vanilla', 50],
      ['chocolate', 200],
      ['butterscotch', 700],
      ['fruty', 1000],
      ['blackberry', 300]]
    ,
    clothes: [['clothes1', 50],
      ['clothes1', 50],
      ['clothes2', 60],
      ['clothes3', 70],
      ['clothes4', 80],
      ['clothes5', 90],
      ['clothes6', 100],
      ['clothes7', 110]
    ]
    ,
    books: [['book1', 50],
      ['book1', 50],
      ['book2', 60],
      ['book3', 70],
      ['book4', 80],
      ['book5', 90],
      ['book6', 100],
      ['book7', 110]
    ]

  }

  constructor() {

  }

  getElectronics() {
    return this.items.electronics
  }

  getIcecreames() {
    return this.items.icecreames
  }


  getClothes() {
    return this.items.clothes
  }

  getbooks() {
    return this.items.books
  }


}
