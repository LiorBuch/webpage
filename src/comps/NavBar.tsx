import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button, Icon, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import './NavBar.css'

function NavBar() {
    const [icon, setIcon] = useState(<ImportContactsIcon/>)
    const closeMenu = () => setIcon(<ImportContactsIcon/>)
    const handleClick = () => setIcon(icon.type === ImportContactsIcon ? <CloseIcon/> : <ImportContactsIcon/>);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <h1 className={"navbar-logo"}>
                        LiorBuch
                    </h1>
                    <ul className={icon.type === ImportContactsIcon ? 'nav-menu-active' : 'nav-menu'}>
                        <li className={'nav-item'}>
                            <Link to={'/'} className={'nav-links'}>
                                <Button onClick={closeMenu} style={{color: '#ffffff' }}>
                                    Home
                                </Button>
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={'/'} className={'nav-links'}>
                                <Button onClick={closeMenu} style={{color: '#ffffff' }}>
                                    Projects
                                </Button>
                            </Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link to={'/'} className={'nav-links'}>
                                <Button onClick={closeMenu} style={{color: '#ffffff' }}>
                                    Skills
                                </Button>
                            </Link>
                        </li>
                    </ul>
                    <IconButton className={"drawer-icon"} onClick={handleClick} color={'success'}>
                        <Icon>{icon}</Icon>
                    </IconButton>
                </div>
            </nav>
        </>
    )
}

export default NavBar