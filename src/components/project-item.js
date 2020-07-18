import React from "react";
import { Icon, Button, Divider } from "semantic-ui-react";
import "./project-item.css";

const ProjectItem = (props) => {
	console.log(`url(${props.image})`);
	return (
		// <Card

		//   className='project-item'
		//   image='../assets/achievements-backgroung.jpg'
		// 	header={props.title}
		// 	description={props.description}
		//   // href={"#"}
		//   // target='_blank'
		//   raised
		//   key={props.title}
		// />
		<section className="project-item">
			<div
				className="project-item-image"
				style={
					props.image != null
						? {
								backgroundImage: `url(${props.image})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
						  }
						: {}
				}
			></div>
			<div className="project-item-content">
				<h1 className="project-item-title">{props.title}</h1>
				<Divider fitted />
				<p className="project-item-desc">{props.description}</p>
				<Button
					as="a"
					target="_blank"
					href={`https://www.github.com/bhagwatgarg/${props.repo}`}
					icon
					color="black"
					className="project-item-button"
				>
					<Icon name="github" size="large" />
					<h6>View on Github</h6>
				</Button>
			</div>
		</section>
	);
};

export default ProjectItem;
