// JavaScript code to demonstrate loops, operators, and conditions
window.onload = function() {
    var num1 = 5;
    var num2 = 3;

    // If-else condition using a relational operator
    if (num1 > num2) {
        console.log("Num1 is greater");
    } else {
        console.log("Num2 is greater or equal");
    }

    // Demonstrating a while loop
    console.log("While loop iteration:");
    var i = 1;
    while (i <= 5) {
        console.log("While loop iteration " + i);
        i++;
    }

    // Demonstrating a for loop
    console.log("For loop iteration:");
    for (var j = 1; j <= 5; j++) {
        console.log("For loop iteration " + j);
    }

    // Demonstrating a do-while loop
    console.log("Do-While loop iteration:");
    var k = 1;
    do {
        console.log("Do-While loop iteration " + k);
        k++;
    } while (k <= 5);

    // Switch-case condition
    var day = "Monday";
    switch (day) {
        case "Monday":
            console.log("It's Monday");
            break;
        case "Tuesday":
            console.log("It's Tuesday");
            break;
        default:
            console.log("Unknown day");
    }
}
