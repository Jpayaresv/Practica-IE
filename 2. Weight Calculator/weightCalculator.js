let earthWeight = 0;

do {
    
    earthWeight = prompt("Por favor digite su masa en la tierra en Kg");

} while (earthWeight == 0 || (earthWeight == null));


let gravity = [3.7,8.87,9.82,3.71,23.12,8.96,8.69,11]


function seleccionar(){
   
    if(document.getElementById('Mercurio').checked){
    let wMercurio = parseFloat(earthWeight * (gravity[0]/gravity[2])).toFixed(2);
    alert("Su peso en Mercurio es: "+ wMercurio + " Kg");
   }

   if(document.getElementById('Venus').checked){
    let wVenus = parseFloat(earthWeight * (gravity[1]/gravity[2])).toFixed(2);
    alert("Su peso en Venus es: "+ wVenus+ " Kg");
   }

   if(document.getElementById('Tierra').checked){
    let wTierra = parseFloat(earthWeight * (gravity[2]/gravity[2])).toFixed(2);
    alert("Su peso en La Tierra es: "+ wTierra+ " Kg");
   }

   if(document.getElementById('Marte').checked){
    let wMarte = parseFloat(earthWeight * (gravity[3]/gravity[2])).toFixed(2);
    alert("Su peso en Marte es: "+ wMarte+ " Kg");
   }

   if(document.getElementById('Jupiter').checked){
    let wJupiter = parseFloat(earthWeight * (gravity[4]/gravity[2])).toFixed(2);
    alert("Su peso en Jupiter es: "+ wJupiter+ " Kg");
   }

   if(document.getElementById('Saturno').checked){
    let wSaturno = parseFloat(earthWeight * (gravity[5]/gravity[2])).toFixed(2);
    alert("Su peso en Saturno es: "+ wSaturno+ " Kg");
   }

   if(document.getElementById('Urano').checked){
    let wUrano = parseFloat(earthWeight * (gravity[6]/gravity[2])).toFixed(2);
    alert("Su peso en Urano es: "+ wUrano+ " Kg");
   }

   if(document.getElementById('Neptuno').checked){
    let wNeptuno = parseFloat(earthWeight * (gravity[7]/gravity[2])).toFixed(2);
    alert("Su peso en Neptuno es: "+ wNeptuno+ " Kg");
   }
}

