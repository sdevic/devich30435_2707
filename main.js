
//const select = document.querySelector("#select");
//select.addEventListener("change",() =>{
//    let producto = select.value
//    console.log(`el producto es  ${producto}`);
//})
const titulo = document.querySelector("#titulo");
let nombre;
let precio = parseInt;
let tipoDePago;
let tarjeta;
let ventaDiaria = [];

function nombreUsuario(){
    document.getElementById("select").style.display= "none";
    document.getElementById("tipoDePago").style.display= "none";
    document.getElementById("tarjetas").style.display= "none";
    titulo.textContent=`Ingrese su nombre`;
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit",(e)=>{
    
         
         e.preventDefault();
        nombre = usuarios.value;
        console.log(nombre);
        
        selectorUsuario();
        return nombre;


})

    

}

function selectorUsuario(){
    
    if(nombre == "admin"){
         ventaDiaria.forEach( elemento => {
         console.log(` Usuario: ${elemento.nombre} ${elemento.total} `);
         
     })
     console.log("puto");
     }else{
         
         prodcuto()
 
     }
 
 }
function prodcuto(){
    document.getElementById("btn").style.display= "none";
    document.getElementById("usuarios").style.display= "none";
    document.getElementById("tarjetas").style.display= "none";
    document.getElementById("select").style.display= "block";
    document.getElementById("tipoDePago").style.display= "none"
    titulo.textContent=`Bienvenido/a ${nombre}, por favor seleccione el producto:`;
    const select = document.querySelector("#select");
    select.addEventListener("change",() =>{
        productos = select.value
        if (productos == "Televisor"){
            precio = 50000;
            ingreseTipoDePago();
            return precio;
            return productos;
            
        }else if(productos == "Celular"){
            precio = 30000;
            ingreseTipoDePago();
            return precio;
            return productos;
        }else{
            alert("Elnumero ingresado es incorrecto");
            prodcuto();
        }
    

        return productos;
        return precio;
        
    })
    

}

function ingreseTipoDePago(){
    titulo.textContent=` ${nombre} estas a punto de comprar un ${productos} su valor es de $ ${precio}, por favor seleciona el tipo de pago:`;
    document.getElementById("btn").style.display= "none";
    document.getElementById("usuarios").style.display= "none";
    document.getElementById("select").style.display= "none";
    document.getElementById("tarjetas").style.display= "none";
    document.getElementById("tipoDePago").style.display= "block";
    const tipoPago = document.querySelector("#tipoDePago");
    tipoPago.addEventListener("change",() =>{   
    
        tipoDePago = tipoPago.value;
        if(tipoDePago == "Tarjeta"){
            ingreseTarjeta();
            return tipoDePago;
        
        }else if(tipoDePago == "Efectivo" ){
            ahorro();
            return tipoDePago;
        }else{
            alert("a ingresado un tipo de pago incorrecto");
        }
    })    
}


function ingreseTarjeta(){
    titulo.textContent=` ${nombre} selecciona tu tarjeta :`;
    document.getElementById("btn").style.display= "none";
    document.getElementById("usuarios").style.display= "none";
    document.getElementById("select").style.display= "none";
    document.getElementById("tipoDePago").style.display= "none";
    document.getElementById("tarjetas").style.display= "block";
    const tarjetaC = document.querySelector("#tarjetas");
    tarjetas.addEventListener("change",() =>{   
    
    tarjeta = tarjetaC.value;
    ahorro();
    return tarjeta;
})
}


function ahorro(){
    
    switch(tipoDePago){

        case "Tarjeta":
            if (tarjeta == "Visa"){
                descuento = 10;
                precioFinal();
                return descuento;
                
            }else if(tarjeta == "Mastercard"){
                descuento =  5;
                precioFinal();
                return descuento;
               }else{
                alert("la tarjeta ingresada es incorrecta");
                ingreseTarjeta();
               
            }
            break;

        case "Efectivo":
            descuento =  20;
            precioFinal();
            tarjeta = "-";
            precioFinal();
            return tarjeta;
            return descuento;
            
            
            break;
        default:
            alert("el tipo de pago es incorrecto") ;
            ingreseTipoDePago();
            break      
    }
    

   
}
function precioFinal(){
    document.getElementById("btn").style.display= "none";
    document.getElementById("usuarios").style.display= "none";
    document.getElementById("select").style.display= "none";
    document.getElementById("tipoDePago").style.display= "none";
    document.getElementById("tarjetas").style.display= "none";
    valorDescuento =(precio* descuento)/100;
    total= precio - valorDescuento;
    titulo.textContent=` ${nombre} compraste un ${productos}, su precio de lista es $${precio} y por su tipo de pago,  tienes un descuento del ${descuento}%, su precio final es $${total}`;
     ventas();
          
     return total;
     return descuento;

}

function DatosVenta(nombre,productos,precio,descuento,total){
    this.nombre = nombre;
    this.productos = productos;
    this.descuento = descuento;
    this.total = total;

}
function ventas(){
    let ventaRealizada = new DatosVenta(nombre,productos,precio,descuento,total);
    
   
    return ventaDiaria;
}

nombreUsuario();


