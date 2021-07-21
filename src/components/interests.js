import React from "react";
import "./interests.css";
import './shared.css';

const Interests = (props) => {
	return (
		<section id="skills-and-interests" className='main-section'>
			<h1 className="section-head">My Skills and Interests</h1>
      
			<div className="main-section-content">
      <div className='skills-image main-section-picture'></div>
				<section className="main-section-para">
					I have been exploring the field of blockchain for  while and have worked as a Summer Intern at <section className='main-section-highlight'>National Blockchain Project </section>.
					I have also worked on a couple of machine learning projects.
					Sometimes, I indulge myself in competitive programming by taking part
					in CodeForces contests. I also like to develop applications for the web.
				</section>
			</div>
		</section>
	);
};

export default Interests;
