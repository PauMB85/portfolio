import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './style/muiTheme';
import { ThemeProvider } from '@material-ui/core/styles';

import './App.scss';
import './style/commons.scss';
const Home = React.lazy(() => import('./components/home/Home'));
const Navbar = React.lazy(() => import('./components/navbar/Navbar'));
const AboutMe = React.lazy(() => import('./components/about/AboutMe'));
const Skills = React.lazy(() => import('./components/skills/Skills'));
const Contact = React.lazy(() => import('./components/contact/Contact'));
const Footer = React.lazy(() => import('./components/footer/Footer'));


function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className="overflow-wrap flex-column">
				{/* Home */}
				<Suspense fallback={<h2>I am loading...</h2>}>
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
					{/* footer */}
					<Footer />
				</Suspense>
			</div>
		</ThemeProvider>
	);
}

export default App;
