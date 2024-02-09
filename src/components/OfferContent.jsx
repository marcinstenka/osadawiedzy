import React, { useEffect } from 'react';

import OfferExpandedOne from './OfferExpandedOne';
import OfferTables from './OfferTables';
import OfferDay from './OfferDay';
import OfferExpandedTwo from './OfferExpandedTwo';
import OfferPlace from './OfferPlace';

const OfferContent = () => {
	// Logic for <OfferExpandedOne /> and OfferExpandedTwo />
	useEffect(() => {
		let coll = document.querySelectorAll('.expanded__title');
		let cross = document.querySelectorAll('.expanded__cross');
		const handleExpand = (i) => {
			coll[i].parentElement.classList.toggle('active');
			let content = coll[i].parentElement.children[1];
			content.style.maxHeight
				? (content.style.maxHeight = null)
				: (content.style.maxHeight = content.scrollHeight + 'px');
		};
		for (let i = 0; i < coll.length; i++) {
			coll[i].addEventListener('click', () => handleExpand(i));
			cross[i].addEventListener('click', () => handleExpand(i));
		}
		return () => {
			for (let i = 0; i < coll.length; i++) {
				coll[i].removeEventListener('click', () => handleExpand(i));
				cross[i].removeEventListener('click', () => handleExpand(i));
			}
		};
	}, []);

	return (
		<section className='offer'>
			<OfferExpandedOne />
			<OfferTables />
			<OfferDay />
			<OfferExpandedTwo />
			<OfferPlace />
		</section>
	);
};

export default OfferContent;
