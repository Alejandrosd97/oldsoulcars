import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  isEditable = false;
  cantidad = 0
  mas = () => {
    this.cantidad++
    alert(this.cantidad)
  }
  menos = () => {
    this.cantidad++
  }
}
