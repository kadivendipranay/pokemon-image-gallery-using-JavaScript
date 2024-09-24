const myDiv = document.querySelector("div");

// Create a document fragment to improve performance by reducing reflows
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 1002; i++) {
    const myImage = document.createElement("img");

    // Set the src attribute for the Pokemon sprite
    myImage.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
    
    // Append each image to the document fragment
    fragment.appendChild(myImage);
}

// After the loop, append the entire fragment to the div at once
myDiv.appendChild(fragment);
