import React from "react";
import './Footer.css'
import {Button} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Link} from "react-router-dom";
import regif from './assets/reactgif.gif'
function Footer() {
    return(
        <div className={"footer-container"}>
            <section className={"footer-subscription"}>
                <p className={"footer-subscription-heading"}>
                    <Link to={"https://www.linkedin.com/in/lior-buchmeier-932855218/"}>
                        <Button variant="outlined" startIcon={<LinkedInIcon />}>
                            LinkedIn
                        </Button>
                    </Link>
                </p>
                <p className={"footer-subscription-text"}>
                    <Link to={"https://github.com/LiorBuch"}>
                        <Button variant="outlined" startIcon={<GitHubIcon />}>
                            GitHub
                        </Button>
                    </Link>
                </p>
                <div className={"input-areas"}>
                    Built With React
                    <img className={"foot_img"} src={regif} alt={""}/>
                </div>
            </section>
        </div>
    )
}

export default Footer