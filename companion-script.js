let map;

function initMap() {
    map = L.map('map').setView([39.8283, -98.5795], 3);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);
}

function findSources() {
    const location = document.getElementById("location-input").value;
    const sourceList = document.getElementById("source-list");
    sourceList.innerHTML = "";

    fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);
                map.setView([lat, lon], 10);
                L.marker([lat, lon]).addTo(map)
                    .bindPopup(`EcoGo Source near ${location}`)
                    .openPopup();
                const mockSources = [
                    { name: "EcoGo Spring", distance: "1 mile", notes: "Clear, sustainable water" }
                ];
                mockSources.forEach(source => {
                    const li = document.createElement("li");
                    li.textContent = `${source.name} - ${source.distance} away. Notes: ${source.notes}`;
                    sourceList.appendChild(li);
                });
            } else {
                alert("Location not found!");
            }
        })
        .catch(error => {
            console.error("Geocoding error:", error);
            alert("Something went wrong. Try again!");
        });
}

document.getElementById("source-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = this.name.value;
    const location = this.location.value;
    const notes = this.notes.value;
    console.log("New source submitted for EcoGo:", { name, location, notes });
    alert("Thanks for adding a source to EcoGo! It’ll be reviewed soon.");
    this.reset();
});

window.onload = () => {
    initMap();
};
