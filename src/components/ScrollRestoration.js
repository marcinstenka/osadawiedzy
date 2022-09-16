import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		if (!window.location.href.includes('#')) {
			window.scrollTo(0, 0);
		} else {
			window.scrollBy(0, 1);
		}
	}, [pathname]);

	return null;
}
