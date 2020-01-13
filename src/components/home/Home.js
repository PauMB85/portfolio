import React from 'react';
import { Fab } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import './Home.scss';

function Home(props) {

    return (
        <div className="Home">
            <div id="pt" className="canvas">
              <canvas id="canvas" ></canvas>
            </div>
            <div className="flex-column">
              <div className="text">
                Hola, soy <span className="hightlight"> Pau Maraví</span>.
                <br/>
                I'm a software developer & project leader
                <br />
                <div className="text-little">
                    I like code and build web applications. Have a project, idea or problem??
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