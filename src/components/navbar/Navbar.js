import React, { useEffect, useState } from 'react';
import { Button, IconButton, Icon } from '@material-ui/core';

import logo_paumb from './../../nombre-logo-pau.png';

import './Navbar.scss';

function Navbar(props) {


    const [isSticky, setIsSticky] = useState(false);
    const [sticky, setSticky] = useState(0);

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        setSticky(navbar.offsetTop);
    },[])
    
    useEffect(() => {
        if(sticky > 0){
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[sticky]);

    const handleScroll = () => {
        
        const positionScroll = window.pageYOffset;
        setIsSticky(positionScroll > sticky ? true : false);
        
    }

    return (
        <div className="Navbar">
            <nav id="navbar" className={'flex-row' + (isSticky? ' nav-sticky': '')}>
                <IconButton className='logo' aria-label="my_brand" href="/#home">
                    <Icon className='logo'>
                        <img className='logo' src={logo_paumb} alt="PauMB"/>
                    </Icon>
                </IconButton>
                <Button color="secondary" href="/#about">About</Button>
                <Button color="secondary" href="/#skills">Skills</Button>
                <Button color="secondary" href="/#contact">Contact</Button>
            </nav>
        </div>
    );
}

export default Navbar;