import React, { useState } from 'react';
import './FAQPage.css';
import Spline from '@splinetool/react-spline';

const FAQPage = () => {
	const GeneralFAQ = [
		{
			id: 1,
			toggle: false,
			question: 'What is your startup all about?',
			answer:
				'Our startup is dedicated to preserving the cultural and historical value of films originally made on physical reels. We digitize, restore, and archive these works—ensuring future generations can experience them. We also connect film owners and enthusiasts with global film libraries and museums.',
		},
		{
			id: 2,
			toggle: false,
			question: 'Why is preserving physical film important in the digital age?',
			answer:
				'Physical reels are fragile and degrade over time. Many cinematic masterpieces risk being lost forever. Unlike digital copies, original film stock holds unmatched texture, depth, and authenticity—preserving it means preserving the filmmaker’s true vision.',
		},
		{
			id: 3,
			toggle: false,
			question: 'Who supports or guides your initiative?',
			answer:
				'We are honored to have the support and guidance of visionary filmmakers such as Martin Scorsese, Christopher Nolan, Steven Spielberg, Quentin Tarantino, Francis Ford Coppola, and George Lucas—all of whom are strong advocates for film preservation.',
		},
		{
			id: 4,
			toggle: false,
			question: 'Can independent creators or collectors reach out for preservation?',
			answer:
				'Absolutely. We believe every film has a story. Whether you’re an indie filmmaker or a private collector, you can connect with us to discuss restoration, archiving, or collaboration with our museum and library partners.',
		},
		{
			id: 5,
			toggle: false,
			question: 'Which organizations or institutions are you connected with?',
			answer:
				'We’re building strong ties with renowned platforms like A24, Criterion Collection, MUBI, and several national film archives. These partnerships help bring rare films back to life and into the hands of cinephiles.',
		},
		{
			id: 6,
			toggle: false,
			question: 'Do you only work with old films or also newer analog works?',
			answer:
				'While our focus is on legacy films, we’re equally passionate about preserving newer works shot on film stock. If your project was made on physical reel, we’re here to help safeguard its future.',
		},
		{
			id: 7,
			toggle: false,
			question: 'How can someone get involved or support your mission?',
			answer:
				'You can support us by spreading the word, donating, volunteering, or submitting your reels for preservation. Whether you’re a filmmaker, historian, student, or cinephile—there’s a place for you in our growing community.',
		},
	];
	

	// const FAQ2 = [
	// 	{
	// 		id: 1,
	// 		toggle: false,
	// 		question: 'Is it a one-time payment?',
	// 		answer:
	// 			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero eveniet deleniti, consequatur ut maiores. Autem vel impedit praesentium porro aspernatur dicta iure nisi nobis. Vel aliquid tempora iste autem.',
	// 	},
	// 	{
	// 		id: 2,
	// 		toggle: false,
	// 		question: 'How does billing works?',
	// 		answer:
	// 			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero eveniet deleniti, consequatur ut maiores. Autem vel impedit praesentium porro aspernatur dicta iure nisi nobis. Vel aliquid tempora iste autem.',
	// 	},
	// ];

	const [genFAQ, setGenFAQ] = useState(GeneralFAQ);
	// const [Faq2, setFaq2] = useState(FAQ2);
	const handleToggle = (id) => {
		setGenFAQ((prevFaqs) =>
			prevFaqs.map((faq) =>
				faq.id === id
					? {
						...faq,
						toggle: !faq.toggle,
					}
					: faq
			)
		);
	};
	const handleToggle2 = (id) => {
		setFaq2((prevFaqs2) =>
			prevFaqs2.map((faq) =>
				faq.id === id
					? {
						...faq,
						toggle: !faq.toggle,
					}
					: faq
			)
		);
	};

	return (
		<div className="faq-page">
			<div className="head">
				<p id="support">Customer Support</p>
				<h1>
					Top questions about <span id="title">CineRevive</span>
				</h1>
			</div>

			<div className="faq-section">
				<div className="faq-div1">
					<h2>General FAQs</h2>
				</div>
				<div className="faq-list">
					{genFAQ.map((q) => (
						<div className="faq-item" key={q.id}>
							<div className="faq-question">
								<h3>{q.question}</h3>
								<span className="toggle" onClick={() => handleToggle(q.id)}>
									{q.toggle ? '-' : '+'}
								</span>
							</div>
							{q.toggle && <p className="answer">{q.answer}</p>}
						</div>
					))}
				</div>
			</div>
					

		</div>
	);
};

export default FAQPage;
