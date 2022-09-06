import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../../auth.service';


//importar variables globales
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-be-provider',
  templateUrl: './be-provider.component.html',
  styleUrls: ['./be-provider.component.css'],
  providers:[AuthService],/*,ConstantesService*/
})
export class BeProviderComponent implements OnInit {


  public carga_pagina:boolean;

  public msg_error:string;
  public msg_success:string;
  public cargando:number;

  public password:string;
  public correo:string;


  /*localstorage*/
  public acceso:boolean;
  public user_login;
  public usr_json:any;
  public info_user:any;
  public usuario_logeado:any;

  /*urlBase*/
  public url:string;


  /*datos a mostrar ahora*/
  public nombre:string;
  public apellido:string;
  public mail:string;
  public imagen:string;
  public id:number;

  /**formulario */
  public rfc:string;
  public nombre_contribuyente:string;
  public direccion:string;
  public numero_exterior:string;
  public numero_interior:string;
  public estado:string;
  public ciudad:string;
  public curp:string;
  public codigo_postal:string;

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
              this.nombre=this.info_user.user.nombres;
              this.apellido=this.info_user.user.apellidos;
              this.mail=this.info_user.user.mail;
              this.imagen=this.info_user.user.imagen;
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
  


  enviar()
  {

    
    let rfc=this.rfc||'';
    let nombre_contribuyente=this.nombre_contribuyente||"";
    let direccion=this.direccion||""; 
    let numero_exterior=this.numero_exterior||""; 
    let numero_interior=this.numero_interior||""; 
    let estado=this.estado||""; 
    let ciudad=this.ciudad||"";


    if(rfc=="" || nombre_contribuyente=="" || direccion=="" || numero_exterior==""  || estado=="" || ciudad=="" )
    {
      this.crearMiToast(" Capture los Datos Porfavor ");
      this.desvanecerToast();
      return 0;
    }
    else
    {
      console.log('enviando la solicitud ....');
        //request
        this._AuthService.beProviderService(this.id,this.rfc,this.nombre_contribuyente,this.direccion,this.numero_exterior,this.numero_interior,this.ciudad,this.estado,this.codigo_postal,this.curp).subscribe(
          resultado=>{
            this.msg_error="";
            this.info_user=resultado||[];

            this.crearMiToast("Tu solicitud se ha enviado, se le notificara via plataforma y correo electronico cuando su solicitud este aprobada. ");
            this.desvanecerToast();
            return 0;           
          },
          error=>{
            this.crearMiToast("No pudo enviarse su solicitud,Comuniquese con el Administrador ");
            this.desvanecerToast();
            return 0;
          }
        );


    }


      



  }



}
