// Configuration - Replace with your actual API key
const API_KEY = "your-api-key-here";
const MODEL = "deepseek/deepseek-r1-0528:free";

async function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    const chatBox = document.getElementById("chat-box");

    if (!userInput) {
        alert("Please enter a message");
        return;
    }

    // Add user message to chat
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    document.getElementById("userInput").value = "";
    
    // Show loading indicator
    const loadingId = Date.now();
    chatBox.innerHTML += `<p id="${loadingId}"><strong>AI:</strong> Thinking...</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": MODEL,
                "messages": [
                    {
                        "role": "system",
                        "content": `STRICT FORMATTING RULES:
1. Always respond in English
2. Start every response on a new line after "AI:"
3. Format all answers using arrow symbols (→)
4. Structure responses like this:
→ First point
→ Second point
→ Third point
5. Never put text on the same line as "AI:"
6. If only one point exists, still use arrow format`
                    },
                    { 
                        "role": "user", 
                        "content": userInput 
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        let aiResponse = data.choices[0].message.content;
        
        // Ensure proper formatting
        aiResponse = aiResponse
            .replace(/^→/, '') // Remove any accidental arrow at start
            .replace(/\n→ /g, '<br>→ ') // Convert newlines with arrows
            .replace(/\n/g, '<br>'); // Convert any remaining newlines
            
        // Format the response with line break after "AI:"
        const formattedResponse = `<strong>AI:</strong><br>→ ${aiResponse.replace(/^→ /, '').trim()}`;
        
        // Replace loading message with actual response
        document.getElementById(loadingId).innerHTML = formattedResponse;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById(loadingId).innerHTML = 
            `<strong style="color: red;">Error:</strong> ${error.message}`;
    } finally {
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});