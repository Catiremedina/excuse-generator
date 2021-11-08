/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excusometro = () => {
    let quien = ["Mi perro", "El gato", "Mi mama", "Aquel"];
    let que = ["se comio", "se robo", "escondio", "rompio", "batqueo"];
    let aque = ["la tarea", "el computador", "mi almuerzo", "los brownie"];
    let cuando = ["hoy", "ayer", "antielsito", "anoche", "ahorita mesmo"];

    let quieni = Math.floor(Math.random() * 4);
    let quei = Math.floor(Math.random() * 4);
    let aquei = Math.floor(Math.random() * 4);
    let cuandoi = Math.floor(Math.random() * 4);

    return (
      quien[quieni] +
      " " +
      que[quei] +
      " " +
      aque[aquei] +
      " " +
      cuando[cuandoi]
    );
  };
  document.getElementById("eboton").addEventListener("click", () => {
    document.getElementById("excusa").innerHTML = excusometro();
  });
};
