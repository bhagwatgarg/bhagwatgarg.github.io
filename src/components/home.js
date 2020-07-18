import React from "react";
import { Icon, Button } from "semantic-ui-react";
import {DoubleLeftOutlined} from '@ant-design/icons';

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
			<DoubleLeftOutlined rotate={90} style={{fontSize:'max(4rem , 4vw)',color:'white', fontWeight:'bold'}} />
			</Button>
			
		</div>
	);
};

export default Home;
