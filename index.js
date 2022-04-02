
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

  
  function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
  }


function genPassword() {

   const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const passwordLength = characterAmountNumber.value;
   const password = "";


for (const i = 0; i <= passwordLength; i++) {
  const randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
       document.querySelector("#password").value = password;
       
}

function genPassword1() {
   const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const passwordLength = characterAmountNumber.value;
   const password = "";
for (const i = 0; i <= passwordLength; i++) {
  const randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
       document.querySelector("#password1").value = password;
}
    

function genPassword2() {
   const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const passwordLength = characterAmountNumber.value;
   const password = "";
for (const i = 0; i <= passwordLength; i++) {
  const randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
       document.querySelector("#password2").value = password;
}
    
function genPassword3() {
   const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const passwordLength = characterAmountNumber.value;
   const password = "";
for (const i = 0; i <= passwordLength; i++) {
  const randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }
       document.querySelector("#password3").value = password;
}