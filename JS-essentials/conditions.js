//if-else conditions
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}
else {
    console.log("You are not an adult.");
}
// if-else if-else conditions
let marks = 85;
if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 80) {
    console.log("Grade B");
}
else if (marks >= 70) {
    console.log("Grade C");
}
else {
    console.log("Grade D");
}


function shouldIGetLicense(age) {
    if (age >= 18) {
        console.log("You can get a license.");
    }
    else {
        console.log("You cannot get a license.");
    }
}
shouldIGetLicense(20); // Output: You can get a license.

function shouldIGetLicenseBribe(age, bribe) {
    if (age >= 18 && bribe == 1000) {
        console.log("You are passed and can get a license.");
    }
    else if (age >= 18 && bribe < 1000) {
        console.log("You are passed but cannot get a license.");
    }else if (age < 18 && bribe == 1000) {
        console.log("You are not passed but can get a license.");
    }
    else {
        console.log("You are not passed and cannot get a license.");
    }
}
shouldIGetLicenseBribe(16,5000); // Output: ou are not passed but can get a license.