import React from 'react';
import Form from '../components/Form';

const FormContent = () => {
	return (
		<>
			<h2 className='header form__header'>Formularz zgłoszeniowy</h2>
			<div className='form__main'>
				<div className='form__info'>
					<h3>
						<b>Informacja organizatora wypoczynku</b>
					</h3>
					Forma placówki wypoczynku: obóz naukowy stacjonarny
					<br />
					Miejsce wypoczynku: Załakowo 18a, 83-342 Sierakowice
					<br />
					Czas trwania: 30.06.2023r. – 8.07.2023r.
				</div>
				<Form />
			</div>
		</>
	);
};

export default FormContent;