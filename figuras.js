//Codigo del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(ladoCuadrado) {
  return ladoCuadrado * 4;
}
// console.log("El perimetro del Cuadrado: " + perimetroCuadrado(ladoCuadrado));

function AreaCuadrado(ladoCuadrado) {
  return ladoCuadrado * ladoCuadrado;
}
console.log("El Area del Cuadrado: " + AreaCuadrado(5) + "cm^2");

console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );
// console.log("La altura del triangulo es de : " + alturaTriangulo);

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del Triangulo: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El Area del triangulo: " + areaTriangulo + "cm^2");
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function AreaTriangulo(altura, base) {
  return (base * altura) / 2;
}

console.groupEnd();

// Codigo del circulo
console.group("Circulo");
// const radioCirculo = 4;
// const diametro = radioCirculo * 2;
const pi = Math.PI;
// console.log("El radio del circulo: " + radioCirculo + "cm");
// console.log("El diametro del circulo: " + diametro + "cm");

// const perimetroCirculo = diametro * pi;
// console.log("El perimetro del circulo: " + perimetroCirculo + "cm");

// const areaCirculo = pi * radioCirculo * radioCirculo;
// console.log("El Area del circulo: " + areaCirculo + "cm^2");

function diametroCiruculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCiruculo(radio);
  return diametro * pi;
}

function AreaCiruculo(radio) {
  return radio * radio * pi;
}

console.groupEnd();

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = AreaCuadrado(value);
  alert(area);
}
