import { useState } from 'react';
import { useEffect } from 'react';

function Utils(props) {
	const isDevice = typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;

	const [positionScroll, setPositionScroll] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	function handleScroll() {
		setPositionScroll(window.pageYOffset);
	}

	return { isDevice, positionScroll };
}

export default Utils;
