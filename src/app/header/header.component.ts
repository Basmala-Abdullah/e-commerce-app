import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
constructor(private cartService: CartService){}
cartItemsNo: number = 0;
  ngOnInit(){
    this.cartItemsNo = this.cartService.getCartItems().length;
  }

  getCartItems(){
    return this.cartService.getCartItems();
  }
}
