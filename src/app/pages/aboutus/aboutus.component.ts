import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  public carga_pagina:boolean;

  constructor() { }

  ngOnInit(): void {
    this.carga_pagina=true;
    this.efecto_carga();
  }

  efecto_carga()
  {
    setTimeout(() => {
      this.carga_pagina=false;
    }, 1000);
  }

}
