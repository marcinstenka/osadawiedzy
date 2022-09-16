import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import MainContent from '../components/MainContent';

import Footer from '../components/Footer';

const Offer = () => {
	return (
		<>
			<Link to='/'>
				<img className='main-logo' src={Logo} alt='Logo' />
			</Link>
			<MainContent />

			<Footer />
		</>
	);
};

export default Offer;
