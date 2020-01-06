import React from 'react';
import Button from '@material-ui/core/Button';

import './Home.scss';

function Home(props) {

    return (
        <div className="Home">
            <div id="pt" className="canvas">
              <canvas id="canvas" ></canvas>
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
              <Button variant="contained" size="medium" color="secondary" href="/#about">
                Work
              </Button>
            </div>
        </div>
    );
}

export default Home;