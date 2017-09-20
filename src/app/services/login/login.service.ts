import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
  currentuser = 'rekha'
  users = {
    'Fringlose': {
      'password': 'password',
      'cart': [],
      'wishlist': []
    },
    'Wonfehe': {
      'password': '1234',
      'cart': [],
      'wishlist': []
    },
    'Youled': {
      'password': 'mypassword',
      'cart': [],
      'wishlist': []
    },
    'rekha': {
      'password': '9876',
      'cart': [],
      'wishlist': []
    },
    'sumit': {
      'password': 'dingdong',
      'cart': [],
      'wishlist': []
    },
    'raja': {
      'password': 'openup',
      'cart': [],
      'wishlist': []
    },
    'mahesh': {
      'password': 'somepassword',
      'cart': [],
      'wishlist': []
    },
  }

  constructor() {
  }


  logincheck(username: string, password: string) {
    if (this.users.hasOwnProperty(username)) {
      if (this.users[username].password == password) {
        this.currentuser = username
        return true
      }
      else {
        alert('Enter a valid password')
        return false
      }
    }
    else {
      alert('Enter a valid username')
      return false
    }
  }

  addToCart(item: [String, number]) {
    this.users[this.currentuser].cart.push(item)
    //console.log(item)
    //console.log(this.users[this.currentuser].cart)
  }

  addToWishlist(item: [String, number]) {
    this.users[this.currentuser].wishlist.push(item)
    //console.log(this.users[this.currentuser].wishlist)
  }

  getCart() {
    return this.users[this.currentuser].cart
  }

  getWishlist() {
    return this.users[this.currentuser].wishlist
  }
}
