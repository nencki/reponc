const mainTitle = document.querySelector('h1');
const btn = document.querySelector('button');
const colorPicker = document.querySelector('#colorPicker');
const textInput = document.querySelector('#textInput');

function changeColor(color) {
    mainTitle.style.color = color;
}

function changeText(text) {
    mainTitle.textContent = text;
}

btn.addEventListener('click', function() {
    const selectedColor = colorPicker.value;  
    const enteredText = textInput.value;  
    
    if (selectedColor) {
        changeColor(selectedColor);
    }

    if (enteredText) {
        changeText(enteredText);
    }
});