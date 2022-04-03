import React, { useState, useEffect } from 'react';
import HeroMobile from '../assets/img/heroMobile-test.jpg';
import HeroDesktop from '../assets/img/heroDesktop-test.jpg';
import HeroSuperDesktop from '../assets/img/heroSuperDesktop.jpg';
const Hero = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	if (windowWidth <= 768) {
		var imageUrl = HeroMobile;
	} else if (windowWidth <= 1920) {
		imageUrl = HeroDesktop;
	} else {
		// imageUrl = HeroSuperDesktop;
	}
	const handleWindowResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
	});
	return (
		<>
			<div
				className='hero'
				style={{ background: `url(${imageUrl}) 30% center  no-repeat` }}
			></div>
			<div className='hero-text'>
				<h1 className='hero-header'>
					Szukasz obozu naukowego?
					<br />
					Dobrze trafiłeś!
				</h1>
				<h5 className='hero-p'>
					Osada Wiedzy to wyjątkowy obóz naukowy.
					<br />
					To przestrzeń budowania relacji.
				</h5>
				<h5 className='hero-p'>
					Wyobraźnia, rozwój i wiedza stanowią podstawowe wartości,
					<br className='br' /> a wiara w możliwości człowieka wpisana jest w
					serca prowadzących.
				</h5>
				<a href='/oferta' className='check-offer'>
					sprawdź ofertę <div className='check-offer--arrow'></div>
				</a>
			</div>
		</>
	);
};

export default Hero;
