let personas =[
{nombre:"Miguel", apellido:"Rondanelli", edad:24},
{nombre:"Manuel", apellido:"Alfaro", edad:28}]
let indiceModificar;

function cargar(arreglo){
    document.querySelector("tbody").innerHTML="";
    arreglo.forEach((element, index)=>{
        document.querySelector("tbody").innerHTML += 
        `<tr onmouseover="pintar(this)" onmouseout="despintar(this)">
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.edad}</td>
                <td><span class="material-symbols-outlined" onclick="modificar(${index})">
                edit
                </span></td>
                <td><span class="material-symbols-outlined" onclick="eliminar(${index})">
                delete
                </span></td>
        </tr>`
    })  
}

function agregar(){
    let var_nombre = document.querySelector("#txtNombre").value;
    let var_apellido = document.querySelector("#txtApellido").value;
    let var_edad = document.querySelector("#nbmEdad").value;

    personas.push({nombre:var_nombre, 
                   apellido:var_apellido, 
                   edad:var_edad})                  
    cargar(personas)
}

function pintar(row){
    //console.dir(row);
    row.style.background ="yellow";
}
function despintar(row){
    //console.dir(row);
    row.style.background ="none";
}

function modificar(indice){
  document.querySelector("#txtNombre").value = personas[indice].nombre;
  document.querySelector("#txtApellido").value = personas[indice].apellido;
  document.querySelector("#nbmEdad").value = personas[indice].edad;
  document.querySelector("#btnAgregar").hidden = true;
  document.querySelector("#btnEditar").hidden = false;
  indiceModificar = indice;
}


function editar(){
    let var_nombre = document.querySelector("#txtNombre");
    let var_apellido = document.querySelector("#txtApellido");
    let var_edad = document.querySelector("#nbmEdad");


    personas[indiceModificar].nombre = var_nombre.value;
    personas[indiceModificar].apellido = var_apellido.value;
    personas[indiceModificar].edad = var_edad.valueAsNumber;

    var_nombre.value="";
    var_apellido.value="";
    var_edad.value=0;

  document.querySelector("#btnAgregar").hidden = false;
  document.querySelector("#btnEditar").hidden = true;

    cargar(personas)
}


function eliminar(indice){
    console.log(personas)
    personas.splice(indice,1);
    console.log(personas)

    cargar(personas)

}


function buscar(){
    let nombre_buscar = document.getElementById("txtNombreBuscar").value
    if(nombre_buscar){
        cargar(personas.filter(obj => obj.nombre.match(nombre_buscar)))
    }else{
        cargar(personas)
    }
    
}


cargar(personas)