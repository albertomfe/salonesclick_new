import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public carga_pagina:boolean;

  constructor() {   }

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
