import React from 'react';

import classes from './Main.css';
import symbol from '../../../Assets/icon/SVG/px.svg';
import ReactSVG from 'react-svg';

const Main = (props) => {
  return (
    <section className={classes.Main}>  
               <div className={classes.Welcome}>
                    <h1 className={classes.WelcomeTitle}>Welcome</h1>
                    <h1 className={classes.Name}>THE TRIANO</h1>

                    <span className={classes.Line}>
                          <ReactSVG src={symbol} className={classes.Icon} />
                    </span>

                    <h3>{props.title}</h3>        

               
               </div>          
        </section>
  )
}

export default Main; 

/*  <h3>The right place to be</h3> */