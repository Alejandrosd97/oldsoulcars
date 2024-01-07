import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrimerServicioService {

  hermanoPequeno = 'juan';
  hermanoMayor = 'pedro';

  saludar(hermano: string) {
    alert(`hola ${hermano}`)
  };

  constructor() { }
}
