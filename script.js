const API_KEY = "AQ.Ab8RN6JAlysoJCyKO7YbreP3h6Fpd5tac5bwm24jfkUMJ_MHNw";

async function generatePlan() {

    const destination = document.getElementById("destination").value;
    const days = document.getElementById("days").value;
    const budget = document.getElementById("budget").value;
    const style = document.getElementById("style").value;

    const prompt = `
Create a travel plan for:

Destination: ${destination}
Days: ${days}
Budget: ₹${budget}
Travel Style: ${style}

Give the response in this format:

1. Day-wise itinerary

2. Estimated expenses

3. Packing checklist

4. Travel tips
`;

    const url =
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

    const body = {
        contents: [
            {
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ]
    };

    try {

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        const output =
data.candidates[0].content.parts[0].text;

        document.getElementById("result").style.display = "block";

        document.getElementById("itinerary").innerHTML =
        "<div class='card'><h3>AI Travel Plan</h3><p>" +
        output.replace(/\n/g,"<br>") +
        "</p></div>";

    }

    catch(error){

        alert("Something went wrong!");

        console.log(error);

    }

}
