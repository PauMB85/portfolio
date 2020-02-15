import React, { useEffect, useState } from 'react';
import { Button, IconButton, Icon } from '@material-ui/core';
import Utils from '../../utils/Utils';

import logo_paumb from './../../nombre-logo-pau.png';

import './Navbar.scss';

function Navbar(props) {
	const [isSticky, setIsSticky] = useState(false);
	const [sticky, setSticky] = useState(0);

	const { positionScroll } = Utils();

	useEffect(() => {
		resizeUI();

		window.addEventListener('resize', resizeUI);
		return () => {
			window.removeEventListener('resize', resizeUI);
		};
	}, []);

	useEffect(() => {
		setIsSticky(positionScroll > sticky ? true : false);
	}, [positionScroll, sticky]);

	function resizeUI() {
		const navbar = document.getElementById('home');
		setSticky(navbar.offsetHeight);
	}

	return (
		<div className="Navbar">
			<nav id="navbar" className={'flex-row' + (isSticky ? ' nav-sticky' : '')}>
				<IconButton className="logo" aria-label="my_brand" href="/#home">
					<Icon className="logo">
						<img className="logo" src={logo_paumb} alt="PauMB" />
					</Icon>
				</IconButton>
				<Button color="secondary" href="/#about">
					About
				</Button>
				<Button color="secondary" href="/#skills">
					Skills
				</Button>
				<Button color="secondary" href="/#contact">
					Contact
				</Button>
			</nav>
		</div>
	);
}

export default Navbar;
