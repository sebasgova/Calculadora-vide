function calcular(){

var minutos = document.getElementById("minutos").value;
var precio = document.getElementById("precio").value;
var correcciones = document.getElementById("correcciones").value;

var total = (minutos * precio) + (correcciones * 5);