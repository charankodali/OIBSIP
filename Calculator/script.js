function appendToResult(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculateResult() {
    const result = document.getElementById('result').value;
    const calculation = eval(result);
    document.getElementById('result').value = calculation;
  }
  