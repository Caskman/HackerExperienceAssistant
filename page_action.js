
chrome.webNavigation.onCompleted.addListener(function(details) {
	alert('sup');
	chrome.pageAction.show(details.tabid);
}, {url: [
		{
			hostEquals: 'hackerexperience.com',
		}
	]});
