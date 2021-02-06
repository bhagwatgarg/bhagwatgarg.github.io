import React, { useState } from "react";
import { Drawer } from "antd";
import { Menu, Icon } from "semantic-ui-react";
//import VizSensor from "react-visibility-sensor";
import Scrollspy from "react-scrollspy";
import handleItemClick from '../util/scroll';
import "./navBar.css";

const NavBar = (props) => {

  const handleClick=(str)=>{
    props.setVisible(false);
    handleItemClick(str);
  }
	let [activeItem, setActiveItem] = useState("home");
		// document.getElementById(str).scrollIntoView({ behavior: "smooth" , });

	const sections = [
		"home",
    "about",
    'skills-and-interests',
		// "achievements",
		"projects",
		"connect-with-me",
	];

	const onUpdateHandler = (str) => {
		if (str.id === activeItem) return;
		setActiveItem(str.id);
	};

  const resumeURL='/Resume_Bhagwat_Garg.pdf';

	const items = sections.map((val) => (
		<Menu.Item
			name={val}
			key={val}
			active={activeItem === val}
			onClick={() => handleClick(val)}
		/>
	));

  items.push((
  <Menu.Item
    name='Resume'
    key='Resume'
    active={false}
    onClick={()=>window.open(resumeURL, '_blank')}
  />
  ));

	return (
		<Scrollspy
			items={sections}
			onUpdate={onUpdateHandler}
			componentTag={"nav"}
			className="nav-class"
			offset={-window.innerHeight * 0.5}
		>
			<div id="nav-bar" className="trans-nav">
				<Menu secondary>
					{props.sideDrawer ? (
            <React.Fragment>
						<Menu.Item className='side-drawer-item' onClick={() => props.setVisible(true)}>
							<Icon name="bars" size="small" />
						</Menu.Item>
            <Menu.Item className='side-drawer-item'>
              <h1 id='nav-bar-header' style={{color:'white'}}>bhagwatgarg</h1>
            </Menu.Item>
            </React.Fragment>
					) : (
						items
					)}
				</Menu>
			</div>
			<Drawer
				title="Navigate"
				placement="left"
				closable={true}
				onClose={() => props.setVisible(false)}
				visible={props.visible}
				id="drawer"
			>
				<Menu secondary>{items}</Menu>
			</Drawer>
		</Scrollspy>
	);
};

export default NavBar;
