'use strict';

onload = inicia; //EJECUTA AL CARGAR EL DOCUMENTO
onscroll = desplaza; //EJECUTA AL TERMINAR EL DESPLAZAMIENTO

var desplazamiento,
    contenedor;

function inicia() {
/* REFIERE AL ELEMENTO CONTENEDOR DEL DOCUMENTO */
  contenedor = document.querySelector('main');

/* MIDE LA ALTURA DEL CONTENEDOR Y LA PASA AL body */
  document.body.style.height = contenedor.offsetHeight + 'px'
}

function desplaza() {
/* PASA LA MISMA DISTANCIA DE DESPLAZAMIENTO AL CONTENEDOR COMO top NEGATIVO */
  contenedor.style.top = -pageYOffset + 'px';
}
