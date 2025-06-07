# AI Chatbot with OpenRouter

![Chatbot Screenshot](./screenshot.png)

A simple web-based AI chatbot interface that connects to the [OpenRouter API](https://openrouter.ai/), featuring clean English responses formatted with arrow points (→).

## Features

- **Clean Interface**: Minimalist chat interface with message history
- **Structured Responses**: AI always responds with arrow-pointed items (→)
- **Persistent Formatting**: Strict formatting rules enforced via system prompt
- **Easy Setup**: Single HTML file with embedded JavaScript and CSS
- **Enter Key Support**: Send messages by pressing Enter

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- [OpenRouter API](https://openrouter.ai/)

## Installation

1. Clone the repository or download the files:
   ```bash
   git clone https://github.com/aiocrafters/ai-chatbot.git
   ```
2. Open `index.html` in your web browser.

## Configuration

1. Edit `script.js` and replace:
   ```javascript
   const API_KEY = "your-api-key-here";
   ```
   with your actual OpenRouter API key.

2. (Optional) Change the default model in `script.js`:
   ```javascript
   const MODEL = "deepseek/deepseek-r1-0528:free";
   ```

## Usage

1. Open `index.html` in a web browser.
2. Type your message in the input field.
3. Press **Enter** or click "Send."
4. The AI will respond with formatted arrow-pointed items.

### Example Conversation
**You**: What are the benefits of exercise?  
**AI**:  
→ Improves cardiovascular health  
→ Boosts mood and reduces stress  
→ Helps maintain healthy weight  
→ Increases energy levels  

## Customization

### Changing Response Style
Edit the system message in `script.js` to modify the response format:
```javascript
{
    "role": "system",
    "content": `STRICT FORMATTING RULES:
1. Always respond in English
2. Start every response on a new line after "AI:"
3. Format all answers using arrow symbols (→)
...`
}
```

### Styling
Edit `style.css` to change colors, fonts, or layout:
```css
.chat-container {
    width: 100%;
    max-width: 600px;
    background-color: white;
    border-radius: 10px;
    ...
}
```

## Troubleshooting

- **Problem**: AI responses aren't formatted correctly  
  **Solution**: Ensure the system message in `script.js` hasn't been modified.

- **Problem**: Getting API errors  
  **Solution**: Verify your OpenRouter API key is valid and has sufficient credits.

## License

MIT License - see the [LICENSE](./LICENSE) file for details.