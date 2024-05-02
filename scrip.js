/*const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

document.querySelector('.menu-btn').addEventListener('click', activarMenu);

let linea1 = document.querySelector('.btn-line1');
let linea2 = document.querySelector('.btn-line2');
let linea3 = document.querySelector('.btn-line3');

function activarMenu() {
  linea1.classList.toggle('activelinea1__btn-menu');
  linea2.classList.toggle('activelinea2__btn-menu');
  linea3.classList.toggle('activelinea3__btn-menu');
}
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelector('.menu-btn').addEventListener("mouseover", cambiarFondo);
let cambioColor1 = document.querySelector('.btn-line1');
let cambioColor2 = document.querySelector('.btn-line2');
let cambioColor3 = document.querySelector('.btn-line3');

function cambiarFondo() {
  cambioColor1.style.backgroundColor = "darkblue";
  cambioColor2.style.backgroundColor = "skyblue";
  cambioColor3.style.backgroundColor = "white";
}
menuBtn.addEventListener('mouseover', cambiarFondo);

document.querySelector('.menu-btn').addEventListener("mouseout", cambiarFondo2);
let cambioColor4 = document.querySelector('.btn-line1');
let cambioColor5 = document.querySelector('.btn-line2');
let cambioColor6 = document.querySelector('.btn-line3');

function cambiarFondo2() {
  cambioColor4.style.backgroundColor = "";
  cambioColor5.style.backgroundColor = "";
  cambioColor6.style.backgroundColor = "";
}
menuBtn.addEventListener('mouseout', cambiarFondo2);

function mostrarVistaPrevia(idContenido) {
  let vistaPrevia = document.getElementById('vista-previa');
  let contenidoEnlace = document.getElementById(idContenido);

  vistaPrevia.style.display = 'block';
  vistaPrevia.innerHTML = contenidoEnlace.innerHTML;
}*/

import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById("app");

const root = ReactDOM.createRoot(appDomElement);

const menuBtn = React.createElement('menu-btn', null, null);

root.render(menuBtn);
