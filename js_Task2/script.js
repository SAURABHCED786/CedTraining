document.getElementById("myForm").onsubmit = function() {
    myFunction();
};
function myFunction() {
    alert("The form was submitted");
}

function checkAll() {
    var inputs = document.querySelectorAll(".pl");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = true;
    }
}

function resetColor() {
    let fname = document.getElementsByName("firstname")[0];
    let lname = document.getElementsByName("lastname")[0];
    fname.style.border = "1px solid black";
    lname.style.border = "1px solid black";

    let mySelect = document.getElementById("mySelect");
    mySelect.style.border = "1px solid ";
    mySelect.style.color = "black";
    mySelect.style.background = "white";
}
function validateForm() {
    //Name Validation
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let x = document.forms["myForm"][("firstname", "lastname")].value;
    if (x == "" || x.indexOf(' ') >= 0 || x.match(format)) {
        alert("Name must be filled out");
        let fname = document.getElementsByName("firstname")[0];
        let lname = document.getElementsByName("lastname")[0];
        fname.style.border = "1px solid red";
        lname.style.border = "1px solid red";
        return false;
    }

    //Select Option Validation
    let selection = document.getElementById("mySelect");
    if (selection.value == "") {
        //If the "Please Select" option is selected display error.
        alert("Please select an option!");
        let mySelect = document.getElementById("mySelect");
        mySelect.style.border = "1px solid red";
        mySelect.style.color = "red";
        mySelect.style.background = "white";
        return false;
    }

    //Radio Validation
    let radios = document.getElementsByName("radioname");
    let formValid = false;

    let i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;
    }
    if (formValid == true) {
        getCheckboxValue();
        return true;
    } else {
        alert("Must check some option!");
        return formValid;
    }
}
//Check Validation
function getCheckboxValue() {
    var l1 = document.getElementById("check1");
    var l2 = document.getElementById("check2");
    var l3 = document.getElementById("check3");
    var l4 = document.getElementById("check4");
    var l5 = document.getElementById("check5");
    var l6 = document.getElementById("check6");

    if (
        l1.checked == true ||
        l2.checked == true ||
        l3.checked == true ||
        l4.checked == true ||
        l5.checked == true ||
        l6.checked == true
    ) {
        return (document.getElementById("result").innerHTML =
            "<span style='color:green'>You have selected your Faivorate languages</span>");
    } else {
        alert("You Have Not Select Anything in Your Checkbox");
        return (document.getElementById("result").innerHTML =
            "<span style='color:red'>You have not selected anything</span>");
        return false;
    }
}
