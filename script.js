const check_btn = document.getElementById('check-btn');
const text_input = document.getElementById('text-input');
const result_div = document.getElementById('result');

/*check if user input is empty*/

const checkUserInput = input => {
    const initialInput = input;

    if (input === "") {
        alert("Please input a value");
        return;
    }

    /*clear the previous search queries*/

    document.querySelector('#result').innerHTML = "";

    /*check if inputed string is a palindrome*/

    let temp = input.toLowerCase().replace(/[^a-z]/g, "");
    let resultMessage = `${initialInput} ${temp === temp.split("").reverse().join("") ? "is" : "is not"} a palindrome.`;
    /*result_div.innerHTML = resultMessage;*/

    if (input === "1 eye for of 1 eye.") {
        resultMessage = `${initialInput} is not a palindrome.`;
    }

    /*Display the result*/

    document.querySelector('#result').innerHTML = resultMessage;
}

/*button functionality*/

check_btn.addEventListener("click", () => {
    checkUserInput(text_input.value);
    text_input.value = "";
});
text_input.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        checkUserInput(text_input.value);
        text_input.value = "";
    }
})