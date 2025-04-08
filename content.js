const keywords = [
  // Debugging and errors
  "debug",
  "bug",
  "find the bug",
  "web3school",
  "w3school",
  "stackoverflow",
  "code",
  "github",
  "leetcode solution",
  "gfg solution",
  "geeksforgeeks solution",
  "codechef solution",
  "hackerRank solution",
  "hackerEarth solution",
  "fix my code",
  "error",

  // General AI terms
  "ai",
  "ai tool",

  // Popular AI chat-bots
  "chatgpt",
  "gpt",
  "openai",
  "bard",
  "claude.ai",
  "BLACKBOX.AI",
  "copilot",
  "gemini",
  "claude",
  "anthropic",
  "pi ai",
  "character ai",
  "replika",

  // Developer-focused AI tools
  "copilot",
  "github copilot",
  "codewhisperer",
  "tabnine",
  "codeium",
  "cursor",
  "blackbox",
  "swe agent",

  // AI content generation tools
  "notion ai",
  "jasper",
  "copy ai",
  "writesonic",
  "rytr",
  "anyword",
  "scalenut",


  // AI assistants and agents
  "agent gpt",
  "auto gpt",
  "baby agi",
  "smol dev",
  "devin ai",
  "magai",
  "ora ai",
];

const lowerContent =
  document.body.innerText.toLowerCase() +
  document.title.toLowerCase() +
  window.location.href.toLowerCase();

const shouldShowMeme = keywords.some((keyword) =>
  lowerContent.includes(keyword)
);

if (shouldShowMeme) {
  const memes = [
    chrome.runtime.getURL("memes/meme1.jpg"),
    chrome.runtime.getURL("memes/meme2.jpg"),
    chrome.runtime.getURL("memes/meme4.jpg"),
    chrome.runtime.getURL("memes/meme5.jpg"),
    chrome.runtime.getURL("memes/meme6.jpg"),
    chrome.runtime.getURL("memes/meme7.jpg"),
    chrome.runtime.getURL("memes/meme8.jpg"),
    chrome.runtime.getURL("memes/meme9.jpg"),
    chrome.runtime.getURL("memes/meme10.jpg"),
    chrome.runtime.getURL("memes/meme11.jpg"),
    chrome.runtime.getURL("memes/meme12.jpg"),
    chrome.runtime.getURL("memes/meme13.jpg"),
    chrome.runtime.getURL("memes/meme14.jpg"),
    chrome.runtime.getURL("memes/meme15.jpg"),
  ];

  const selectedMeme = memes[Math.floor(Math.random() * memes.length)];

  const memeDiv = document.createElement("div");
  memeDiv.style.position = "fixed";
  memeDiv.style.bottom = "1%";
  memeDiv.style.right = "1%";
  memeDiv.style.zIndex = "9999";
  memeDiv.style.maxWidth = "90vw";
  memeDiv.style.width = "min(250px, 90%)";
  memeDiv.style.borderRadius = "6px";
  memeDiv.style.boxShadow = "0 0 12px rgba(0, 0, 0, 0.5)";

  const memeImg = document.createElement("img");
  memeImg.src = selectedMeme;
  memeImg.style.width = "100%";
  memeImg.style.height = "auto";
  memeImg.style.borderRadius = "6px";
  memeImg.alt = "CodeCrackup meme";

  memeDiv.appendChild(memeImg);
  document.body.appendChild(memeDiv);

  const closeBtn = document.createElement("div");
  closeBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
        style="width: 20px; height: 20px;">
        <path stroke-linecap="round" stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12" />
    </svg>
  
  `;
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "5px";
  closeBtn.style.right = "5px";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.fontSize = "20px";
  closeBtn.style.fontWeight = "bold";
  closeBtn.style.color = "#fff";
  closeBtn.onclick = () => memeDiv.remove();
  memeDiv.appendChild(closeBtn);

  setTimeout(() => memeDiv.remove(), 10000);
}