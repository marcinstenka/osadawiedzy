import React from 'react';
import { Link } from 'react-router-dom';

const MenuMobile = () => {
	return (
		<div className='mobile-menu'>
			<span className='mobile-menu__cross'>
				<span className='mobile-menu__cross__line'></span>
			</span>

			<div className='mobile-menu__links'>
				<Link to='/'>STRONA GŁÓWNA</Link>
				<Link to='/historia'>HISTORIA</Link>
				<Link to='/oferta'>OFERTA</Link>
				<Link to='/zespol'>ZESPÓŁ</Link>
				<Link to='/rekomendacje'>REKOMENDACJE</Link>
				<Link to='/do-pobrania'>DO POBRANIA</Link>
				<Link to='/kwestionariusz'>KWESTIONARIUSZ</Link>
				<a href='//osadawiedzyy.blogspot.com/'>BLOG</a>
			</div>
		</div>
	);
};

export default MenuMobile;
