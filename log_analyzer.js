

function analyze(details) {
	// alert($('#displayid').val());
	chrome.tabs.sendMessage(details.tabId, "extractLog", function(response) {
		if (response.data != '') {
			chrome.runtime.sendMessage({header: "updateLog", data: response.data});
		}
	});
}


chrome.webNavigation.onCompleted.addListener(function(details) {
	analyze(details);
}, {url: [
		{
			hostEquals: 'hackerexperience.com',
			pathPrefix: '/log'
		},
		{
			hostEquals: 'hackerexperience.com',
			pathEquals: '/internet'	
		}
	]});
