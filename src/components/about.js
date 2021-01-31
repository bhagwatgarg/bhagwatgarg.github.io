import React from "react";
import "./about.css";
import './shared.css';

const About = (props) => {
	return (
		<section id="about" className='main-section'>
			<div className='section-head-div'>
			<h1 className="section-head">About Me</h1>
			</div>
			
			<article className="main-section-content">
				<div className='picture-container'><div className="main-section-picture about-picture"></div></div>
				<p className="main-section-para">
					I have always been fascinated by the world of computers. I had always
					wished to know what happens under the hood which makes it such a
					wonderful machine. Therefore, I chose to make a career in the same.
					Currently I am a <section className='main-section-highlight'>2nd Year Undergraduate</section> pursuing a degree in <section className='main-section-highlight'>Computer
					Science at IIT Kanpur</section>. I am also the Secretary at Programming Club, IIT Kanpur.
				</p>
			</article>
		</section>
	);
};

export default About;
