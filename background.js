chrome.runtime.onMessage.addListener((request, sender) => {
  if (request.showMeme && sender.tab?.id) {
    chrome.scripting.executeScript({
      target: { tabId: sender.tab.id },
      files: ["memeGenerator.js"],
    });
  }
});
