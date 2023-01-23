//variables

const btnencriptar = document.querySelector(".btnencriptar");
const btndesencriptar = document.querySelector(".btndesencriptar");
const btncopiar = document.querySelector('.btncopiar');

//eventos
(() => {

    btnencriptar.addEventListener('click', encriptar);
    btndesencriptar.addEventListener('click', desencriptar);
    texto2.addEventListener('click', copiar);

})()


//funciones

function encriptar() {
    var texto1 = document.getElementById("inputtexto").value.toLowerCase();
    var txtcifrado = texto1.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");

    
    document.getElementById("imgder").style.display= "none";
    document.getElementById("texto").style.display= "none";
    document.getElementById("parrafo").style.display= "none";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("texto2").style.display = "show";
    document.getElementById("texto2").style.display = "inherit";
    document.getElementById("btncopiar").style.display = "show";
    document.getElementById("btncopiar").style.display = "inherit";
    document.querySelector("#inputtexto").value = '';
}

function desencriptar() {
    var texto1 = document.getElementById("inputtexto").value.toLowerCase();
    var txtcifrado = texto1.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");

    document.getElementById("imgder").style.display= "none";
    document.getElementById("texto").style.display= "none";
    document.getElementById("parrafo").style.display= "none";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("texto2").style.display = "show";
    document.getElementById("texto2").style.display = "inherit";
    document.getElementById("btncopiar").style.display = "show";
    document.getElementById("btncopiar").style.display = "inherit"; //inherit es para que aparezca despues de ejecutar  la accion, quien la desaparece al comienzo es display:none
    document.querySelector("#inputtexto").value = '';
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
}