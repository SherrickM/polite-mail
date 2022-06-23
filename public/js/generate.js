const firstName = document.getElementById("first-name");

const recipientName = document.getElementById("recipient-name");
const emailAddress = document.getElementById("email-address");
const emailConcern = document.getElementById("email-concern");
const introEl = document.querySelectorAll(".intro");
const inputForm = document.getElementById("user-input-form");
const screenOne = document.getElementById("screen-one");
const screenTwo = document.getElementById("screen-two");
const screenThree = document.getElementById("screen-three");
const screenFour = document.getElementById("screen-four");
const screenFive = document.getElementById("screen-five");
const screenSix = document.getElementById("screen-six");
const generateBtn = document.getElementById("generate");
const emailBody = document.querySelectorAll(".email-body");
const future = document.querySelectorAll(".future");
const outro = document.querySelectorAll(".outro");
const mailSection = document.getElementById("mail-section");
const userChoice = [];
// const generateHTML =  ;

let emailObject;
// create function to capture form data. Save that info into an object thats global so that it can be used at a later time.

// function to start generate email
function start(event) {
  event.preventDefault();

  emailObject = {
    name: firstName.value,
    recipientName: recipientName.value,
    email: emailAddress.value,
    emailConcern: emailConcern.value,
  };
  screenOne.classList.add("hide");
  screenTwo.classList.remove("hide");
}

// function to generate email
function generateEmail() {
  console.log(emailObject);
  console.log(userChoice);
}

// event listen to run start function after clicking submit
inputForm.addEventListener("submit", start);

// for loop to run intro section and obtain value
introEl.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("click");
    userChoice.push(element.getAttribute("value"));

    screenThree.classList.remove("hide");
    screenTwo.classList.add("hide");
  });
});
// for loop to run body section and obtain value
emailBody.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("click");
    userChoice.push(element.getAttribute("value"));

    screenFour.classList.remove("hide");
    screenThree.classList.add("hide");

    // console.log(userChoice);
  });
});

// for loop to run future section and obtain value
future.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("click");
    userChoice.push(element.getAttribute("value"));

    screenFive.classList.remove("hide");
    screenFour.classList.add("hide");

    // console.log(userChoice);
  });
});

// for loop to run outro section and obtain value
outro.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("click");
    userChoice.push(element.getAttribute("value"));

    screenSix.classList.remove("hide");
    screenFive.classList.add("hide");

    // console.log(userChoice);
  });
});

// Add generate Function

// Add a fucntion to generate e-mail to hide container and display the template literal

generateBtn.addEventListener("click", generateEmail);

