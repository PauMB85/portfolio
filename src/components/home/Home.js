import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

import './Home.scss';
import encabezadoEstrella from './../../encabezado-estrella.png';

function Home(props) {


    const [height,setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const newHeight = window.innerHeight;
        setHeight(newHeight);
        setWidth(window.innerWidth);
    },[]);


    return (
        <div className="Home">
            <div id="pt" className="canvas" height={height}>
              <canvas id="canvas" width={width} height={height}></canvas>
            </div>
            <div className="flex-column">
              <div className="text">
                Uep, I'm <span className="hightlight"> Pau Maraví</span>.
                <br/>
                I'm a software developer & project leader
                <br />
                <div className="text-little">
                    I like code and build web applications. Have a project, idea or problem??
                </div>
              </div>
            </div>
            <Button variant="contained" size="medium" color="secondary" href="/#about">
                Work
            </Button>
        </div>
    );
}

export default Home;