import { Component, OnInit, inject } from '@angular/core';
import { CarComponent } from '../car/car.component';
import { PrimerServicioService } from '../primer-servicio.service';
import { FetchService } from '../servicios/fetch-service.service';
import { environment } from '../../environments/environment';

const url = environment.baseUrl

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CarComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {

  private fetchService = inject(FetchService)

  cars: any = []

  ngOnInit(): void {
    this.loadPosts()
  }

  url = 'http://localhost:3000/api/cars'

  loadPosts() {
    this.fetchService.fetchCars(url).subscribe(
      {
        next: (c) => { this.cars = c },
        error: (e) => { console.log(e) }
      })
  }

  private _primerServicio = inject(PrimerServicioService)



}
