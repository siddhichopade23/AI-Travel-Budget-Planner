function generatePlan() {

    let destination = document.getElementById("destination").value;
    let days = document.getElementById("days").value;
    let budget = document.getElementById("budget").value;
    let style = document.getElementById("style").value;

    if (destination === "" || days === "" || budget === "") {
        alert("Please fill all the fields.");
        return;
    }

    let hotel = Math.round(budget * 0.4);
    let food = Math.round(budget * 0.3);
    let transport = Math.round(budget * 0.2);
    let shopping = Math.round(budget * 0.1);

    let itinerary = "";

    for (let i = 1; i <= days; i++) {
        itinerary += `<p><strong>Day ${i}:</strong> Explore famous attractions in ${destination}, enjoy local food, and experience the culture.</p>`;
    }

    let packing = `
    <ul>
        <li>Passport / ID Card</li>
        <li>Clothes</li>
        <li>Power Bank</li>
        <li>Phone Charger</li>
        <li>Medicines</li>
        <li>Water Bottle</li>
        <li>Umbrella</li>
        <li>Comfortable Shoes</li>
    </ul>
    `;

    let tips = "";

    if (style === "Budget") {
        tips = "Choose public transport, book hostels, and eat at local restaurants to save money.";
    }
    else if (style === "Standard") {
        tips = "Book mid-range hotels, use ride-sharing apps, and explore popular attractions.";
    }
    else {
        tips = "Enjoy premium hotels, private transport, and luxury dining experiences.";
    }

    document.getElementById("result").style.display = "block";
    let image = "";

if(destination.toLowerCase() === "goa"){
    image = "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800";
}
else if(destination.toLowerCase() === "manali"){
    image = "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800";
}
else if(destination.toLowerCase() === "mumbai"){
    image = "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=800";
}
else{
    image = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800";
}

document.getElementById("destinationImage").innerHTML =
`<img src="${image}" alt="${destination}">`;

    document.getElementById("itinerary").innerHTML = `
        <div class="card">
            <h3>🗓 Travel Itinerary</h3>
            ${itinerary}
        </div>
    `;

    document.getElementById("expenses").innerHTML = `
        <div class="card">
            <h3>💰 Estimated Budget</h3>
            <p>🏨 Hotel: ₹${hotel}</p>
            <p>🍽 Food: ₹${food}</p>
            <p>🚌 Transport: ₹${transport}</p>
            <p>🛍 Shopping & Others: ₹${shopping}</p>
        </div>
    `;

    document.getElementById("packing").innerHTML = `
        <div class="card">
            <h3>🎒 Packing Checklist</h3>
            ${packing}
            <h3>💡 Travel Tips</h3>
            <p>${tips}</p>
        </div>
    `;
    let mapLink = "https://www.google.com/maps/search/" + encodeURIComponent(destination);

document.getElementById("mapButton").innerHTML = `
<a href="${mapLink}" target="_blank">
📍 View ${destination} on Google Maps
</a>
`;
}
