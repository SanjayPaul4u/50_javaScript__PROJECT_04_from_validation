console.log("This is project 4: From Validation.");

let Name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
// console.log(name, email, phone);

let validName = false;
let validEmail = false;
let validPhone = false;

// $('#success').hide();//THIS IS FROM
// $('#error').hide();


//Name validation
Name.addEventListener("blur", () => {
    // console.log("The name element is blured");
    let regularEx = /^[a-zA-Z]([0-9a-zA-Z]){2,9}$/;
    let string = Name.value;
    console.log(regularEx);

    if (regularEx.test(string)) {
        // console.log("your name is valid");
        Name.classList.remove("is-invalid");
        validName = true;

    }
    else {
        // console.log("your name is not valid");
        Name.classList.add("is-invalid");
        validName = false;

    }



})

//email validation
email.addEventListener("blur", () => {
    console.log("The email element is blured");


    let regularEx = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let string = email.value;
    // console.log(string);

    console.log(regularEx);

    if (regularEx.test(string)) {
        // console.log("your email is valid");
        email.classList.remove("is-invalid");
        validEmail = true;
    }
    else {
        // console.log("your email is not valid");
        email.classList.add("is-invalid");
        validEmail = false;

    }

})

//phone validation
phone.addEventListener("blur", () => {
    console.log("The phone element is blured");
    let regularEx = /^([0-9]){10}$/;
    let string = phone.value;
    console.log(regularEx);

    if (regularEx.test(string)) {
        // console.log("your phone is valid");
        phone.classList.remove("is-invalid");
        validPhone = true;

    }
    else {
        // console.log("your phone is not valid");
        phone.classList.add("is-invalid");
        validPhone = false;

    }
})


//submit

let submit = document.getElementById("submit");
submit.addEventListener("click", (element) => {
    // console.log("clicked on submit button.");
    //SUBMIT YOUR FROM HERE

    if (validEmail && validName && validPhone) {
        console.log("Name, email, phone are valid, submitting the form");
        let success = document.getElementById("success");
        success.classList.add("show");
        error.classList.remove("show");


        // $('#error').hide();
        // $('#success').show();
    }
    else {
        console.log("Name, email, phone are not valid, hence not submitting the form, please correct the errors and try again.");
        let error = document.getElementById("error");
        error.classList.add("show");
        success.classList.remove("show");
        
        // $('#success').hide();
        // $('#error').show();
        
    }

    element.preventDefault();
})