import React, { useEffect, useState, useContext } from "react";
import "./connect.css";
import { Icon, Button } from "semantic-ui-react";
import HeightContext from "../util/change-height";

const Connect = (props) => {
  const vp=window.innerHeight;
  let [height, setHeight]=useState(vp);
  let [init, setInit]=useState(false);
  let heightContext=useContext(HeightContext);

  useEffect(()=>{
    if(init)return;
    const handleResize = () => {
      setHeight(
        window.innerHeight - document.getElementById("nav-bar").offsetHeight
      );
			if (window.innerWidth <= 900) {
				props.setSideDrawer(true);
			} else {
				props.setSideDrawer(false);
			}
		};
		window.onresize = handleResize;
    setHeight(
      window.innerHeight - document.getElementById("nav-bar").offsetHeight
    );
    console.log('reached');
    init=true;
    return ()=>window.onresize=null;
  }, []);
    
	return (
		<section id="connect-with-me" style={{height:height}}>
      <div className='contact-card'>
      <article className={'address'}>
        <h1>Bhagwat Garg</h1>
        <h4>E-213, Hall 13</h4>
        <h4>IIT Kanpur</h4>
      </article>
      <section className='social-icons'>
        
        <Button as='a' target="_blank" href='https://www.facebook.com/gargbhagwat' icon color='facebook' circular><Icon name='facebook f' size='large'/></Button>
        <Button as='a' target="_blank" href='https://www.github.com/bhagwatgarg' icon color='black' circular><Icon name='github' size='large'/></Button>
        <Button as='a' target="_blank" href='mailto:b.garg2013@gmail.com' icon color='red' circular><Icon name='mail' size='large'/></Button>
        <Button as='a' target="_blank" href='https://www.instagram.com/bhagwatgarg' icon color='instagram' circular><Icon name='instagram' size='large'/></Button>
      </section>
      </div>
		</section>
	);
};

export default Connect;
