const startBtn = document.getElementById("startChat");
const chatSection = document.querySelector(".chat-container");
const landingSection = document.querySelector(".landing");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

const botResponses = [
    "I'm here to listen. Tell me what's on your mind. 💙",
    "That sounds tough. It's okay to feel this way.",
    "Remember to take deep breaths. You're doing great.",
    "Would you like a self-care tip?",
    "It's important to take a break and focus on yourself."
];

startBtn.addEventListener("click", () => {
    landingSection.classList.add("hidden");
    chatSection.classList.remove("hidden");
});

sendBtn.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (message) {
        appendMessage(message, "user");
        userInput.value = "";
        setTimeout(() => {
            const botReply = botResponses[Math.floor(Math.random() * botResponses.length)];
            appendMessage(botReply, "bot");
        }, 1000);
    }
});

function appendMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message");
    msgDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
    msgDiv.textContent = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
