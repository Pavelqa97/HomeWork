let minAge = 18;
let maxAge = 60;

function checkAge(age) {

    if (age<minAge) {
        console.log("You don't have access cause your age is" + age + "It's less then");
} 
else if (age>=minAge && age<maxAge){
    console.log("Welcome!");
}
else if (age>maxAge) {
    console.log("Keep calm and look Culture channel");
}
else {
    console.log("Technical work");}
}

checkAge(10);
checkAge(17);
checkAge(18);
checkAge(19);
checkAge(59);
checkAge(60);
checkAge(61);