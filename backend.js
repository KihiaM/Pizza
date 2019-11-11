$(document).ready(function() {
  $("form#order").submit(function(event){
    event.preventDefault();
    let pizzaSize = parseInt($("input[name=size]:checked").val());
    let pizzaCrust = parseInt($("input[name=crusts]:checked").val());
    var checkLength = $('#order :input[type="checkbox"]:checked').length;
    var pizzaToppings = 0;
      var inputToppings = document.getElementsByClassName("toppings");
      for(var i=0; inputToppings[i]; i++){
        if(inputToppings[i].checked){
          pizzaToppings = parseInt(inputToppings[i].value * (checkLength));
        }
  }    
    let pizzaDelivery = parseInt($("input[name=deliver]:checked").val());
    let newTotal = add(pizzaSize, pizzaCrust, pizzaDelivery, pizzaToppings);
    $("#output").text(newTotal);
    console.log(pizzaToppings);
  });
  });

  