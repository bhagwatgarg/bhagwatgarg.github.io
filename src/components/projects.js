import React from "react";
import './shared.css';
import "./projects.css";
import ProjectItem from "./project-item";
import discussionImage from '../assets/discussion-forum.png';
import schedulerImage from '../assets/favicon.png';
import sudokuImage from '../assets/sudoku-solver.png'
import steganographyImage from '../assets/steganography-tool.png'

const Projects = (props) => {
	return (
		<section id="projects" className='main-section'>
			<h1 className="section-head">My Projects</h1>
      <div className="main-section-content projects-list">
				<ProjectItem
					title="Sudoku Solver"
					description={"A tool that solves sudokus by extracting sudoku puzzles from the user-provided images"}
					repo='sudoku-solver'
					image={sudokuImage}
				/>
        <ProjectItem
					title="Steganography Tool"
					description={"This tool allows the users to save sensitive information securely."}
					repo='Steganography-Tool'
					image={steganographyImage}
				/>
				<ProjectItem
					title="Scheduler"
					description={"A web app to manage all your calendars at one place"}
					repo='scheduler-frontend'
					image={schedulerImage}
				/>
      </div>
		</section>
	);
};

export default Projects;
