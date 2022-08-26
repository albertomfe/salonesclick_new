import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

//importar variables globales
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[AuthService],/*,ConstantesService*/
})
export class NavComponent implements OnInit {

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


  constructor(
    private _AuthService:AuthService,
  ) 
  { 
      this.url=environment.baseUrl;
      //form 
      this.acceso=false;
      this.usuario_logeado=[ {name: "",mail:"",image:"" } ];
      this.validar_token();
  }

  ngOnInit(): void {
    
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
    else{
      this.acceso=false;
    }
  }//funcion de validacion




}
