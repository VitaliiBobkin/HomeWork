 
 // Function to say the user hello
 function helloUser() {
   const userName = prompt("What is your name?");

   if(!isValidName(userName)) {
       alert("Please enter a valid name with at least 3 characters.");
       return;
   } else {
       alert(`Hello ${userName.toUpperCase()}, how are you?`);
   }
}

// check if the name is valid
function isValidName(name) {
  return typeof name === 'string' && name.trim().length >= 3;
}

helloUser() ;



