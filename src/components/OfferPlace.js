import React from 'react';

import img1ICON from '../assets/img/offer/icon/1.jpg'
import img2ICON from '../assets/img/offer/icon/2.jpg'
import img3ICON from '../assets/img/offer/icon/3.jpg'
import img4ICON from '../assets/img/offer/icon/4.jpg'
import img5ICON from '../assets/img/offer/icon/5.jpg'
import img6ICON from '../assets/img/offer/icon/6.jpg'
import img7ICON from '../assets/img/offer/icon/7.jpg'
import img8ICON from '../assets/img/offer/icon/8.jpg'
import img1FULL from '../assets/img/offer/full/1.jpg'
import img2FULL from '../assets/img/offer/full/2.jpg'
import img3FULL from '../assets/img/offer/full/3.jpg'
import img4FULL from '../assets/img/offer/full/4.jpg'
import img5FULL from '../assets/img/offer/full/5.jpg'
import img6FULL from '../assets/img/offer/full/6.jpg'
import img7FULL from '../assets/img/offer/full/7.jpg'
import img8FULL from '../assets/img/offer/full/8.jpg'

import Gallery from 'react-grid-gallery';

const OfferPlace = () => {
    const IMAGES =
    [{
            src: img1FULL,
            thumbnail: img1ICON,
            thumbnailWidth: 250,
            thumbnailHeight: 250,
    },
    {
            src: img2FULL,
            thumbnail: img2ICON,
            thumbnailWidth: 250,
            thumbnailHeight: 250,
    },
    {
            src: img3FULL,
            thumbnail: img3ICON,
            thumbnailWidth: 250,
            thumbnailHeight: 250,
    },
    {
            src: img4FULL,
            thumbnail: img4ICON,
            thumbnailWidth: 250,
            thumbnailHeight: 250,
    },
    {
            src: img5FULL,
            thumbnail: img5ICON,
            thumbnailWidth: 250,
            thumbnailHeight: 250,
    },
    {
            src: img6FULL,
            thumbnail: img6ICON,
            thumbnailWidth: 250,
            thumbnailHeight: 250,
    },
    {
            src: img7FULL,
            thumbnail: img7ICON,
            thumbnailWidth: 250,
            thumbnailHeight: 250,
    },
    {
            src: img8FULL,
            thumbnail: img8ICON,
            thumbnailWidth: 250,
            thumbnailHeight: 250,
    }]
    return (
        <div className="offer__section6">
            <div className="offer__title">Miejsce</div>
            <div className="offer__text">
                Za??akowo to niewielka wie?? kaszubska w p????nocnej Polsce. Miejscowo???? le??y w wojew??dztwie pomorskim w pobli??u L??borka i Sierakowic. W??a??nie w Za??akowie, powsta??o Centrum wypoczynkowe ???Na Gwizd??wce???. Po??o??enie z dala od zabudowa?? mieszkalnych sprawia, ??e uczestnicy mog?? liczy?? na cisz??, spok??j i wypoczynek. Blisko???? jeziora jest prawdziwym atutem tego miejsca. Kompleks wypoczynkowy powsta?? w 2014 roku i wykonany zosta?? z najwy??sz?? staranno??ci?? i dba??o??ci?? o szczeg????y. Otoczenie obiektu dopasowane jest do le??nego krajobrazu okolic jeziora ??wi??tego. Uczestnicy obozu zostan?? zakwaterowani w hotelu. Zaj??cia odbywa?? si?? b??d?? w budynku obok kompleksu hotelowego.
                <br></br><a href='http://www.gwizdowka.pl/'>http://www.gwizdowka.pl/</a>
            </div>
            <div className="offer__gallery">
                <Gallery images={IMAGES} margin={0} enableImageSelection={false} />
            </div>
        </div>
    );
}
export default OfferPlace;