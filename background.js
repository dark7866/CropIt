chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
   // Inspect whether the place where user clicked matches with our list of URL
   chrome.runtime.onMessage.addListener(
     function(request, sender, sendResponse) {
    chrome.tabs.captureVisibleTab(
        null,
        {},
        function(dataUrl)
        {
            sendResponse({imgSrc:dataUrl});

        }
    ); //remember that captureVisibleTab() is a statement
    return true;
});
        chrome.tabs.executeScript(tab.id, {
            "file": "content.js"
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });

});
