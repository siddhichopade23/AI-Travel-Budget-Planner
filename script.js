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
    let spent = hotel + food + transport + shopping;
let percentage = (spent / budget) * 100;

    let itinerary = "";

if (destination.toLowerCase().includes("goa")) {

    let places = [
        "🏖️ Visit Baga Beach and Calangute Beach",
        "🏰 Explore Fort Aguada and Candolim Beach",
        "🌊 Visit Dudhsagar Falls and local markets",
        "⛪ Explore Basilica of Bom Jesus",
        "🌅 Enjoy a sunset cruise on the Mandovi River"
    ];

    for (let i = 0; i < days && i < places.length; i++) {
        itinerary += `<p><strong>Day ${i + 1}:</strong> ${places[i]}</p>`;
    }

}

else if (destination.toLowerCase().includes("mumbai")) {

    let places = [
        "🕌 Visit Gateway of India and Colaba Causeway",
        "🌊 Walk along Marine Drive and Chowpatty Beach",
        "🏝️ Explore Elephanta Caves",
        "🎬 Visit Bandra and Bandstand",
        "🛍️ Shop at Linking Road"
    ];

    for (let i = 0; i < days && i < places.length; i++) {
        itinerary += `<p><strong>Day ${i + 1}:</strong> ${places[i]}</p>`;
    }

}

else if (destination.toLowerCase().includes("manali")) {

    let places = [
        "🏔️ Visit Hadimba Temple",
        "❄️ Explore Solang Valley",
        "🚠 Visit Rohtang Pass",
        "🛍️ Shop at Mall Road",
        "🌲 Relax in Old Manali"
    ];

    for (let i = 0; i < days && i < places.length; i++) {
        itinerary += `<p><strong>Day ${i + 1}:</strong> ${places[i]}</p>`;
    }

}

else if (destination.toLowerCase().includes("pune")) {

    let places = [
        "🏰 Visit Shaniwar Wada",
        "🌄 Explore Sinhagad Fort",
        "🛕 Visit Dagdusheth Halwai Ganpati Temple",
        "🛍️ Shop on FC Road",
        "🌿 Relax at Pashan Lake"
    ];

    for (let i = 0; i < days && i < places.length; i++) {
        itinerary += `<p><strong>Day ${i + 1}:</strong> ${places[i]}</p>`;
    }

}
else if (destination.toLowerCase().includes("jaipur")) {

    let places = [
        "🏰 Visit Amber Fort",
        "🌸 Explore Hawa Mahal",
        "👑 Visit City Palace",
        "🌞 Explore Jantar Mantar",
        "🛍️ Shop at Bapu Bazaar"
    ];

    for (let i = 0; i < days && i < places.length; i++) {
        itinerary += `<p><strong>Day ${i + 1}:</strong> ${places[i]}</p>`;
    }

}
else if (destination.toLowerCase().includes("agra")) {

    let places = [
        "🕌 Visit the Taj Mahal",
        "🏰 Explore Agra Fort",
        "🌅 Visit Mehtab Bagh",
        "🛍️ Shop for marble handicrafts",
        "🍽️ Try Agra's famous petha"
    ];

    for (let i = 0; i < days && i < places.length; i++) {
        itinerary += `<p><strong>Day ${i + 1}:</strong> ${places[i]}</p>`;
    }

}
else if (destination.toLowerCase().includes("ooty")) {

    let places = [
        "🚂 Ride the Nilgiri Mountain Railway",
        "🌺 Visit the Botanical Garden",
        "🚣 Enjoy Ooty Lake",
        "🌄 Explore Doddabetta Peak",
        "🍫 Visit a local chocolate factory"
    ];

    for (let i = 0; i < days && i < places.length; i++) {
        itinerary += `<p><strong>Day ${i + 1}:</strong> ${places[i]}</p>`;
    }

}
else if (destination.toLowerCase().includes("shimla")) {

    let places = [
        "🚶 Walk on Mall Road",
        "🏛️ Visit Christ Church",
        "🚡 Enjoy the Jakhoo Ropeway",
        "🌲 Explore Kufri",
        "📸 Visit The Ridge"
    ];

    for (let i = 0; i < days && i < places.length; i++) {
        itinerary += `<p><strong>Day ${i + 1}:</strong> ${places[i]}</p>`;
    }

}
else {

    for (let i = 1; i <= days; i++) {
        itinerary += `<p><strong>Day ${i}:</strong> Explore famous attractions in ${destination}, enjoy local food and experience the local culture.</p>`;
    }

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

if(destination.toLowerCase().includes("goa")){
    image = "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800";
}
else if(destination.toLowerCase().includes("manali")){
    image = "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800";
}
else if(destination.toLowerCase().includes("mumbai")){
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
    document.getElementById("budgetBar").innerHTML = `
<div class="card">
<h3>📊 Budget Usage</h3>

<div class="bar">
<div class="fill" style="width:${percentage}%">
${Math.round(percentage)}%
</div>
</div>

<p>Total Planned Budget: ₹${spent}</p>

</div>
`;
    let convertedAmount = "";
let currencyName = "";

if(destination.toLowerCase().includes("usa")){
    convertedAmount = (budget / 86).toFixed(2);
    currencyName = "USD ($)";
}
else if(destination.toLowerCase().includes("uk")){
    convertedAmount = (budget / 117).toFixed(2);
    currencyName = "GBP (£)";
}
else if(destination.toLowerCase().includes("europe")){
    convertedAmount = (budget / 101).toFixed(2);
    currencyName = "EUR (€)";
}
else if(destination.toLowerCase().includes("japan")){
    convertedAmount = (budget * 1.7).toFixed(2);
    currencyName = "JPY (¥)";
}
else{
    convertedAmount = budget;
    currencyName = "INR (₹)";
}

document.getElementById("currency").innerHTML = `
<div class="currency-card">
<h3>💱 Currency Conversion</h3>

<p>
Budget in ${currencyName}: <strong>${convertedAmount}</strong>
</p>

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
    let weather = "";

if(destination.toLowerCase() === "goa"){
    weather = "☀️ Hot and humid. Carry sunscreen, sunglasses and light cotton clothes.";
}
else if(destination.toLowerCase() === "manali"){
    weather = "❄️ Cold weather. Carry warm jackets, gloves and woollen clothes.";
}
else if(destination.toLowerCase() === "mumbai"){
    weather = "🌧️ Rain is possible. Carry an umbrella and waterproof footwear.";
}
else{
    weather = "🌤️ Weather information is unavailable for this destination. Please check the local weather forecast and pack accordingly.";

}

document.getElementById("weather").innerHTML = `
<div class="weather-card">
<h3>🌤️ Weather Suggestion</h3>
<p>${weather}</p>
</div>
`;

let hotels = "";

if(style === "Budget"){
    hotels = `
    <ul>
        <li>Zostel</li>
        <li>Backpacker Hostel</li>
        <li>Budget Inn</li>
    </ul>
    `;
}
else if(style === "Standard"){
    hotels = `
    <ul>
        <li>Treebo Hotels</li>
        <li>FabHotel</li>
        <li>Ginger Hotel</li>
    </ul>
    `;
}
else{
    hotels = `
    <ul>
        <li>Taj Hotel</li>
        <li>The Oberoi</li>
        <li>ITC Hotels</li>
    </ul>
    `;
}

document.getElementById("hotels").innerHTML = `
<div class="hotel-card">
<h3>🏨 Suggested Hotels</h3>
${hotels}
</div>
`;
    let foodSuggestions = "";

if(destination.toLowerCase() === "goa"){
    foodSuggestions = `
    <ul>
        <li>🐟 Goan Fish Curry</li>
        <li>🍰 Bebinca</li>
        <li>🍤 Prawn Balchão</li>
    </ul>
    `;
}
else if(destination.toLowerCase() === "mumbai"){
    foodSuggestions = `
    <ul>
        <li>🥪 Vada Pav</li>
        <li>🥘 Pav Bhaji</li>
        <li>🍛 Misal Pav</li>
    </ul>
    `;
}
else if(destination.toLowerCase() === "manali"){
    foodSuggestions = `
    <ul>
        <li>🥟 Siddu</li>
        <li>🍜 Thukpa</li>
        <li>🥣 Madra</li>
    </ul>
    `;
}
else{
    foodSuggestions = `
    <p>Try the famous local cuisine of your destination.</p>
    `;
}

document.getElementById("food").innerHTML = `
<div class="food-card">
<h3>🍽️ Local Food to Try</h3>
${food}
</div>
`;
    document.getElementById("download").innerHTML = `
<button onclick="downloadPlan()">📄 Download Travel Plan</button>
`;
}
function downloadPlan(){

    let text =
`AI Travel Budget Planner

Destination: ${document.getElementById("destination").value}

Days: ${document.getElementById("days").value}

Budget: ₹${document.getElementById("budget").value}

Generated successfully!`;

    let blob = new Blob([text], {type:"text/plain"});

    let link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "TravelPlan.txt";

    link.click();

}
