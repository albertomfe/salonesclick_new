/*modulos apra hacer peticiones externas y modificar cabeceras*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

//importar variables globales
import { environment } from '../environments/environment';

//variables super globales
@Injectable()
export class AuthService
{

  public url:string;
  public info_usr:any;
  public informacion_usuario:any;

  constructor(public _http:HttpClient)
  {
    this.url="";
    this.info_usr={};
  }

  //retornar la informacion del USuario
  getInformacionUsuario()
  {
    var usr_json=JSON.parse(localStorage.getItem("usuario"));
    return this.informacion_usuario;
  }


  //autentificacion
  validate(token:string):Observable<any>
  {
     let headers = { "Accept": "application/json" };
     let parametros=new FormData();
     var param=`
     {
         "Request":
         {
             "body":
             {
                 "token":"`+token+`"
             },
             "auth":{"user":"`+environment.user+`","password":"`+environment.password+`"}
         }
     }
     `;
     this.url=environment.baseUrl+"api/services/usuarios/validate";
     return this._http.post(this.url,param,{headers:headers});
  }



   /*Obtener Usuario*/
   getUser():Observable<any>{
    return this._http.get(this.url+'/api/users/2');
  }


    //autentificacion
    login(user,password):Observable<any>{
        //Establecemos cabeceras
        let headers = { "Accept": "application/json" };
        let parametros=new FormData();
        var param=`
        {
            "Request":
            {
                "body":
                {
                    "user":"`+user+`",
                    "password":"`+password+`"
                },
                "auth":{"user":"`+environment.user+`","password":"`+environment.password+`"}
            }
        }
        `;

        this.url=environment.baseUrl+"api/services/usuarios/login";
        return this._http.post(this.url,param,{headers:headers});
    }



   //cambiar datos
   register(nombre: string,apellido: string,correo: string,password: string,telefono: string):Observable<any>{
    //Establecemos cabeceras
    let headers = { "Accept": "application/json" };
    let parametros=new FormData();
    var param=`
    {
        "Request":
        {
            "body":
            {
              "name":"`+nombre+`",
              "surname":"`+apellido+`",
              "user":"`+correo+`",
              "phone":"`+telefono+`",
              "password":"`+password+`"
            },
            "auth":{"user":"`+environment.user+`","password":"`+environment.password+`"}
        }
    }
    `;

    this.url=environment.baseUrl+"api/services/usuarios/register";
    return this._http.post(this.url,param,{headers:headers});
  }



}