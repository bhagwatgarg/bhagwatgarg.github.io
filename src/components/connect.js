import React, { useEffect, useState, useContext } from "react";
import "./connect.css";
import { Icon, Button } from "semantic-ui-react";
import {FacebookFilled, GithubFilled, InstagramFilled, MailFilled} from '@ant-design/icons'
import HeightContext from "../util/change-height";

const Connect = (props) => {
  const vp=window.innerHeight;
  let [height, setHeight]=useState(vp);
  let [init, setInit]=useState(false);
  let heightContext=useContext(HeightContext);

  const style={ fontSize: 'max(2vw , 2rem)', margin: '1rem', color:'white'};

  useEffect(()=>{
    if(init)return;
    const handleResize = () => {
      setHeight(
        window.innerHeight - document.getElementById("nav-bar").offsetHeight
      );
			if (window.innerWidth <= 1100) {
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
      <div className='social'>
        <a target='_blank' href='https://www.facebook.com/gargbhagwat'><FacebookFilled style={style}  /></a>
        <a target='_blank' href='https://www.github.com/bhagwatgarg' ><GithubFilled style={style} /></a>
        <a target='_blank' href='https://www.instagram.com/bhagwatgarg' ><InstagramFilled style={style} /></a>
        <a target='_blank' href='mailto:b.garg2013@gmail.com' ><MailFilled style={style} /></a>
      </div>
      </div>
		</section>
	);
};

export default Connect;
