document.addEventListener('DOMContentLoaded', function () {
    const ageSelect = document.getElementById('age');
    const heightInput = document.querySelector('.height-input-field');
    const weightInput = document.querySelector('.weight-input-field');
    const calculateButton = document.querySelector('.calculate');
    const resultElement = document.querySelector('.result');
    const resultStatementElement = document.querySelector('.result-statement');
    calculateButton.addEventListener('click', calculateBMI);  
    function calculateBMI() {
      const age = parseInt(ageSelect.value);
      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);  
      if (isNaN(age) || isNaN(height) || isNaN(weight) || age === 1) {
        alert('Please enter valid values.');
        return;
      }  
      const bmi = (weight / (height * height)).toFixed(2);
      resultElement.textContent = `Your BMI: ${bmi}`;
      resultStatementElement.textContent = getResultStatement(bmi);
    }  
    function getResultStatement(bmi) {
      if (bmi < 18.5) {
        return 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
      } else {
        return 'Obese';
      }
    }
  });
  $('.carousel').carousel({
        interval: 100
  });
