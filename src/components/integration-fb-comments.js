import React, {useEffect} from 'react';

const IntegrationFbComments = () => {
	useEffect(() => {
		window.scrollTo(0, '0.5s');
		window.fbAsyncInit = function () {
			window.FB.init({
				appId: '115517331888071',
				cookie: true,
				xfbml: true,
				version: 'v2.1'
			});}.bind(this);
		(function (d, s, id) {
			let js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = '//connect.facebook.net/en_US/sdk.js';
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}, []);

	useEffect(() => {
		if (window.FB) window.FB.XFBML.parse();
	});

	return (
		<div>
			<div className="fb-comments" data-href="https://www.facebook.com/cna.net.au/" data-numposts="10"></div>
		</div>
	);
};

export default IntegrationFbComments;
