import React from 'react';

const ColonyContent = () => {
	return (
		<div className='about'>
			<div className='about-section'>
				<h2 className='about--header header'>O NAS</h2>
				<p className='about--text'>
					Jest rok 2024. Cały świat zdominowany został przez Mocarstwo
					Edukacyjnej Negacji. Cały? Nie. Jedna jedyna osada, prowadzona przez
					nieugiętych mentorów wciąż stawia opór najeźdźcom i walczy dzielnie
					rzucając magicznym pyłem wyobraźni i pasji, aby wrzuceni w otchłań
					testów, sprawdzianów, ocen i schematów młodzi mistrzowie stali się
					sojusznikami umysłu. Osada wiedzy przyciąga swym blaskiem wszystkich
					zafascynowanych naukami ścisłymi wojowników, aby mogli oni zdobywać
					skarby będące ich orężem w drodze do sukcesu. Zaślepieni wiarą w naukę
					porzucają letnie, błogie lenistwo i ruszają na podbój dyscyplin
					matematyki, fizyki i programowania. W atmosferze rodzinnych relacji
					rozpoczynają każdy dzień od ćwiczenia tężyzny fizycznej, aby następnie
					poruszyć bystry umysł do zdobywania wszelkiej mądrości. Wyposażeni w
					pewność siebie i odwagę wyruszają z osady z wiarą w sukces,
					przekonani, że wyobraźnia nie zna granic i zawsze jest ważniejsza od
					wiedzy, lecz wiedząc jednocześnie, że wiedza jest mocą a moc jest
					wiedzą. Osada wiedzy jest ich sojusznikiem a oni są sojusznikami
					zdominowanych przez Mocarstwo dając im światło na lepsze czasy.
				</p>
			</div>
			<div className='about-section'>
				<div className='about--header header'>OBEJRZYJ</div>
				<iframe
					title='movie'
					className='frame frame-colony'
					src='https://www.youtube.com/embed/rYot1-OtgTw'
					frameBorder='0'
					allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
};

export default ColonyContent;
