import React from 'react';
import { Fab } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Utils from '../../utils/Utils';
import './Home.scss';


function Home(props) {

    const { isDevice } = Utils();

    return (
        <div className="Home">
            <div id="pt" className="canvas" style={{backgroundAttachment : isDevice? 'auto' : 'fixed'}}>
              <canvas id="canvas" ></canvas>
            </div>
            <div className="flex-column">
              <div className="text">
                Hi!, I am <span className="hightlight">Pau Maraví</span>.
                <br/>
                I am a software developer and development project leader.
                <br />
                <div className="text-little">
                  I like designing and building web applications! 
                  <br/>Do you have an idea, project or a problem??
                </div>
              </div>
              <div className="up-down">
                <Fab color="secondary" aria-label="down" href="/#about">
                  <ArrowDownwardIcon />
                </Fab>
              </div>
            </div>
        </div>
    );
}

export default Home;