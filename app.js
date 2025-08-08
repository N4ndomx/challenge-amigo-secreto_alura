// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const ID_UL_AMIGOS = 'listaAmigos'
const ID_INPUT ='amigo'
const ID_RESULTADO = 'resultado';


let amigos = [];
function sortearAmigo() {
    const amigo = sortearAmigosArray()
    if (amigo) {
        asignarTextoElemento(ID_RESULTADO,amigo)
        limpiarDatos(ID_UL_AMIGOS);
        amigos=[]
    }else{
        alert('No haya amigos disponibles para sortear')
    }
}


function reiniciar_juego(){
    if (document.getElementById(ID_RESULTADO).innerHTML !== '') {
        limpiarDatos(ID_RESULTADO)
    }
}
function agregarAmigo() {
    reiniciar_juego()
    let nombre_amigo = document.getElementById(ID_INPUT).value;
    limpiarInput(ID_INPUT)
    if (esNombreValido(nombre_amigo)) {
        amigos.push(nombre_amigo);
        mostrarListaAmigos()
    }else{
        alert("Por favor, inserte un nombre");
    }
    
}

function sortearAmigosArray(){
    if (amigos.length === 0) return null;
    const amigoSeleccionado = amigos[ Math.floor(Math.random() * amigos.length)];
    return amigoSeleccionado;
}

function agregarAmigoALista(nombre) {
    let ul = document.getElementById(ID_UL_AMIGOS);
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(nombre));
    ul.appendChild(li);
}
function limpiarDatos(id) {
    let lista = document.getElementById(id);
    lista.innerHTML = ""
}
function mostrarListaAmigos(){
    limpiarDatos(ID_UL_AMIGOS)
    amigos.forEach((value =>{
        agregarAmigoALista(value)
    }))
}
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function limpiarInput(id) {
    document.getElementById(id).value = '';
}
function esNombreValido(nombre) {
    return nombre && nombre !== '';
}
