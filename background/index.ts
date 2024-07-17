export {}
console.log("background run")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "executeScript") {
    const { script, tabId } = request
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: function (code) {
        eval(code)
      },
      args: [script]
    })
  }
})
