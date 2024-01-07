import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Output() enviarMensaje = new EventEmitter<string>();

  @Input() car: any = {};





}
