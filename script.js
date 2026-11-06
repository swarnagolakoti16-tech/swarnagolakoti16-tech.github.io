
// CROP DATABASE
const crops = [
    {
        name: "Rice",
        season: "Kharif",
        soil: "Clay and alluvial soil",
        water: "High water requirement",
        duration: "120-150 days"
    },
    {
        name: "Wheat",
        season: "Rabi",
        soil: "Well-drained loamy soil",
        water: "Moderate water requirement",
        duration: "120-150 days"
    },
    {
        name: "Maize",
        season: "Kharif / Rabi",
        soil: "Well-drained loamy soil",
        water: "Moderate water requirement",
        duration: "90-120 days"
    },
    {
        name: "Cotton",
        season: "Kharif",
        soil: "Black soil",
        water: "Moderate water requirement",
        duration: "150-180 days"
    },
    {
        name: "Groundnut",
        season: "Kharif / Rabi",
        soil: "Sandy loam soil",
        water: "Moderate water requirement",
        duration: "100-130 days"
    },
    {
        name: "Sugarcane",
        season: "Year-round (region dependent)",
        soil: "Deep fertile soil",
        water: "High water requirement",
        duration: "10-18 months"
    }
];

// CROP SEARCH
const searchInput = document.getElementById("cropSearch");
const cropResults = document.getElementById("cropResults");

function displayCrops(list) {
    cropResults.innerHTML = "";

    if (list.length === 0) {
        cropResults.innerHTML =
            "<p>No crops found. Try another name.</p>";
        return;
    }

    list.forEach(crop => {
        cropResults.innerHTML += `
            <div class="card">
                <h3>${crop.name}</h3>
                <p><b>Season:</b> ${crop.season}</p>
                <p><b>Soil:</b> ${crop.soil}</p>
                <p><b>Water:</b> ${crop.water}</p>
                <p><b>Duration:</b> ${crop.duration}</p>
            </div>
        `;
    });
}

searchInput.addEventListener("input", function() {
    const value = this.value.toLowerCase();

    const filtered = crops.filter(crop =>
        crop.name.toLowerCase().includes(value)
    );

    displayCrops(filtered);
});

// SHOW ALL CROPS INITIALLY
displayCrops(crops);

// FERTILIZER CALCULATOR
function calculateFertilizer() {
    const area = Number(document.getElementById("area").value);
    const rate = Number(document.getElementById("rate").value);
    const result = document.getElementById("result");

    if (
        document.getElementById("area").value.trim() === "" ||
        document.getElementById("rate").value.trim() === "" ||
        !Number.isFinite(area) ||
        !Number.isFinite(rate) ||
        area <= 0 ||
        rate < 0
    ) {
        result.innerText =
            "Please enter a valid farm area and fertilizer rate.";
        return;
    }

    const total = area * rate;

    result.innerText =
        "Total fertilizer required: " + total.toFixed(2) + " kg";
}

// RANDOM FARMING TIPS
const tips = [
    "Test your soil before applying fertilizers.",
    "Use drip irrigation to reduce water wastage.",
    "Choose seeds suitable for your local climate.",
    "Rotate crops to maintain soil fertility.",
    "Remove weeds regularly to protect crops.",
    "Use organic compost to improve soil health.",
    "Monitor crops regularly for pests and diseases.",
    "Avoid overwatering your plants."
];

function randomTip() {
    const randomIndex =
        Math.floor(Math.random() * tips.length);

    document.getElementById("tipText").innerText =
        tips[randomIndex];
}

// INTERACTIVE IMAGE GALLERY
function showImage(image) {
    document.getElementById("imageModal").style.display =
        "flex";

    document.getElementById("modalImage").src =
        image.src;
}

function closeImage() {
    document.getElementById("imageModal").style.display =
        "none";
}
