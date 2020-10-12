import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [{
    title:'Propietarios / Conductores',
    icon:'mdi mdi-human',
    url:'third-party'   
  },
  {
    title:'Vehículos',
    icon:'mdi mdi-bus',
    url:'vehicle'   
  }];

  constructor() { }
}
