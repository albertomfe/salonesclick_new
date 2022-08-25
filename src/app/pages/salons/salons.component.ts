import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../../auth.service';

//importar variables globales
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-salons',
  templateUrl: './salons.component.html',
  styleUrls: ['./salons.component.css'],
  providers:[AuthService],/*,ConstantesService*/
})
export class SalonsComponent implements OnInit {

  public carga_pagina:boolean;

  /*urlBase*/
  public url:string;
  /**info user loged */
  public usuario_logeado:any;

  /**mensajes y carga */
  public msg_error:string;
  public msg_success:string;
  public cargando:number;

  public placeholder:boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _AuthService:AuthService,
  )
  {
    this.placeholder=true;
    this.url=environment.baseUrl;
    //carga template
    this.carga_pagina=true; 
    this.usuario_logeado=[ {name: "",mail:"",image:"" } ];
  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params) => { /*usar parametros*/   });
    this.efecto_carga();
    //quitarlo y ponerlo en el fetch al servicio
    this.efecto_placeholder();
  }



  
  efecto_placeholder()
  {
    setTimeout(() => {
      this.placeholder=false;
    }, 4000);//4000
  }

  efecto_carga()
  {
    setTimeout(() => {
      this.carga_pagina=false;
    }, 2000);//2000
  }



  desvanecer_alerta()
  {
    setTimeout(() => {
      this.msg_error='';
      this.msg_success='';
    }, 4000);
  }






}
