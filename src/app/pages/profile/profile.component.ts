import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../../auth.service';

//importar variables globales
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[AuthService],/*,ConstantesService*/
})
export class ProfileComponent implements OnInit {
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

  //cambio password
  public msg_error_pass:string;
  public msg_success_pass:string;

  public passOld:string;
  public passNew:string;
  public passConfirm:string;

  /*ultimas sesiones activas*/
  public sessions:any;


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

    this.msg_error_pass="";
    this.msg_success_pass="";

    this.passOld="";
    this.passNew="";
    this.passConfirm="";

    this.sessions = new Array();
    this.validar_token();
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
        this.obtener_sesiones();
      },
      error=>{}
    );
  }


    
    cambiar_datos()
    {
      if(this.nombre=="" || this.apellido=="" || this.mail=="" || this.id==0)
      {
        //Efecto de Carga
        this.msg_error=' Capture el Password Porfavor ';
        this.msg_success='';

        this.desvanecer_alerta();
        return 0;
      }
      else
      {
        //request
        this._AuthService.changeData(this.nombre,this.apellido,this.mail,this.id).subscribe(
          resultado=>{
            this.msg_success="Los Datos se Actualizaron Correctamente";
            this.msg_error="";
            this.desvanecer_alerta();
          },
          error=>{
            this.msg_error="Error de Actualización";
            this.msg_success="";
            this.desvanecer_alerta();
          }
        );
      }
    }



    
    cambiar_password()
    {

      if(this.passNew.length<=5 || this.passConfirm.length<=5 ){
        //Efecto de Carga
        this.msg_error_pass=' Las contraseñas deben contener mas de 5 caracteres ';
        this.msg_success_pass='';
        this.desvanecer_alerta();
        return 0;
      }

      if(this.passOld=="" || this.passNew=="" || this.passConfirm=="" || this.id==0)
      {
        //Efecto de Carga
        this.msg_error_pass=' Capture los Password Porfavor ';
        this.msg_success_pass='';
        this.desvanecer_alerta();
        return 0;
      }
      else
      {
        //request
        this._AuthService.changePass(this.passOld,this.passNew,this.passConfirm,this.id).subscribe(
          resultado=>{
            this.msg_success_pass="La Contraseña se Actualizo Correctamente";
            this.msg_error_pass="";
            this.desvanecer_alerta();
            this.passOld="";
            this.passNew="";
            this.passConfirm="";
          },
          error=>{
            this.msg_error_pass="Error de Actualización";
            this.msg_success_pass="";
            this.desvanecer_alerta();
            this.passNew="";
            this.passConfirm="";
          }
        );
      }
    }




    obtener_sesiones()
    {
        //request
        this._AuthService.getSesions(this.id).subscribe(
          resultado=>{
            this.sessions=resultado['items']['result'];
            console.log(this.sessions);
          },
          error=>{
            this.sessions=[];
          }
        );

    }



}
