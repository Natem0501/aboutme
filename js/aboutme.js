function weightConverter(number) {
    valNum = parseFloat(number);
    document.getElementById("outputKilograms").innerHTML=number/2.2046;
    document.getElementById("outputGrams").innerHTML=number/0.0022046;
    document.getElementById("outputStones").innerHTML=number*0.071429;
    document.getElementById("outputOunces").innerHTML=number*16;
  }

  $(document).ready(function(){
    $("#clicker").click(function(event){
      alert("You clicked me!");
    });
  });