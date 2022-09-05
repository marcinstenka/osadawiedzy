import React, { useState, useEffect } from 'react';

import Footer from '../components/Footer';

import heroScienceMobile from '../assets/img/heroScienceMobile.jpg';
import heroScienceDesktop from '../assets/img/heroScienceDesktop.jpg';
import HeroSuperScienceDesktop from '../assets/img/heroSuperScienceDesktop.jpg';
import ScrollRestoration from '../components/ScrollRestoration';

import { Link } from 'react-router-dom';

const Science = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	if (windowWidth <= 768) {
		var imageUrl = heroScienceMobile;
	} else if (windowWidth <= 1080) {
		imageUrl = heroScienceDesktop;
	} else {
		imageUrl = HeroSuperScienceDesktop;
	}
	const handleWindowResize = () => {
		setWindowWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
	});
	return (
		<>
			<ScrollRestoration />

			<Link to='/' className='back-to-main'>
				POWRÓT DO STRONY GŁÓWNEJ
			</Link>
			<div
				className='hero hero-science'
				style={{ background: `url(${imageUrl}) center 67%  no-repeat` }}
			></div>
			<div className='science-text' data-aos='fade-up'>
				<h1 className='hero-science--header'>fizyka po godzinach</h1>
				<h5 className='hero-science--p'>
					zajęcia pozalekcyjne dedykowane uczniom szkół
					<br /> podstawowych oraz ponadpodstawowych
				</h5>
			</div>

			<Link to='nauki-scisle-po-godzinach/fizyka'>fizyka</Link>
			<br />
			<Link to='nauki-scisle-po-godzinach/matematyka'>matematyka</Link>
			<br />
			<Link to='nauki-scisle-po-godzinach/programowanie'>programowanie</Link>

			<Footer />
		</>
	);
};
export default Science;
