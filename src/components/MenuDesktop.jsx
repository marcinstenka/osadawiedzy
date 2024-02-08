import React from 'react';
import { Link } from 'react-router-dom';

const MenuDesktop = ({ isHero }) => {
	return (
		<div className='menu-desktop'>
			<ul className='menu-ul'>
				<li>
					<Link className='menu-link' to='/'>
						STRONA GŁÓWNA
					</Link>
				</li>
				<li>
					<Link className='menu-link' to='/historia'>
						HISTORIA
					</Link>
				</li>
				<li>
					<Link className='menu-link' to='/oferta'>
						OFERTA
					</Link>
				</li>
				<li>
					<Link className='menu-link' to='/zespol'>
						ZESPÓŁ
					</Link>
				</li>
				<li>
					<Link className='menu-link' to='/rekomendacje'>
						REKOMENDACJE
					</Link>
				</li>
				<li>
					<Link className='menu-link' to='/do-pobrania'>
						DO POBRANIA
					</Link>
				</li>
				<li>
					<Link className='menu-link' to='/kwestionariusz'>
						KWESTIONARIUSZ
					</Link>
				</li>
				<li>
					<Link className='menu-link' to='/faq'>
						FAQ
					</Link>
				</li>
				<li>
					<a className='menu-link' href='//osadawiedzyy.blogspot.com'>
						BLOG
					</a>
				</li>
			</ul>
		</div>
	);
};

export default MenuDesktop;
