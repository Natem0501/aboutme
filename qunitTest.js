// function tempConverter(number) {
//     valNum = parseFloat(number);
//     fToC = (number - 32) / 1.8;
//     return fToC;
//     //document.getElementById("celsius").innerHTML = (number-32) / 1.8;
//   }
// //Added QUnit Test
//   QUnit.test("tempConverter", function(assert) {
// 	assert.equal(tempConverter(32), 0, "32 degrees Fahrenheit == 0 degrees Celsius");
// 	assert.equal(tempConverter(23), -5, "23 degrees Fahrenheit == -5 degrees Celsius");
// 	assert.equal(tempConverter(50), 10, "50 degrees Fahrenheit == 10 degrees Celsius");
// 	assert.equal(tempConverter(5), -15, "5 degrees Fahrenheit == -15 degrees Celsius");
// 	assert.equal(tempConverter(500), 260, "500 degrees Fahrenheit == 260 degrees Celsius");
//  });



 $(document).ready(function(){
    $("#clicker").click(function(event){
      alert("You clicked me!");
    });
  });

  function weightConverter(number) {
    valNum = parseFloat(number);
    fToC = number/2.2046;
    return fToC;
  }

  //Added QUnit Test
  QUnit.test("weightConverter", function(assert) {
    assert.equal(weightConverter(5), 2267.985122017599, "5 Pounds == 2267.985122017599 Grams");
    assert.equal(weightConverter(12), 5443.164292842239, "12 Pounds == 5443.164292842239 Grams");
    assert.equal(weightConverter(18), 8164.746439263358, "18 Pounds == 8164.746439263358 Grams");
    assert.equal(weightConverter(50), 22679.851220175995, "50 Pounds == 22679.851220175995 Grams");
    assert.equal(weightConverter(200), 90719.40488070398, "200 Pounds == 90719.40488070398 Grams");
 });