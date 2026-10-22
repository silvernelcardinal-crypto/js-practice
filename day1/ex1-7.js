const grade = 88;
if (grade >= 90 && grade <= 100) {
    console.log("Outstanding");
}
if (grade >= 85 && grade <= 89) {
console.log(`Grade ${grade}: Very Satisfactory`);
}
if (grade >= 80 && grade <= 84) {
    console.log("Satisfactory");
}
if (grade >= 75 && grade <= 79) {
    console.log("Fair");
}
else if (grade < 75) {
    console.log("Did not meet expectations");
}
console.log(`Passed`);