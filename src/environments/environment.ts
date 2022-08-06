// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  facebook:"https://www.facebook.com/",
  twitter:"https://www.twitter.com/",
  instagram:"https://www.instagram.com/",
  pinterest:"https://www.pinterest.com/",
  linkedin:"https://www.linkedin.com/",
  correo:"example@gmail.com/",
  baseUrl:"http://localhost/SDA_SALONESCLICK/",/*back*/
  user:"BaulProgram",
  password:"T@xps20man",
  reg_x_pag:3,
  gratuito:[
    {
      salones: 1,
      servicios: 1,
      platillos: 3,
      imagenes_producto:1
    }
  ],
  basico:[
    {
      salones: 2,
      servicios: 4,
      platillos: 6,
      imagenes_producto:3
    }
  ],
  profesional:[
    {
      salones: 5,
      servicios: 10,
      platillos: 20,
      imagenes_producto:6
    }
  ],
  vip:[
    {
      salones: 10,
      servicios: 10,
      platillos: 100,
      imagenes_producto:20
    }
  ]
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
