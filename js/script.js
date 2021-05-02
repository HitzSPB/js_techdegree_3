// Selected Elements that are reused
const otherJobRoleField = document.querySelector("#other-job-role");
const colorElement = document.querySelector("#color");
const designElement = document.querySelector('#design');
const fieldsetElement = document.querySelector('#activities');
const activities = document.querySelector('#activities-box');
const totalCost = document.querySelector('#activities-cost');
const paymentElement = document.querySelector("#payment");
const creditcardElement = document.querySelector("#credit-card");
const paymentMethods = document.querySelector("#payment-methods");
const paypalElement = document.querySelector("#paypal");
const bitcoinElement = document.querySelector("#bitcoin");
// Credit card elements
const s = document.querySelector(".payment-method-box")

// On page load
otherJobRoleField.style.display = "none";
paypalElement.style.display = "none";
bitcoinElement.style.display = "none";
colorElement.disabled = true;
paymentElement.selectedIndex = 1; // Selecting so default is credit card
document.querySelector("#name").focus(); // Setting first textbox as focus

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

const titleElement = document.querySelector('#title');

titleElement.addEventListener('change', (event) => {
    console.log(event.target.value)
    var otherJobRoleField = document.querySelector("#other-job-role");
    if (event.target.value === "other") {
        console.log("other")
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
        console.log(totalprice);
    }
});

paymentElement.addEventListener('change', (event) => {
    console.log("triggered")
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

})