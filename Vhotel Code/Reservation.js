function validation(){
  
  const username = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const roomType = document.getElementById("roomType").value;
  const payment = document.getElementById("payment").value;

  // Name validation
  if(username.length < 5){
    document.getElementById("nameerror").textContent = "Username must be at least 5 characters long";
  }


  // Age validation
  else if(age < 18){
    document.getElementById("ageerror").textContent = "Age must be at least 18 years old";
  }

  // Email validation
  else if(!email.endsWith("@gmail.com")){
    document.getElementById("emailerror").textContent = "Email must end with @gmail.com";
  }

  // Phone number validation
  else if(!phone.startsWith("+62")){
    document.getElementById("phoneerror").textContent = "Phone number must be started with +62";
  }

  // Check-in date validation
  else if(checkin === ""){
    document.getElementById("checkinerror").textContent = "You need to set Check-in date";
  }

  // Check-out date validation
  else if(checkout === ""){
    document.getElementById("checkouterror").textContent = "You need to set Check-out date";
  }

  // Room type validation
  else if (roomType === "") {
    document.getElementById("roomtypeerror").textContent = "You need to choose a room type";
  }

  // Payment method validation
  else if (payment === "") {
    document.getElementById("paymenterror").textContent = "You need to choose a payment";
  }

  else{
    window.location.href = "Home page.html";
  }
};
