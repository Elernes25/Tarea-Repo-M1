console.log("estoy conectado");

//alert("ventana emergente")
class Activity {
    constructor(id, nombre, descripcion, enlace){
        this.id=id;   //acumular (numero de orden detarjetas)
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.enlace=enlace;
    }

}

class Repositorio{
    constructor(){
        this.actividades=[]; //array de objetos
        this.cont=1; //contador
    }
    traeTodasLasActividades(){
        return this.actividades; //devuelve el array con todos los objetos cargados
    }
    crearActividad(nom,desc,enlace){
        const objAct=new Activity(this.contador,nom,desc,enlace); //objeto que va a l array
        this.actividades.push();
        this.contador++;
        return "Creado";

    }
}
let repositorio =new Repositorio();

//
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