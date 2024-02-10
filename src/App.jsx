import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useCookies } from 'react-cookie';

import Main from './pages/Main.jsx';
import Colony from './pages/Colony.jsx';
import History from './pages/History.jsx';
import Offer from './pages/Offer.jsx';
import Science from './pages/Science.jsx';
import SciencePhysics from './pages/science/SciencePhysics.jsx';
import ScienceMaths from './pages/science/ScienceMaths.jsx';
import ScienceProgramming from './pages/science/ScienceProgramming.jsx';
import ForMinors from './pages/ForMinors.jsx';
import Pasco from './pages/Pasco.jsx';
import Team from './pages/Team.jsx';
import Recomendations from './pages/Recomendations.jsx';
import Faq from './pages/Faq.jsx';
import Downloads from './pages/Downloads.jsx';
import Form from './pages/Form.jsx';
import Blog from './pages/Blog.jsx';
import Policy from './pages/Policy.jsx';
import Page404 from './pages/Page404.jsx';

function App() {
	AOS.init({
		duration: 600,
		once: true,
	});

	//cookies
	const [cookies, setCookie] = useCookies(['CookiesOsadaWiedzy']);
	const handleCookie = () => {
		setCookie('CookiesOsadaWiedzy', 'CookiesAccepted', { path: '/' });
	};
	useEffect(() => {
		if (!cookies.CookiesOsadaWiedzy) {
			const cookiesBtn = document.querySelector('.cookies button');
			cookiesBtn.addEventListener('click', () => {
				cookiesBtn.parentElement.style.display = 'none';
			});
		}
	}, []);

	return (
		<BrowserRouter>
			{!cookies.CookiesOsadaWiedzy && (
				<div className='cookies'>
					<p>Ta strona wykorzystuje pliki cookies.</p>{' '}
					<button onClick={handleCookie}>X</button>
				</div>
			)}
			<Routes>
				<Route exact path='/' element={<Main />} />
				<Route exact path='/oboz' element={<Colony />} />
				<Route exact path='/historia' element={<History />} />
				<Route exact path='/oferta' element={<Offer />} />
				<Route exact path='/nauki-scisle-po-godzinach' element={<Science />} />
				<Route
					exact
					path='/nauki-scisle-po-godzinach/fizyka'
					element={<SciencePhysics />}
				/>
				<Route
					exact
					path='/nauki-scisle-po-godzinach/matematyka'
					element={<ScienceMaths />}
				/>
				<Route
					exact
					path='/nauki-scisle-po-godzinach/programowanie'
					element={<ScienceProgramming />}
				/>
				<Route exact path='/fizyka-dla-nieletnich' element={<ForMinors />} />
				<Route exact path='/pasco' element={<Pasco />} />
				<Route exact path='/zespol' element={<Team />} />
				<Route exact path='/rekomendacje' element={<Recomendations />} />
				<Route exact path='/do-pobrania' element={<Downloads />} />
				<Route exact path='/kwestionariusz' element={<Form />} />
				<Route exact path='/faq' element={<Faq />} />
				<Route exact path='/blog' element={<Blog />} />
				<Route exact path='/polityka-prywatnosci' element={<Policy />} />
				<Route element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
