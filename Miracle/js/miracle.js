var canvas;
var ctx;
var fps = 50;








function inicializar(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");


  setInterval(function(){
    principal();
  }, 1000/fps);
}



function borraCanvas(){
  canvas.width = 1200;
  canvas.height = 900;
}

var disparo = function(x, y){
  this.x = x;
  this.y = y;
  this.velocidad = 8;

  this.dibuja = function(){
    ctx.fillRect(this.x, this.y, 2, 25);
  }

  
  this.mueveVertical = function(){
    this.y -= 10
  }

  this.clicRaton = function(){
    new this(600, 880)
    this.dibuja();
    this.mueveVertical();
  }

  document.addEventListener("mousedown", disparo.clicRaton(), false)

}


var personaje = function(x,y){
  this.x = x;
  this.y = y;
  this.derecha = true;
  this.arriba = true;
  this.vida = 100;

  this.dibuja = function(){
    ctx.fillStyle = "#FF000";
    ctx.fillRect(this.x, this.y, 50, 50);
  }

  

  this.mueveHorizontal = function(velocidad){

    if(this.derecha == true){
      if (this.x < 1100)
        this.x+= velocidad;
      else {
      this.derecha = false;
    }
  } 
  else {
    if (this.x > 50)
      this.x-= velocidad;
      else
    {this.derecha = true ;
    }
  } 
  }


  this.mueveVertical = function(velocidad){

    if(this.arriba == true){
      if (this.y < 800)
        this.y+= velocidad;
      else {
      this.arriba = false;
    }
  } 
  else {
    if (this.y > 50)
      this.y-= velocidad;
      else
    {this.arriba = true ;
    }
  } 
  }
}






var per1 = new personaje(10,50);
var per2 = new personaje(10,200);
var per3 = new personaje(10,400);




function principal(){
  borraCanvas();
  per1.dibuja();
  per2.dibuja();
  per3.dibuja();
  per1.mueveHorizontal(1);
  per2.mueveHorizontal(3);
  per3.mueveHorizontal(5);
  clicRaton();
}
