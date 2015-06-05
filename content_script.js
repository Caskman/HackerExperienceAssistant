
function extractLog() {
	return $('.logarea').val();
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "extractLog") {
		sendResponse({header: extractLog, data: extractLog()});
	}
});


