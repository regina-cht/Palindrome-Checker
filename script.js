const userInput = document.querySelector('#text-input');
const checkButton = document.querySelector('#check-btn');
const result = document.querySelector('#result');

checkButton.onclick = buttonValidation;

const resultText = document.createElement('p');
resultText.className = 'result';

function textValidation(str) {
  let noSpaces = str.replaceAll(/[^a-zA-Z0-9]/g, '');
  let lowerCase = noSpaces.toLowerCase();
  return lowerCase;
}

function palindomeValidation(func, str) {
  let strToArray = Array.from(func(str));
  let reverse = strToArray.reverse('').join('');

  if (func(str) === reverse) {
    resultText.innerHTML = `<span class="b">${str}</span> is a palindrome`;
    result.appendChild(resultText);
  } else {
    resultText.innerHTML = `<span class="b">${str}</span> is not a palindrome`;
    result.appendChild(resultText);
  }
}

function buttonValidation() {
  if (userInput.value === '') {
    alert('Please input a value');
    result.appendChild(resultText);
  } else {
    textValidation(userInput.value);
    console.log(palindomeValidation(textValidation, userInput.value));
  }
}
