import {Component} from '@angular/core';
import {StoreItemsService} from './services/store-items/store-items.service';
import {LoginService} from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StoreItemsService, LoginService]
})
export class AppComponent {
  title = 'app';
}
