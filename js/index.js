//La idea es hacer como una app de organizción medio inspirada en Notion 

let hoy = new Date();
console.log(hoy);
let usuario = prompt(`Ingrese su nombre`); 
let nuevaTarea;
const listaDeTareas=[];
let cuantasTareas = parseInt(prompt(`¿Cuántas tareas vas a realizar hoy?(Ingresa un número)`))

const saludar = () =>{ alert(`Bienvenido/a ${usuario} listo/a para organizar tu día?`)}

function ingresarTarea(){
    nuevaTarea= new Tarea(prompt(`Ingrese la tarea que tenes que realizar `),prompt(`Ingrese una breve descripcion`));    
    return nuevaTarea
}

class Tarea{
    constructor(titulo,descripcion){
        this.titulo=titulo;
        this.descripcion=descripcion;
    }
}

saludar();

for (let i=0; i<cuantasTareas;i++){
    listaDeTareas.push(ingresarTarea());
}

listaDeTareas.forEach (el => console.log(el));


