import React, { useEffect, useState } from "react";
import NavBar from "./components/navBar";
import "./App.css";
import HeightContext from "./util/change-height";

//import VisibilitySensor from "react-visibility-sensor";
import About from "./components/about";
import Home from "./components/home";
import Achievements from "./components/achievements";
import "antd/dist/antd.css";
import Projects from "./components/projects";
import Connect from "./components/connect";
import Interests from "./components/interests";
//import Scrollspy from "react-scrollspy";

const App = (props) => {
	let [init, setInit] = useState(false);
	let [height, setHeight] = useState(window.innerHeight);
	let [sideDrawer, setSideDrawer] = useState(false);
	let [visible, setVisible] = useState(false);

	const manageHeight = () => {
		setHeight(
			window.innerHeight - document.getElementById("nav-bar").offsetHeight
		);
		console.log(window.innerHeight - document.getElementById("nav-bar").offsetHeight);
	};

	useEffect(() => {
		if (init) return;
		init = true;
		if (window.innerWidth <= 1100) setSideDrawer(true);
		window.onscroll = () => {
			const navBar = document.getElementById("nav-bar");
			const head = document.getElementById("nav-bar-header");
			if (window.pageYOffset === 0) {
				if (navBar.classList.contains("solid-nav")) {
					navBar.classList.remove(["solid-nav"]);
					if (head) head.style = "color: white";
				}
			} else {
				if (!navBar.classList.contains("solid-nav")) {
					navBar.classList.add(["solid-nav"]);
					if (head) head.style = "";
				}
			}
		};
		return () => {
			window.onscroll = null;
		};
	}, []);
	const content = (
		<HeightContext.Provider value={{ height: height, setHeight: manageHeight }}>
			<div>
				<Home />
				<About />
				<Interests />
				<Projects />
				<Connect setSideDrawer={setSideDrawer} />
			</div>
		</HeightContext.Provider>
	);

	return (
		<React.Fragment>
			<NavBar
				sideDrawer={sideDrawer}
				setSideDrawer={setSideDrawer}
				visible={visible}
				setVisible={setVisible}
			/>

			{content}
		</React.Fragment>
	);

	// return (
	// 	<Sidebar.Pushable as={Segment}>
	// 		<Sidebar
	// 			as={Menu}
	// 			animation="overlay"
	// 			icon="labeled"
	// 			inverted
	// 			onHide={() => setVisible(false)}
	// 			vertical
	// 			visible={visible}
	//       width="thin"
	//       id='sidebar'
	// 		>
	// 			<Menu.Item as="a">
	// 				<Icon name="home" />
	// 				Home
	// 			</Menu.Item>
	// 			<Menu.Item as="a">
	// 				<Icon name="gamepad" />
	// 				Games
	// 			</Menu.Item>
	// 			<Menu.Item as="a">
	// 				<Icon name="camera" />
	// 				Channels
	// 			</Menu.Item>
	// 		</Sidebar>

	// 		<Sidebar.Pusher dimmed={visible}>
	// 			<React.Fragment>

	// 			</React.Fragment>
	// 		</Sidebar.Pusher>
	// 	</Sidebar.Pushable>
	// );
};

export default App;
