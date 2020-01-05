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
import Skills from './components/skills/Skills';

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
            <Skills />
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
