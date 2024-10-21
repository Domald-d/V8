/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from './lib/helpers.js';
import { palindrome } from './lib/palindrome.js';
import { longest } from './lib/longest.js';
import { shortest } from './lib/shortest.js';
import { reverse } from './lib/reverse.js';
import { vowels } from './lib/vowel.js';
import { consonants } from './lib/consonant.js'

const test = isString('hæ');
console.log('test er strengur?', test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);
const textareaElement = document.querySelector('textarea');
const formElement = document.querySelector('form');
const outputElement = document.querySelector('.output');
const inputElement = document.querySelector('.input');
const longestElement = document.querySelector('.longest');
const shortestElement = document.querySelector('.shortest');
const vowelsElement = document.querySelector('.vowels');
const consonantsElement = document.querySelector('.consonants');
const palindromeElement = document.querySelector('.palindrome');
const reversedElement = document.querySelector('.reversed');
let flag = false;
function TextUpdater(str){
    if (isString(str)) {
        inputElement.textContent = str;
        longestElement.textContent = longest(str);
        shortestElement.textContent = shortest(str);
        vowelsElement.textContent = vowels(str);
        consonantsElement.textContent = consonants(str);
        palindromeElement.textContent = palindrome(str) ? 'samhverfur' : 'ekki samhverfur';
        reversedElement.textContent = reverse(str);
        outputElement.classList.remove('hidden');
    }
}
function submitHandler(event){
    event.preventDefault();
    const str = textareaElement.value;
    flag = true;
    TextUpdater(str);
}
function resetHandler(){
    outputElement.classList.add('hidden');
    flag = false;
}
textareaElement.addEventListener('input', () => {
    if(flag){
        TextUpdater(textareaElement.value);
    }
});
formElement.addEventListener('submit',submitHandler);
formElement.addEventListener('reset',resetHandler);
