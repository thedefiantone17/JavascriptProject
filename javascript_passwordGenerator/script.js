// lowercase
const   lowercaseLetter = "abcdefghijklmnopqrstuvwxyz";
// uppercase
const   uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// numbers
const   numbers = "0123456789";
// symbols
const   symbols = `!@#$%^&*()_-=+{}[]\|;:'",./<>?`;

const lengthElm = document.getElementById("length");
const lowercaseElm = document.getElementById("lowercase");
const uppercaseElm = document.getElementById("uppercase");
const numberElm = document.getElementById("numbers");
const symbolElm = document.getElementById("symbols");
const btnGenerate = document.getElementById("btnGenerate");
const passwordElm = document.getElementById("password");

btnGenerate.addEventListener("click", function () {
   const length =lengthElm.value;
   let char = "";
   let password = "";
   if (lowercaseElm.checked) {
        char += lowercaseLetter;
   } 

   if (uppercaseElm.checked) {
        char += uppercaseLetter;
   }

   if (numberElm.checked) {
        char += numbers;
   }

   if (symbolElm.checked) {
        char += symbols;
   }

   for (let i = 0; i < length; i++) {
    password += char.charAt(Math.floor(Math.random() * char.length));
    
   }

   passwordElm.value = password;

});