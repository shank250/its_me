// JavaScript code here
document.addEventListener("DOMContentLoaded", function() {
    // Your code that interacts with the DOM or performs other tasks
    console.log("JavaScript file linked successfully!");
});


document.getElementById("email-button").addEventListener("click", function() {
    // console.log("clicked file linked successfully!");
    window.location.href = "mailto:shashank21005@egmail.com";
});

document.addEventListener('DOMContentLoaded', function() {
    const copyableTextElements = document.querySelectorAll('.copyable-text');
    
    copyableTextElements.forEach(element => {
        element.addEventListener('click', () => {
            const text = element.innerText.trim();
            const tempInput = document.createElement('input');
            document.body.appendChild(tempInput);
            tempInput.value = text;
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            alert('Text copied to clipboard: ' + text);
        });
    });
});