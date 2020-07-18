import React from "react";
import { Icon, Button } from "semantic-ui-react";

import "./home.css";
import handleItemClick from "../util/scroll";

const Home = (props) => {

	const onClickHandler=()=>{
		handleItemClick('about');
	};
	return (
		<div id="home" className="background">
			<div className="intro">
				<h4>Hey There, I'm</h4>
				<h1>Bhagwat Garg</h1>
			</div>
			<Button icon id='main-btn' onClick={onClickHandler}>
			<Icon
				id="upArrowIcon"
				className="up-icon"
				name="angle double up"
				color="grey"
				size="huge"
			/>
			</Button>
			
		</div>
	);
};

export default Home;
