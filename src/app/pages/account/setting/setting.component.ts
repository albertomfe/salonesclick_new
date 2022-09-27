import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../../../auth.service';


//importar variables globales
import { environment } from '../../../../environments/environment';



@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers:[AuthService],/*,ConstantesService*/
})
export class SettingComponent implements OnInit {

  
  public carga_pagina:boolean;

  public msg_error:string;
  public msg_success:string;
  public cargando:number;



  /*localstorage*/
  public acceso:boolean;
  public user_login;
  public usr_json:any;
  public info_user:any;
  public usuario_logeado:any;

  /*urlBase*/
  public url:string;
  public id:number;


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
    this.cargando=0;
    this.acceso=false;
    this.usuario_logeado=[ {name: "",mail:"",image:"" } ];
    this.sessions = new Array();
    /**form */  
    this.validar_token();
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


  /*crear mis toast*/
  crearMiToast(texto: string)
  {
    document.getElementById('contenidoToast').innerHTML=texto;
    var toast=document.getElementById('msg_modal');
    toast.style.display='block';
  }

  /*desvanecer mis toast*/
  desvanecerToast()
  {
    var toast=document.getElementById('msg_modal');
    setTimeout(() => {
      toast.style.display='none';
    }, 5000);
  }

  cerrar_toast()
  {
    console.log('cerrar a la fuerza el toast');
    var toast=document.getElementById('msg_modal');
    toast.style.display='none';
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
              //console.log(this.info_user);
              this.getIdUser(token);
              this.acceso=true;
              
              //this.getInfo();
            },
            error=>
            {
              localStorage.removeItem("user");
              this.acceso=false;
              //window.location.href='./Login';
            }
          );
        }//validar mail vacio
        else
        {
          this.acceso=false;
        }
      }//localstorage validacion
      else
      {
        this.acceso=false;
      }
    }//validar que permita el localstorage
    else
    {
      this.acceso=false;
    }
  }//funcion de validacion
  



}
