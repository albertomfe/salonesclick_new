import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../../auth.service';

//importar variables globales
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[AuthService],/*,ConstantesService*/
})
export class DashboardComponent implements OnInit {

  public carga_pagina:boolean;

  public msg_error:string;
  public msg_success:string;
  public cargando:number;

  /*datos a mostrar ahora*/
  public nombre:string;
  public apellido:string;
  public mail:string;
  public imagen:string;
  private id:number;
  
  /*localstorage*/
  public acceso:boolean;
  public user_login;
  public usr_json:any;
  public info_user:any;
  public usuario_logeado:any;

  /*urlBase*/
  public url:string;

  public isProveedor:number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _AuthService:AuthService,
  ) 
  {
    this.url=environment.baseUrl;
    //carga template
    this.carga_pagina=true;
    //form
    this.msg_error="";
    this.msg_success="";
    this.acceso=false;

    this.validar_token();

    this.isProveedor=0;
  }


  ngOnInit(): void {
    this.carga_pagina=true;
     this.efecto_carga();
  }


 
  efecto_carga()
  {
    setTimeout(() => {
      this.carga_pagina=false;
    }, 2000);
  }

  desvanecer_alerta()
  {
    setTimeout(() => {
      this.msg_error='';
      this.msg_success='';
    }, 4000);
  }


  validar_token()
  {
    this.acceso=false;
    if(typeof(Storage)!=="undefined")
    {
      if(localStorage.getItem("user"))
      {
        var token=JSON.parse(localStorage.getItem("user"));


        if(token!="")
        {
          this._AuthService.validate(token).subscribe(
            resultado=>{
              this.info_user=resultado||[];

              this.acceso=true;
              this.nombre=this.info_user.user.nombres;
              this.apellido=this.info_user.user.apellidos;
              this.mail=this.info_user.user.mail;
              this.imagen=this.info_user.user.imagen;
              //console.log(token);
              this.getIdUser(token);
              this.verifyProveedor(token);//revisar si es proveedor
            },
            error=>
            {
              localStorage.removeItem("user");
              this.acceso=false;
              window.location.href='./Home';
            }
          );
        }//validar mail vacio
        else
        {
          this.acceso=false;
          window.location.href='./Home';
        }
      }//localstorage validacion
      else
      {
        this.acceso=false;
        window.location.href='./Home';
      }
    }//validar que permita el localstorage
    else{
      this.acceso=false;
      window.location.href='./Home';
    }
  }




  getIdUser(token:string)
  {
    //request
    this._AuthService.getUser(token).subscribe(
      resultado=>{
        //console.log(resultado['items']['result']);
        this.id=resultado['items']['result']||0;        
      },
      error=>{}
    );
  }



  verifyProveedor(token:string)
  {
    //request
    this._AuthService.checkProveedor(token).subscribe(
      resultado=>{
        //console.log(resultado['items']['result']);
        this.isProveedor=resultado['items']['result']||0;        
      },
      error=>{}
    );
  }


}
