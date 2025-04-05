import React from "react";
import Image1 from "../assets/shreyas_founder.jpg";
import "./Gallery.css"; // Adjust the path as necessary

const Gallery = () => {
	const founders = [
		{
			imgSrc: Image1,
			name: "Kumar Shreyas",
			description:
				"A passionate and driven aspiring software engineer with a strong foundation in coding, problem-solving, and building impactful digital solutions. Deeply inspired by the art of cinema, I actively explore film history, preservation, and storytelling across genres and eras. Off the screen and keyboard, I’m a devoted cricket lover who enjoys the strategy, spirit, and community the game brings. Constantly learning, creating, and chasing excellence at the intersection of technology, creativity, and sport.",
		},
	];

	return (
		<section className="gallery" id="gallery">
			<h3 className="heading">
				<span>Founders</span> gallery
			</h3>
			<div className="box-container">
				{founders.map((founder, index) => (
					<div className="box" key={index}>
						<img src={founder.imgSrc} alt={founder.name} />
						<div className="info">
							<h3>{founder.name}</h3>
							<p>{founder.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Gallery;
