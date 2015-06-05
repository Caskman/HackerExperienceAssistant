
chrome.tabs.getCurrent(function(tab) {
	chrome.runtime.sendMessage({header: "displayid", data: {displayid: tab.id}});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.header == "updateLog") {
		$('textarea').val(request.data);
	}
});




