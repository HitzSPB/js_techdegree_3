// Selected Elements that are reused
const nameElement = document.querySelector("#name");
const otherJobRoleField = document.querySelector("#other-job-role");
const colorElement = document.querySelector("#color");
const designElement = document.querySelector('#design');
const fieldsetElement = document.querySelector('#activities');
const activitiesCheckboxes = fieldsetElement.getElementsByTagName('input')
const activities = document.querySelector('#activities-box');
const totalCost = document.querySelector('#activities-cost');
const paymentElement = document.querySelector("#payment");
const creditcardElement = document.querySelector("#credit-card");
const paymentMethods = document.querySelector("#payment-methods");
const paypalElement = document.querySelector("#paypal");
const bitcoinElement = document.querySelector("#bitcoin");
const formElement = document.querySelector('form');
const emailElement = document.querySelector('#email');
const creditcardNumberElement = document.querySelector('#cc-num');
const zipNumberElement = document.querySelector('#zip');
const cvvNumberElement = document.querySelector('#cvv');
const titleElement = document.querySelector('#title');

// RegEx validators
const nameValidator = /\D{2,}$/

// Found regex for email validation :: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const cardnumberValidator = /^[0-9]{13,16}$/
const zipnumberValidator = /^[0-9]{5}$/
const cvvnumberValidator = /^[0-9]{3}$/

// Functions
function JobRoleOther() {
    var title = document.getElementById("title").value;
    var otherJobRoleField = document.querySelector("#other-job-role");
    if (title === "other") {
        otherJobRoleField.style.display = "block";
    } else {
        otherJobRoleField.style.display = "none";
    }
}

function AddValidationError(element, customErrorInformation = null) {
    element.parentElement.classList.add('not-valid');
    element.parentElement.classList.remove('valid');
    element.parentElement.lastElementChild.style.display = 'block';

    if (customErrorInformation !== null) {
        element.parentElement.querySelector(".hint").innerText = customErrorInformation;
    }
}

function RemoveValidationError(element) {
    if (element.parentElement.classList.contains("not-valid")) {
        element.parentElement.classList.remove('not-valid');
        element.parentElement.classList.add('valid');
        element.parentElement.lastElementChild.style.display = 'none';
    }
    else {
        element.parentElement.classList.add('valid');
    }
}

function Validate(element, validator) {
    if (!validator.test(element.value)) {
        AddValidationError(element);
        return 1;
    }
    else {
        RemoveValidationError(element);
        return 0;
    }
}

// https://stackoverflow.com/questions/19655975/check-if-an-array-contains-duplicate-values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
function checkIfArrayIsUnique(myArray) {
    return myArray.length === new Set(myArray).size;
}

const CheckboxFocusOnTab = (checkboxFieldset) => {
    for (let i = 0; i < checkboxFieldset.length; i++) {
        checkboxFieldset[i].addEventListener('focus', (event) => {
            event.target.parentNode.classList.add('focus');
        });
        checkboxFieldset[i].addEventListener('blur', (event) => {
            event.target.parentNode.classList.remove('focus');
        });
    }
}
const SetupPageElementsOnPageLoad = () => {
    otherJobRoleField.style.display = "none";
    paypalElement.style.display = "none";
    bitcoinElement.style.display = "none";
    colorElement.disabled = true;
    paymentElement.selectedIndex = 1; // Selecting so default is credit card
    nameElement.focus(); // Setting first textbox as focus
}

// Live Validation
const SetupLiveValidation = () => {
    nameElement.addEventListener("blur", () => {
        Validate(nameElement, nameValidator);
    });
    nameElement.addEventListener("input", () => {
        Validate(nameElement, nameValidator);
    });
    emailElement.addEventListener("blur", () => {
        Validate(emailElement, emailValidator);
    });
    emailElement.addEventListener("input", () => {
        Validate(emailElement, emailValidator);
    });
    creditcardNumberElement.addEventListener("blur", () => {
        Validate(creditcardNumberElement, cardnumberValidator);
    });
    creditcardNumberElement.addEventListener("input", () => {
        Validate(creditcardNumberElement, cardnumberValidator);
    });
    zipNumberElement.addEventListener("blur", () => {

        Validate(zipNumberElement, zipnumberValidator);
    });
    zipNumberElement.addEventListener("input", () => {

        Validate(zipNumberElement, zipnumberValidator);
    });
    cvvNumberElement.addEventListener("blur", () => {
        Validate(cvvNumberElement, cvvnumberValidator);
    });
    cvvNumberElement.addEventListener("input", () => {
        Validate(cvvNumberElement, cvvnumberValidator);
    });
}


// Listeners

titleElement.addEventListener('change', (event) => {
    var otherJobRoleField = document.querySelector("#other-job-role");
    if (event.target.value === "other") {
        otherJobRoleField.style.display = "block";
    } else {
        otherJobRoleField.style.display = "none";
    }

});


designElement.addEventListener('change', (event) => {
    colorElement.disabled = false;
    // Remove options
    var i, L = colorElement.options.length - 1;
    for (i = L; i >= 0; i--) {
        colorElement.remove(i);
    }
    let option;
    if (event.target.value === "js puns") {
        option = document.createElement("option");
        option.text = "Cornflower Blue";
        colorElement.add(option);
        option = document.createElement("option");
        option.text = "Dark Slate Grey";
        colorElement.add(option);
        option = document.createElement("option");
        option.text = "Gold";
        colorElement.add(option);
    }
    else if (event.target.value === "heart js") {
        option = document.createElement("option");
        option.text = "Tomato";
        colorElement.add(option);
        option = document.createElement("option");
        option.text = "Steel Blue";
        colorElement.add(option);
        option = document.createElement("option");
        option.text = "Dim Grey";
        colorElement.add(option);
    }
    colorElement.selectedIndex = 0;
});


fieldsetElement.addEventListener('change', (event) => {
    if (event.target.type === "checkbox") {
        var totalprice = 0;
        for (var count = 0; count <= activities.childElementCount - 1; count++) {
            if (activities.children[count].children[0].checked) {
                totalprice += parseInt(activities.children[count].children[0].getAttribute("data-cost"));
            }
        }
        totalCost.innerText = `Total: $${totalprice}`
    }
});

paymentElement.addEventListener('change', (event) => {
    creditcardElement.style.display = "none";
    paypalElement.style.display = "none";
    bitcoinElement.style.display = "none";
    if (event.target.value === "credit-card") {
        creditcardElement.style.display = "block";
    }
    else if (event.target.value === "paypal") {
        paypalElement.style.display = "block";
    }
    else if (event.target.value === "bitcoin") {
        bitcoinElement.style.display = "block";
    }

});

// Handles the press of the submit button. Checks all rules and only submit if no errors found in the data inserted on the page
formElement.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent reload page
    var errorsFoundCount = 0;
    // Check name
    errorsFoundCount += Validate(nameElement, nameValidator);

    // Check email
    errorsFoundCount += Validate(emailElement, emailValidator);

    // Check activities selected
    var anyChecked = false;
    var timeOfCheckedElements = [];
    for (var count = 0; count <= activities.childElementCount - 1; count++) {
        if (activities.children[count].children[0].checked) {
            anyChecked = true;
            // Should store actual time, instead of just the string.
            timeOfCheckedElements.push(activities.children[count].children[0].getAttribute("data-day-and-time"))
        }
    }
    if (!anyChecked) {
        AddValidationError(activities, "Choose at least one activity");
        errorsFoundCount++;
    }
    else if (!checkIfArrayIsUnique(timeOfCheckedElements)) {
        AddValidationError(activities, "You have selected activities that overlap");
        errorsFoundCount++;
    }
    else {
        RemoveValidationError(activities);
    }

    // Credit card validation
    if (paymentElement.value === "credit-card") {
        errorsFoundCount += Validate(creditcardNumberElement, cardnumberValidator);
        errorsFoundCount += Validate(zipNumberElement, zipnumberValidator);
        errorsFoundCount += Validate(cvvNumberElement, cvvnumberValidator);
    }
    if (errorsFoundCount === 0)
        formElement.submit();
});

// Run setup functions
CheckboxFocusOnTab(activitiesCheckboxes);
SetupPageElementsOnPageLoad()
SetupLiveValidation();