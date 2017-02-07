module.exports = (Franz, options) => {
	function getMessages() {
		let unread = '';

		if ($('.header-notifications').length) {
			if ($('.header-notifications').hasClass('new-notifications')) {
				unread = '&bull;';
			} else {
				unread = 0;
			}
		}

		Franz.setBadge(unread);
	}

	Franz.loop(getMessages);
}
