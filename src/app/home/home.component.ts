import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ItemComponent } from '../item/item.component';
import { GridComponent } from '../grid/grid.component'
import { BlueComponent } from '../blue/blue.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeroComponent, NavbarComponent, ItemComponent, GridComponent, BlueComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
