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

let repositorio =new Repositorio();   //**instancia de la clase Repositorio */
//**************PRUEBAS ****************/
repositorio.crearDiseño("vidriera1", "temporada otoño-inverno","https://plotter7.com.ar/wp-content/webpc-passthru.php?src=https://plotter7.com.ar/wp-content/uploads/2019/10/temporada-paraguas.jpg&nocache=1");
console.log(repositorio.diseños[0]);
repositorio.crearDiseño("pared1", "ambiente cool","https://dbdzm869oupei.cloudfront.net/img/sticker/medium/6447cf4adcda7.jpg");
console.log(repositorio.diseños[1]);
repositorio.crearDiseño("auto1", "racingspeedcool","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoadmTkUe3X2a26c185NL6YNNrXm4GzwsZlxrB2FfVOJh3frv2ZihjsZaGwfm-oeEEWH1NlLNAJOn5UU3RDzKRfO_2I5HMaxMOn4VkT6gmaK8uJH2fGZ1sbGM2Feewoydq7oaB48r4dkU0/s1600/TE+-+Tuning+Extremo+-+Ploteados+y+vinilos-para-coches.jpg");
console.log(repositorio.diseños[2]);
repositorio.crearDiseño("vidriera2", "navidad01","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQo0ovStwncdzROYvI_eAnhHZ9VXL1z89ovipBJusMcYZd5Q0y-Zy3P09RbyZVCkPzCRs5V6F8kyOoOT5QhI1H27y144U5k09wqutpqa2eZW2f2WibUvIL-mQ");
console.log(repositorio.diseños[3]);

console.log(repositorio.diseños);

repositorio.borrarDiseño(3);
console.log(repositorio.diseños);
console.log(repositorio.traeTodosLosDiseños());
//**************FIN PRUEBAS ****************/

//**************DOM FUNCIONA************************** */
const botonE=document.getElementById("botonEnviar");
//botonE.addEventListener("click",()=>{}); //dblclick//
//botonE.addEventListener("dblclick",func);
//const func=()=>{consolelog("tocandoboton")};

botonE.addEventListener("click",(event)=>{
    event.preventDefault(); //Sin preventDefault(), el navegador enviaría el formulario y recargaría la página
    const inputNombre=document.getElementById("nombre");
    const inputDescripcion=document.getElementById("desc");
    const inputUrl=document.getElementById("URLimg");
    
    const nombre=inputNombre.value;
    const desc=inputDescripcion.value;
    const enlace=inputUrl.value;

    if ((nombre=="")||(desc=="")||(enlace=="")){     //**validar campos */
        console.log("Debe completar todos los campos!");
       alert("Debe completar todos los campos!");
    } else{
        console.log(nombre);
        console.log(desc);
        console.log(enlace);

        repositorio.crearDiseño(nombre,desc,enlace);
    
        //**creacion de tarjeta para mostrar imagen */
        const tarjeta=document.createElement("div");
        const tituloPrincipal=document.createElement("h2");
        const descrip=document.createElement("P");
        const im=document.createElement("img");
    
        tarjeta.classList.add("tarjetaCreada"); //definido en styles.css 

        tituloPrincipal.innerHTML=nombre;
        descrip.innerHTML=desc;
        im.src=enlace;
        im.style.width="40%";

        tarjeta.appendChild(tituloPrincipal);
        tarjeta.appendChild(descrip);
        tarjeta.appendChild(im);
        document.getElementById("contenedor-de-tarjetas").appendChild(tarjeta);
    }
});

/****************ACTIVIDAD 03********/
let dsn= new Diseño();
function objetodiseñoHtml(dsn){
    const {id,nombre,descripcion,enlace} =dsn;    //destructuring
    const tarjeta=document.createElement("div");
    const tituloPrincipal=document.createElement("h2");
    const descrip=document.createElement("P");
    const im=document.createElement("img");
    const btnBorrar=document.createElement("Button");
    
    tarjeta.classList.add("tarjetaCreada"); //definido en styles.css 

    tituloPrincipal.innerHTML=nombre;
    descrip.innerHTML=descripcion;
    im.src=enlace;
    im.style.width="40%";
    btnBorrar.innerHTML="Borrar";

    
    btnBorrar.setAttribute("data-id", id);  // el mismo id del objeto 
    btnBorrar.addEventListener("click", function() {  
      repositorio.borrarDiseño(id);
      mostrarTodo(); //refresca los cambios
    });

       
    tarjeta.appendChild(tituloPrincipal);
    tarjeta.appendChild(descrip);
    tarjeta.appendChild(im);
    tarjeta.appendChild(btnBorrar);
   
    //Retornar el <div> finalizado con todos los elementos correspondientes dentro.                
    return tarjeta;
}   


/********ACTIVIDAD 04 ********/
function mostrarTodo(){
    document.getElementById("contenedor-de-tarjetas").innerHTML="";  //vaciar contenido
    const arrayTodos = repositorio.traeTodosLosDiseños();
    const todosHTML=arrayTodos.map(obj=>objetodiseñoHtml(obj));
    todosHTML.forEach(function(valor){
        document.getElementById("contenedor-de-tarjetas").appendChild(valor); 
    })
}


const botonM=document.getElementById("botonMostrar");
botonM.addEventListener("click",(event)=>{
    event.preventDefault();
    
    mostrarTodo();
}
)
