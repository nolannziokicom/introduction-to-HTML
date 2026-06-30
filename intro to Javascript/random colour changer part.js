// 1. Find the button in the HTML document using its ID
const button = document.getElementById('colorbtn');

// 2. Define a function that generates a completely random color
function getRandomColor() {
    // Generate random values for Red, Green, and Blue (0 to 255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Return the color format as an RGB string
    return `rgb(${r}, ${g}, ${b})`;
}

// 3. Add an event listener to the button to run the code when clicked
button.addEventListener('click', function () {
    // Generate a random color
    const newColor = getRandomColor();

    // Apply the new color to the background of the body element
    document.body.style.backgroundColor = newColor;
});

 