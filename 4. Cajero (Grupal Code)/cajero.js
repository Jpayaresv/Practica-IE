
var billetesImagenes = [];
billetesImagenes[100] = "billete100.png";
billetesImagenes[50] = "billete50.png";
billetesImagenes[20] = "billete20.png";
billetesImagenes[10] = "billete10.png";

class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    
    this.imagen = new Image();
    this.imagen.src = billetesImagenes[this.valor];
  }
}

var x = new Boolean(false);


function entregarDinero()
{  
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero - (bi.valor * papeles);
    }

  }

  if(dinero > 0)
  {
    resultado.innerHTML = "Has ingresado una cantidad no permitida.";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0 && x == false)
      { 
              resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />" + `<img src='${e.imagen.src}'  alt="" width="320" height="120"/> <br><hr>`;;
      }
    }
    x = true;
  }
}

/*

function ingresarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {

    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }

      entregado.push( new Billete(bi.valor, papeles) );
      dinero = dinero + (bi.valor * papeles);
    }

  }

  if(dinero > 0)
  {
    resultado.innerHTML = "Has ingresado una cantidad no permitida.";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0 )
      { 
              caja.push( new Billete(e.valor, e.cantidad));
              resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
      }
    }
  }
}
*/


var caja = [];
var entregado = [];
caja.push( new Billete(100, 5));
caja.push( new Billete(50, 10));
caja.push( new Billete(20, 5));
caja.push( new Billete(10, 10));
var dinero = 0;
var div = 0;
var papeles = 0;


var resultado = document.getElementById("resultado");

var b = document.getElementById("retirar");
b.addEventListener("click", ingresarFuncion);

var myArr = [000, 111, 222];

function ingresarFuncion() {
    if (myArr.includes(parseInt(clave.value))) {
      entregarDinero()
    } else {
      alert("clave incorrecta")
    }
  
  }
  
  var clave = document.getElementById("clave");