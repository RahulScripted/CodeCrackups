const keywords = [
  // AI tools
  "chatgpt",
  "gpt-4",
  "gpt4",
  "openai",
  "bard",
  "gemini-ai",
  "github",
  "claude.ai",
  "DeepSeek",
  "BLACKBOX.AI",
  "Meta AI",
  "anthropic",
  "copilot",
  "github copilot",
  "replit ghostwriter",
  "autocode",
  "codewhisperer",

  // General AI
  "ai tools",
  "ai tool",
  "ai assistant",
  "bug",
  "debug",


  // Online help / platforms
  "stackoverflow",
  "web3schools",
  "w3schools",
];

const bodyText = document.body.innerText.toLowerCase();

const found = keywords.some((keyword) => bodyText.includes(keyword));

if (found) {
  chrome.runtime.sendMessage({ showMeme: true });
}
