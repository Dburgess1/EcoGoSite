
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".hero button");
    const searchBar = document.getElementById("search-bar");

    searchButton.addEventListener("click", () => {
        const query = searchBar.value.trim();
        if (query) {
            alert(`You searched for: ${query}`);
        } else {
            alert("Please enter a search term.");
        }
    });

    const growButton = document.getElementById("grow-tree-btn");
    if (growButton) {
        growButton.addEventListener("click", growTreeAnimation);
    }
});

const facts = [
    "Recycling one aluminum can saves enough energy to run a TV for three hours!",
    "Turning off the tap while brushing your teeth can save 8 gallons of water per day.",
    "Plastic can take up to 1,000 years to decompose in landfills!",
    "Switching to energy-efficient light bulbs can reduce greenhouse gas emissions.",
    "Trees provide oxygen for us all — plant one today!"
];

let factIndex = 0;

function displayFacts() {
    const factContainer = document.createElement("div");
    factContainer.id = "fact-container";
    factContainer.style.textAlign = "center";
    factContainer.style.padding = "20px";
    factContainer.style.fontSize = "18px";
    factContainer.style.color = "#2e8b57";

    document.querySelector(".hero").appendChild(factContainer);

    setInterval(() => {
        factContainer.textContent = facts[factIndex];
        factIndex = (factIndex + 1) % facts.length;
    }, 4000);
}

document.addEventListener("DOMContentLoaded", displayFacts);

function growTreeAnimation() {
    const treeContainer = document.getElementById("tree-container");
    const treeStages = [
        "🌱",
        "🌿",
        "🌳"
    ];

    let stageIndex = 0;
    treeContainer.textContent = treeStages[stageIndex];

    const interval = setInterval(() => {
        stageIndex++;
        if (stageIndex >= treeStages.length) {
            clearInterval(interval);
        } else {
            treeContainer.textContent = treeStages[stageIndex];
        }
    }, 1000); 
}
