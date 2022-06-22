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

const userChoice = [];
const introEls = [
  "Apologies for my delayed response…",
  "Just checking in…",
  "Not sure this was meant for me…",
  "Per my last email,",
  "Friendly reminder, ",
];

let emailObject;
// create function to capture form data. Save that info into an object thats global so that it can be used at a later time.

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

function generateEmail(){
  console.log(emailObject);
  
  console.log(userChoice);
}

// const generateHTML = ;
inputForm.addEventListener("submit", start);

introEl.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("click");
    userChoice.push(element.getAttribute("value"));

    screenThree.classList.remove("hide");
    screenTwo.classList.add("hide");

  });
});
emailBody.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("click");
    userChoice.push(element.getAttribute("value"));

    screenFour.classList.remove("hide");
    screenThree.classList.add("hide");

    // console.log(userChoice);
  });
});
future.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("click");
    userChoice.push(element.getAttribute("value"));

    screenFive.classList.remove("hide");
    screenFour.classList.add("hide");

    // console.log(userChoice);
  });
});
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

generateBtn.addEventListener('click', generateEmail)

// A way to capture the data & change the value of that data
