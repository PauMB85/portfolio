import React from 'react';
import { Fab } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Utils from '../../utils/Utils';

import './Home.scss';


function Home(props) {

    const { isDevice } = Utils;

    return (
        <div className="Home">
            <div id="pt" className="canvas" style={{backgroundAttachment : isDevice? 'auto' : 'fixed'}}>
              <canvas id="canvas" ></canvas>
            </div>
            <div className="flex-column">
              <div className="text">
                Hola, soy <span className="hightlight"> Pau Maraví</span>.
                <br/>
                Desarrollador y líder de equipo.
                <br />
                <div className="text-little">
                  Me encanta diseñar y construir aplicaciones web! 
                  <br/>Tines una idea, proyecto o algún problema??
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