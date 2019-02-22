  function weightConverter(number) {
    valNum = parseFloat(number);
    fToC = number/0.0022046;
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