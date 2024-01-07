import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cars, Car } from '../cars/cars.mock';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

  car?: Car
  cars = cars

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.car = cars.find((c) => c.id == params['carId'])
    })
  }
}
