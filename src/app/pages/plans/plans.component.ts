import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  public carga_pagina:boolean;

  constructor() {
    this.carga_pagina=true;
    this.efecto_carga();
   }

  ngOnInit(): void {
  }


  efecto_carga()
  {
    setTimeout(() => {
      this.carga_pagina=false;
    }, 1000);
  }


}
