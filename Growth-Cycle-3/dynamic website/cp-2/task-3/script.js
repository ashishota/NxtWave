let imageElement = document.getElementById("image");
let defaultImageWidth = 200;

// Set initial width with 'px'
imageElement.style.width = defaultImageWidth + "px";

function decrement() {
    let currentWidth = parseInt(imageElement.style.width); // get numeric width
    if (currentWidth <= 50) {
        document.getElementById("warningMessage").textContent = "Not visible. Increase the size of the image.";
    } else {
        imageElement.style.width = (currentWidth - 5) + "px";
        document.getElementById("warningMessage").textContent = "";
    }
}

function increment() {
    let currentWidth = parseInt(imageElement.style.width);
    if (currentWidth >= 300) {
        document.getElementById("warningMessage").textContent = "Too Large. Decrease the size of the image.";
    } else {
        imageElement.style.width = (currentWidth + 5) + "px";
        document.getElementById("warningMessage").textContent = "";
    }
}
