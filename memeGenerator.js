import { memes } from "./Asset/assets";


const randomMeme = memes[Math.floor(Math.random() * memes.length)];

const img = document.createElement("img");
img.src = randomMeme;
img.alt = "Funny AI Meme";
img.style.position = "fixed";
img.style.bottom = "20px";
img.style.right = "20px";
img.style.width = "300px";
img.style.borderRadius = "12px";
img.style.zIndex = 9999;
img.style.cursor = "pointer"
img.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.5)";
img.style.transition = "all 0.3s ease-in-out";

document.body.appendChild(img);

// Optional: remove meme after 10 seconds
setTimeout(() => {
  img.remove();
}, 10000);
