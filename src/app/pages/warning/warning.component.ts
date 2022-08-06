import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  public carga_pagina:boolean;

  constructor() {
    this.carga_pagina=true;
    this.efecto_carga();
   }

  ngOnInit(): void {
    this.efecto_carga();
  }

  efecto_carga()
  {
    setTimeout(() => {
      this.carga_pagina=false;
    }, 1000);
  }

}
