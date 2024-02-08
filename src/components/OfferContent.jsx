import React, {useEffect} from 'react'

import OfferExpandedOne from './OfferExpandedOne'
import OfferTables from './OfferTables'
import OfferDay from './OfferDay'
import OfferExpandedTwo from './OfferExpandedTwo'
import OfferPlace from './OfferPlace'

const OfferContent = () => {
    // Logic for <OfferExpandedOne /> and OfferExpandedTwo />
    useEffect(()=>{
        let coll = document.querySelectorAll(".expanded__title");
        for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", ()=>{
            coll[i].parentElement.classList.toggle("active");
            let content = coll[i].parentElement.children[1];
            content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px";
            });
        }
    })

    return (
            <section className='offer'>
                <OfferExpandedOne />
                <OfferTables />
                <OfferDay />
                <OfferExpandedTwo />
                <OfferPlace />
            </section>
    );
}

export default OfferContent;