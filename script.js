// Get the card element
const card = document.getElementById("card");

// Function to flip the card
card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    createHearts(); // Create hearts when clicked
});

// Function to create floating hearts
function createHearts() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Random position near the card
    const xPos = Math.random() * 400 - 50; // Width of the card
    const yPos = Math.random() * 600 - 50; // Height of the card

    heart.style.left = `${card.offsetLeft + 200 + xPos}px`; // Centered on the card
    heart.style.top = `${card.offsetTop + 300 + yPos}px`; // Adjust for center

    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

