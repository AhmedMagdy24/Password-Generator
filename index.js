
let characterAmountRange = document.getElementById('characterAmountRange')
let characterAmountNumber = document.getElementById('characterAmountNumber')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

  
  function syncCharacterAmount(e) {
    let value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
  }


function genPassword() {

   let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let passwordLength = characterAmountNumber.value;
   let password = "";


for (let i = 0; i <= passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
       document.querySelector("#password").value = password;
       
}

function genPassword1() {
   let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let passwordLength = characterAmountNumber.value;
   let password = "";
for (let i = 0; i <= passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
       document.querySelector("#password1").value = password;
}
    

function genPassword2() {
   let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let passwordLength = characterAmountNumber.value;
   let password = "";
for (let i = 0; i <= passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
       document.querySelector("#password2").value = password;
}
    
function genPassword3() {
   let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let passwordLength = characterAmountNumber.value;
   let password = "";
for (let i = 0; i <= passwordLength; i++) {
  let randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
       document.querySelector("#password3").value = password;
}