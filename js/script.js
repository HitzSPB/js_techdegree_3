// On page load
document.getElementById("name").focus();
document.getElementById("other-job-role").style.display = "none";
document.getElementById("color").disabled = true;

// Functions

function JobRoleOther() {
    var title = document.getElementById("title").value;
    var otherJobRoleField = document.getElementById("other-job-role");
    if (title === "other") {
        otherJobRoleField.style.display = "block";
    } else {
        otherJobRoleField.style.display = "none";
    }
}

const titleElement = document.querySelector('#title');

titleElement.addEventListener('change', (event) => {
    console.log(event.target.value)
    var otherJobRoleField = document.getElementById("other-job-role");
    if (event.target.value === "other") {
        console.log("other")
        otherJobRoleField.style.display = "block";
    } else {
        otherJobRoleField.style.display = "none";
    }

})

const designElement = document.querySelector('#design');

designElement.addEventListener('change', (event) => {
    let colorElement = document.getElementById("color");
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
})