import { romanToInt, intToRoman } from './ai_roman_to_int.js';

document.addEventListener('DOMContentLoaded', () => {
  // (Senin DOM event ve conversionHistory kodun burada olacak)
  // Örneğin:
  const convertButton = document.getElementById('convertButton');
  const historyTable = document.getElementById('historyTable');
  const conversionHistory = [];

  convertButton.addEventListener('click', () => {
    const input = document.getElementById('input').value.trim();
    const resultElement = document.getElementById('result');
    resultElement.classList.remove('error');

    if (!input) {
      resultElement.textContent = 'Please enter a value.';
      resultElement.classList.add('error');
      return;
    }

    let resultText = '';
    if (/^\d+$/.test(input)) {
      const num = parseInt(input, 10);
      if (num < 1 || num > 3999) {
        resultText = 'Invalid integer. Must be between 1 and 3999';
        resultElement.classList.add('error');
      } else {
        const roman = intToRoman(num);
        resultText = `Roman numeral: ${roman}`;
        conversionHistory.push({ input: num, output: roman });
      }
    } else if (/^[IVXLCDM]+$/.test(input.toUpperCase())) {
      try {
        const intValue = romanToInt(input.toUpperCase());
        resultText = `Integer: ${intValue}`;
        conversionHistory.push({ input: input.toUpperCase(), output: intValue });
      } catch (e) {
        resultText = 'Invalid Roman numeral';
        resultElement.classList.add('error');
      }
    } else {
      resultText = 'Invalid input. Please enter a valid number or Roman numeral.';
      resultElement.classList.add('error');
    }

    resultElement.textContent = resultText;
    updateHistory();
  });

  function updateHistory() {
    historyTable.innerHTML = `
      <tr><th>Input</th><th>Output</th></tr>
    `;
    conversionHistory.forEach(entry => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${entry.input}</td><td>${entry.output}</td>`;
      historyTable.appendChild(row);
    });
  }
});
