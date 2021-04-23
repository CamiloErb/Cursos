var vida, ataque, pocion;
var nombre, textoBienvenida;


ataque = 10;
vida = 100;

function muestraVida(nombreAtaque){
  console.log("Te atacaron con " + nombreAtaque);
  console.log("Vida: " + vida);
}

function ataqueEnemigo(danio, nombreAtaque){
  vida -= danio;
  muestraVida(nombreAtaque)
}

function bebePocion(){
  vida += pocion;
  console.log(vida);
}

var nro1, nro2, resultado;

function suma(nro1, nro2){
  var valor;
  nro1 = parseInt(nro1)
  nro2 = parseInt(nro2)
  valor = nro1 + nro2;
  return(valor);
}

function accion(){
  nro1 = prompt('Introduce el primer número');
  nro2 = prompt('Introduce el segundo número');
  resultado = suma(nro1, nro2);
  console.log(resultado);
}

var turno = 1;

var vivo = true;
var envenenado = false;
var quemado = false;

var pocion = 0;
var colaFenix = 1;
var pocionQuemaduras = 2;
var pocionVeneno = 3;

var atacar = 0;
var quemar = 1;
var envenenar = 2;
var fallar = 3;

function juegaTurno(){
  var jugadaCPU = Math.floor(Math.random() * 4);
  console.log(jugadaCPU);

if (vida <= 0){
  vivo = false;
}

if (vivo == true) {
      if(jugadaCPU == atacar){
        vida -= 10
        console.log("Atacaste al jugador");
      }
      if(jugadaCPU == quemar){
        quemado = true;
        console.log("Quemaste al jugador");
      }
      if(jugadaCPU == envenenar){
        envenenado = true;
        console.log("Envenenaste al jugador");
      }
      if (jugadaCPU == fallar){
        console.log("Fallaste");
      }
      muestraEstadoJugador();
     }
     else {
     console.log("Has muerto")
   }
}

function muestraEstadoJugador(){
  if (vivo == true){
    console.log(vida);
    if (envenenado == true){
     console.log("Envenenado");
    }
     if (quemado == true){
      console.log("Quemado");
    }
  }
  else{
    console.log("Estas Muerto");
  }
}

function usarItem(objeto){
 if (objeto == pocion){
   vida += 50;
   muestraEstadoJugador();
 }
 if (objeto == colaFenix ){
   if (vivo == false){
       vivo = true;
       vida = 25;
       muestraEstadoJugador();
     }
     else {
       console.log("No puedes usar este objeto")
     }
 }
 if (objeto == pocionQuemaduras){
   if (quemado == true){
      quemado = false;
      muestraEstadoJugador();
    }
  else{
    console.log("No estas quemado")
  }
}
if (objeto == pocionVeneno){
  if (envenenado == true){
    envenenado = false;
    muestraEstadoJugador();
  }
  else {
    console.log("No estas envenenado")
  }
}

}

function comprar(objeto){
  console.log("Has comprado un/a " + objeto)
}

/* explicacion de "switch"
  function comprar(objeto){
   switch(objeto){
   case 1:
   console.log("Has comprado una pocion");
   break
   case 2:
   console.log("Has comprado una espada");
   break
   case 3:
   console.log("Has comprado un escudo");
   break
   case 4:
   console.log("Has comprado un Arco");
   break
   default:
   console.log("Has coomprado algo")
   break
 } */


function crearEnemigo(){
  console.log("Enemigo creado")
}

function crear10Enemigos(cantidad){

  for(contador=1; contador<cantidad+1; contador++) {
    console.log("Valor contador " + contador);
    crearEnemigo();
  }

}

/* do/while do{hacer algo}while(mientras se cumpla esta condicion)
 tambien se puede hacer while solo donde la condicion va primero
 while(mientras se cumpla esta condcion){hacer esto} (son diferentes) */

function adivinarNumero(){

var numeroCPU = 0;
var numeroUsuario = 0;

numeroCPU = Math.floor((Math.random() * 10) + 1);


do{
  numeroUsuario = parseInt(prompt("Adivina el número (1-10)"));
  if(numeroUsuario == numeroCPU){
    alert("Has acertado")
  }
  else {
    if (numeroCPU < numeroUsuario){
        alert("Es más chico")
      }
      else {
        alert("Es más grande")
  }
  }

}while(numeroCPU != numeroUsuario);
}

/* setear intervalo es: setInterval(funcion principal que se repite
 donde corre el juego; 1000 milisgundos(1 seg)/ los fps); */
