document.getElementsByClassName("toppings").value = 100;
document.getElementById("delivery").value = 200;
document.getElementById("delivery2").value = 0;
document.getElementById("stuffed").value = 100;
document.getElementById("size-s").value = 200;
document.getElementById("size-m").value = 400;
document.getElementById("size-l").value = 600;


var add = function(pizzaSize, pizzaCrust, pizzaDelivery, pizzaToppings) {
  return pizzaSize + pizzaCrust + pizzaDelivery + parseInt(pizzaToppings);
};

function myLocation() {
  var location = prompt("Please enter your location");
}

function myOrder() {
  if ("input[name=deliver]:checked") {
    alert("Thank you for your order. It will be delivered to your location");
  }
}

