// Function to create a grid of specified size
function makingGrid(squareSize) {
    // Clear any existing content inside the container
    container.innerHTML = '';

    // Apply margin-top to the container
    container.style.marginTop = "20px";

    // Loop to create rows
    for (var i = 0; i < squareSize; i++) {
        // Create a new row container
        const smallContainer = document.createElement("div");

        // Loop to create columns
        for (var j = 0; j < squareSize; j++) {
            // Create individual square elements
            let littleSquare = document.createElement("div");

            // Styling for each square
            littleSquare.style.border = "solid black"; // Black border
            littleSquare.style.boxSizing = "border-box"; // Border-box sizing
            littleSquare.style.height = "50px"; // Fixed height
            littleSquare.style.width = "100%"; // Stretch horizontally

            // Event listener to change color on mouseover
            littleSquare.addEventListener("mouseover", changeColor);

            // Append each square to the row container
            smallContainer.appendChild(littleSquare);
        }

        // Styling for the row container
        smallContainer.style.display = "flex"; // Flex layout
        smallContainer.style.border = "1px solid red"; // Red border

        // Append the row container to the main container
        container.appendChild(smallContainer);
    }
}

// Function to change color on mouseover
function changeColor(e) {
    // Generate random RGB values
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);

    // Set background color to a random RGB color
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

// Creating main container div
const container = document.createElement("div");
container.classList.add("container");
document.querySelector("body").appendChild(container);

// Selecting container for buttons
const containerOfButton = document.querySelector("div");

// Creating button
const btn = document.querySelector("button");
btn.style.alignContent = "center";
btn.style.justifyContent = "center";
btn.style.height = "50px";
btn.style.width = "100px";
btn.textContent = "Choosing Grid Size";

// Adding click event to button
btn.addEventListener("click", () => {
    var squareSize = prompt("Enter Grid Size from 1 to 50");
    makingGrid(squareSize);
});

// Styling for container of buttons
containerOfButton.style.display = "flex";
containerOfButton.style.alignContent = "center";
containerOfButton.style.justifyContent = "center";
containerOfButton.style.background = "black";
containerOfButton.style.color = "black";

// Initial call to create a grid with size 16 on page load
makingGrid(16);
