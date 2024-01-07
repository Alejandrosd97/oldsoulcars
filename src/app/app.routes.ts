import { Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component'
import { HomeComponent } from './home/home.component'
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [{
    path: 'cars', component: CarsComponent
}, {
    path: '', component: HomeComponent
}, {
    path: 'car/:carId', component: DetailComponent
}, {
    path: 'contact', component: ContactComponent
}];
