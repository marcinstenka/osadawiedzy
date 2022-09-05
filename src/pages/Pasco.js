import React, { useState, useEffect } from 'react';

import Footer from '../components/Footer';
import PascoContent from '../components/PascoContent';

import HeroPascoMobile from '../assets/img/heroPascoMobile.jpg';
import HeroPascoDesktop from '../assets/img/heroPascoDesktop.jpg';
import HeroPascoSuperDesktop from '../assets/img/heroPascoSuperDesktop.jpg';
import ScrollRestoration from '../components/ScrollRestoration';

import { Link } from 'react-router-dom';

const Pasco = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	if (windowWidth <= 768) {
		var imageUrl = HeroPascoMobile;
	} else if (windowWidth <= 1080) {
		imageUrl = HeroPascoDesktop;
	} else {
		imageUrl = HeroPascoSuperDesktop;
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
			<Link to='/' className='back-to-main back-to-main--white'>
				POWRÓT DO STRONY GŁÓWNEJ
			</Link>
			<div
				className='hero hero-pasco'
				style={{
					background: `url(${imageUrl}) right 65% no-repeat`,
				}}
			></div>
			<div className='science-text' data-aos='fade-up'>
				<h1 className='hero-science--header'>pasco</h1>
				<h5 className='hero-science--p'>
					urządzenia cyfrowe do pomiarów i analiz podczas
					<br />
					doświadczeń na lekcjach przedmiotów przyrodniczychmi
				</h5>
			</div>

			<PascoContent />
			<Footer />
		</>
	);
};
export default Pasco;
