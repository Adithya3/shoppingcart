import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ItemComponent} from './item/item.component';
import {ElectronicsComponent} from './electronics/electronics.component';
import {IcecreamesComponent} from './icecreames/icecreames.component';
import {ClothesComponent} from './clothes/clothes.component';
import {BooksComponent} from './books/books.component';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './cart/cart.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import { ItemCartWishlistComponent } from './item-cart-wishlist/item-cart-wishlist.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', redirectTo: ''},
  {path: 'home', component: HomeComponent},
  {path: 'electronics', component: ElectronicsComponent},
  {path: 'icecreames', component: IcecreamesComponent},
  {path: 'books', component: BooksComponent},
  {path: 'clothes', component: ClothesComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ItemComponent,
    ElectronicsComponent,
    IcecreamesComponent,
    ClothesComponent,
    BooksComponent,
    CartComponent,
    WishlistComponent,
    ItemCartWishlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
