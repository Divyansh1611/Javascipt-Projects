const input = document.getElementById("txtInput");

function reverseString(str){
    return str.split("").reverse().join("");
}

function check(){
    const value = input.value;
    const reverseVal = reverseString(value);

    // alert(reverseVal);
    if (value === reverseVal){
        alert("Palindrome.");
        input.value = "";
    }
    else{
        alert("Not a Palindroms.");
        input.value = "";
    }

    
}