console.log("background is running");chrome.runtime.onMessage.addListener((e,n,o)=>{e.action==="OCR_RESULT"&&console.log("Extracted Text:",e.text)});
