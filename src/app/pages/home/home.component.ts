import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
