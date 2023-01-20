import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navElem = ['dashboard','orders', 'products', 'promocodes', 'import products', 'delivery', 
  'notification',
    'settings',
    'banners']

}
