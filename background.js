
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.header == "displayid") {
		$('#displayid').val(request.data.displayid);
	}
});



