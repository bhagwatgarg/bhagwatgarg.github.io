import React from "react";
import './shared.css';
import "./projects.css";
import ProjectItem from "./project-item";
import discussionImage from '../assets/discussion-forum.png';
import schedulerImage from '../assets/favicon.png';

const Projects = (props) => {
	return (
		<section id="projects" className='main-section'>
			<h1 className="section-head">My Projects</h1>
      <div className="main-section-content projects-list">
				<ProjectItem
					title="Scheduler"
					description={"A web app to manage all your calendars at one place"}
					repo='scheduler-frontend'
					image={schedulerImage}
				/>
        <ProjectItem
					title="Discussion Forum"
					description={"A place to carry out a discussion with your friends"}
					repo='discussion-forum'
					image={discussionImage}
				/>
      </div>
		</section>
	);
};

export default Projects;
