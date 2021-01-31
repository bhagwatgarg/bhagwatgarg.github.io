import React from "react";
import { Icon, Button, Divider } from "semantic-ui-react";
import "./project-item.css";
import {GithubFilled} from '@ant-design/icons';
import {Button as AntButton} from 'antd'

const ProjectItem = (props) => {
	console.log(`url(${props.image})`);
	return (
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
			<div className="project-data">
				<h1 className="project-item-title">{props.title}</h1>
				<Divider fitted />
				
				<p className="project-item-desc">{props.description}</p></div>
				<Button
					as="a"
					target="_blank"
					href={`https://www.github.com/bhagwatgarg/${props.repo}`}
					icon
					color="black"
					className="project-item-button"
					size='massive'
				>
					<GithubFilled style={{fontSize:'max(2vw , 2rem)'}} />
					<h6>View on Github</h6>
				</Button>
				</div>
			
		</section>
	);
};

export default ProjectItem;
