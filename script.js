import { romanToInt, intToRoman } from 'CI_RomanInteger/ai_roman_to_int.js';

document.addEventListener('DOMContentLoaded', () => {
  const convertButton = document.getElementById('convertButton');
  const historyTable = document.getElementById('historyTable');
  const conversionHistory = [];

  if (convertButton) {
    convertButton.addEventListener('click', () => {
      const input = document.getElementById('input').value.trim();
      const resultElement = document.getElementById('result');
      resultElement.classList.remove('error'); // Remove error class initially
      console.log(`Input: ${input}`); // Log input value
      if (!input) {
        resultElement.textContent = 'Please enter a value.';
        resultElement.classList.add('error'); // Add error class
        return;
      }

      let resultText = '';
      if (/^\d+$/.test(input)) {
        const num = parseInt(input, 10);
        if (num < 1 || num > 3999) {
          resultText = 'Invalid integer. Must be between 1 and 3999';
          resultElement.classList.add('error'); // Add error class
        } else {
          const roman = intToRoman(num);
          console.log(`Converted to Roman: ${roman}`); // Log conversion result
          resultText = `Roman numeral: ${roman}`;
          conversionHistory.push({ input: num, output: roman });
        }
      } else if (/^[IVXLCDM]+$/.test(input.toUpperCase())) {
        try {
          const intValue = romanToInt(input.toUpperCase());
          console.log(`Converted to Integer: ${intValue}`); // Log conversion result
          resultText = `Integer: ${intValue}`;
          conversionHistory.push({ input: input.toUpperCase(), output: intValue });
        } catch (e) {
          resultText = 'Invalid Roman numeral';
          resultElement.classList.add('error'); // Add error class
        }
      } else {
        resultText = 'Invalid input. Please enter a valid number or Roman numeral.';
        resultElement.classList.add('error'); // Add error class
      }

      resultElement.textContent = resultText;
      updateHistory();
    });
  } else {
    console.error('Convert button not found');
  }

  function updateHistory() {
    historyTable.innerHTML = `
            <tr>
                <th>Input</th>
                <th>Output</th>
            </tr>
        `;
    conversionHistory.forEach(entry => {
      const row = document.createElement('tr');
      row.innerHTML = `
                <td>${entry.input}</td>
                <td>${entry.output}</td>
            `;
      historyTable.appendChild(row);
    });
  }
});