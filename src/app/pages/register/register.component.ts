import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../../auth.service';


//importar variables globales
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthService],/*,ConstantesService*/
})
export class RegisterComponent implements OnInit {
 
  public carga_pagina:boolean;

  /*localstorage*/
  public acceso:boolean;
  private user_login;
  private usr_json:any;
  private info_user:any;

  /*urlBase*/
  private url:string;

  /*datos a mostrar ahora*/
  public telefono:string;
  public nombre:string;
  public apellido:string;
  public correo:string;
  public password:string;
  public confirm_password:string;

  //cambio de datos usuario
  public msg_error:string;
  public msg_success:string

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _AuthService:AuthService,
  )
  { 
    this.url=environment.baseUrl;

    //carga template
    this.carga_pagina=true;

    this.telefono='';
    this.nombre='';
    this.apellido='';
    this.correo='';
    this.password='';
    this.confirm_password='';

    //form
    this.msg_error="";
    this.msg_success="";
    this.acceso=false;
  }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params) => { /*usar parametros*/   });
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


    registrar()
    {
      console.log('registrar');

      if(this.telefono=="" || this.nombre=="" || this.apellido=="" || this.correo=="" || this.password=="" || this.confirm_password=="")
      {
        //Efecto de Carga
        this.msg_error=' Capture los datos Porfavor ';
        this.msg_success='';
        this.desvanecer_alerta();
        return 0;
      }
      else
      {

        if(this.password != this.confirm_password )
        {
          //Efecto de Carga
          this.msg_error=' Las Contraseñas no coinciden ';
          this.msg_success='';
          this.desvanecer_alerta();
          return 0;
        }
        else
        {
          //request
          this._AuthService.register(this.nombre,this.apellido,this.correo,this.password,this.telefono).subscribe(
            resultado=>{
              this.msg_error='';
              this.msg_success='Su cuenta se Creo correctamente, Ahora puede Inciar Sesión';
              this.desvanecer_alerta();
              setTimeout(() => {
                location.href='./Login'
              }, 5000);
            },
            error=>{
              this.msg_error="Error de Actualización";
              this.msg_success="";
              this.desvanecer_alerta();
            }
          );
        }


      }
    }

}
