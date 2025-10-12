console.log("estoy conectado");

//alert("ventana emergente")
class Diseño{         //diseño para mostrar y elegir
    constructor(id, nombre, descripcion, enlace){
        this.id=id;   //acumular (numero de orden detarjetas)
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.enlace=enlace;
    }
}

class Repositorio{
    constructor(){
        this.diseños=[]; //array de objetos (Propiedad activities => Un arreglo para almacenar los distintos diseños.)
        this.cont=1; //contador
    }
    traeTodosLosDiseños(){
        return this.diseños; //devuelve el array con todos los objetos/diseños cargados
    }
    crearDiseño(nom,desc,enlace){
        let objAct=new Diseño(this.cont,nom,desc,enlace); //objeto que va a l array
        this.diseños.push(objAct);
        this.cont++;
        return "Creado";
    }
    borrarDiseño(id){ //=> Debe recibir un id y filtrar el arreglo para eliminar la actividad correspondiente.
        let arrDiseñosLimpio=this.diseños.filter(objeto=>objeto.id!==id); //el arrego contiene objetos
        if (arrDiseñosLimpio!==""){  //si encontró el elemento
            this.diseños=arrDiseñosLimpio; //modifico el array 
        }               
        return this.diseños;
    }
}

let repositorio =new Repositorio();
//**************PRUEBAS ****************/
repositorio.crearDiseño("vidriera1", "temporada octubre","enlace URL imagen1");
console.log(repositorio.diseños[0]);
repositorio.crearDiseño("pared1", "ambiente cool","enlace URL imagen2");
console.log(repositorio.diseños[1]);
repositorio.crearDiseño("auto1", "racingspeedcool","enlace URL imagen3");
console.log(repositorio.diseños[2]);
repositorio.crearDiseño("vidriera2", "navidad01","enlace URL imagen4");
console.log(repositorio.diseños[3]);

console.log(repositorio.diseños);

repositorio.borrarDiseño(3);
console.log(repositorio.diseños);
console.log(repositorio.traeTodosLosDiseños());
//**************FIN PRUEBAS ****************/

//**************DOM AUN NO FUNCIONA************************** */
const botonE=documents.getElementsByID("botonEnviar");
//botonE.addEventListener("click",()=>{}); //dblclick//

botonE.addEventListener("click",(event)=>{
    event.preventDefault();
    const inputNombre=document.getElementById("nombre");
    const inputDescripcion=document.getElementById("desc");
    const inputUrl=document.getElementById("URLimg");
    
    const nombre=inputNombre.value;
    const desc=inputDescripcion.value;
    const enlace=inputUrl.value;

    repositorio.crearActividad(nombre,desc,enlace);
    const tarj=document.createElement("div");
    const titPrinc=document.createElement("h1");
    const descrip=document.createElement("P");
    const im=document.createElement("img");
    
    tarj.classList.add("tarjeta"); //definido en styles ve si no hacer otro aparte

    titPrinc.innerHTML=nombre;
    descrip.innerHTML=desc;
    im.src=enlace;



});

//botonE.addEventListener("dblclick",func);
//const func=()=>{consolelog("tocandoboton")};