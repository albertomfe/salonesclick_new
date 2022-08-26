import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent implements OnInit {

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
