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
					I am currently working on expanding my machine learning skills.
					Sometimes, I indulge myself in competitive programming by taking part
					in CodeForces contests. I also like to develop applications for
					android and web.
				</section>
			</div>
		</section>
	);
};

export default Interests;
