import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './style/muiTheme';
import { ThemeProvider } from '@material-ui/core/styles';
import Contact from './components/contact/Contact';

import './App.scss';
import './style/commons.scss';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import AboutMe from './components/about/AboutMe';

function App() {

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="overflow-wrap flex-column">
          {/* Home */}
          <section id="home">
            <Home />
          </section>
          <Navbar />
          {/* about me */}
          <section id="about">
            <AboutMe />
          </section>
          {/* skills */}
          <section id="skills">
            <h1>Skills</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque pariatur reprehenderit autem</p>
            <p>similique numquam placeat labore, possimus enim consequuntur, officia eos accusamus dolorem quod cum</p> 
            <p>atque dolore facere vitae deleniti.</p>
          </section>
          {/* contact */}
          <section id="contact">
            <Contact />
          </section>
        </div>
      
    </ThemeProvider>
  );
}

export default App;
