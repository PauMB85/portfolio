import React, { useEffect, useState } from 'react';
import { Button, IconButton } from '@material-ui/core';
import Utils from '../../utils/Utils';

import { PauMBLogo } from './../../utils/LogosSVG';

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
				<IconButton className="logo" aria-label="my_brand" href={`${process.env.PUBLIC_URL}/#home`}>
					<PauMBLogo className="logo" />
					{/*<Icon className="logo">
						<img className="logo" src={logo_paumb} alt="PauMB" />
					</Icon>*/}
				</IconButton>
				<Button color="secondary" href={`${process.env.PUBLIC_URL}/#about`}>
					About
				</Button>
				<Button color="secondary" href={`${process.env.PUBLIC_URL}/#skills`}>
					Skills
				</Button>
				<Button color="secondary" href={`${process.env.PUBLIC_URL}/#contact`}>
					Contact
				</Button>
			</nav>
		</div>
	);
}

export default Navbar;
