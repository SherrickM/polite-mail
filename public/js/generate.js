const firstName = document.getElementById("sender-name");

const recipient_name = document.getElementById("recipient-name");
const subject = document.getElementById("email-concern");
const introEl = document.querySelectorAll(".intro");
const inputForm = document.getElementById("user-input-form");
const screenOne = document.getElementById("screen-one");
const screenTwo = document.getElementById("screen-two");
const screenThree = document.getElementById("screen-three");
const screenFour = document.getElementById("screen-four");
const screenFive = document.getElementById("screen-five");
const screenSix = document.getElementById("screen-six");
const generateBtn = document.getElementById("generate");
const saveBtn = document.getElementById("saveEmail");
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
    recipient_name: recipient_name.value,
    subject: subject.value,
  };
  screenOne.classList.add("hide");
  screenTwo.classList.remove("hide");
}

// function to render the choices user selected in the email text box
function generateEmail(){
  messageText.textContent=userChoice;
  alltext.value=userChoice;
  
  $("#saveEmail").show();
}

// event for saving generated email as a "template" in DB
const saveEmailTemplate = async (event) => {
  event.preventDefault();

  const recipient_name = document.querySelector('#recipient-name').value.trim();
  const message = document.querySelector('#messageText').value;
  const subject = document.querySelector('#email-concern').value.trim();

  const response = await fetch(`/api/templates`, {
    method: 'POST',
    body: JSON.stringify({ recipient_name, message, subject }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.replace('/generate');
  } else {
    alert('Failed to create template');
  };
};

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

// Add a fucntion to generate e-mail to hide container and display the template literal

generateBtn.addEventListener("click", generateEmail);

// use save email button to save template to DB

  saveBtn.addEventListener('click', saveEmailTemplate);