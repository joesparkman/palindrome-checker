// Select the input element
const input = document.getElementById("input");

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Function to check the reversed string
function check() {
    const value = input.value.trim(); // Get the input value and trim whitespace
    const reverse = reverseString(value); // Reverse the input

    if (value === reverse) {
        alert("P A L I N D R O M E");
    } else {
        alert("Not today!");
    }
    input.value = ""
}
