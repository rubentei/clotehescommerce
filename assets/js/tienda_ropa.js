var cart= [];
const iva = 1.21;
var total_to_pay = 0;

function get_price (position){
 
    let obtain_price = $('.real_price').get(position);
    let obtain_name = $('.clothes_name').get(position);
    let price = parseFloat(obtain_price.innerHTML);
    let name = obtain_name.innerHTML;
    
    console.log(price);
    console.log(name);

    let obtained =[];
    obtained.push(price,name);
    
    if(cart == " "){
        cart.push(obtained);
        cart.shift();

    }else {
        cart.push(obtained);
        console.table(cart);
    }   
}

var output_string = "";
var destiny = $("#cart");   //$( "#myDiv" )
var cart_clear = false;


function subtotal () {
    if(total_to_pay > 0){
        clear();
    }else{
    for(let i = 0; i < cart.length; i++){
       let content_name = cart[i][1];
       let content_price = cart[i][0];
       
        output_string += `${content_name} ${content_price} €<br>`;
          
        total_to_pay += content_price;  
    }
    total_to_pay = parseFloat((total_to_pay * iva).toFixed(2));
    destiny.html(`${output_string}<br><br>
    Total a pagar con IVA: ${total_to_pay} €`);
}
}

function clear(){
    total_to_pay = 0;
    output_string = "";
    cart = [" "];

    destiny.html(`El carrito se vació correctamente`);
}

$("img").click(function(){
    let id = $(this).attr('id');
    console.log(id);
    let description = $('#'+ id);
   
    let children = description.siblings("p.clothes_desc").toggle();
    
    
});

// $( "li.third-item" ).siblings().css

// $( "div" ).children( ".selected" )


// $("button").click(function(){
//     $("p").toggle();
//   });