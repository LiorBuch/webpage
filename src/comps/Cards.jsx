import React from "react";
import CardItem from "./CardItem";
import './Cards.css'
import proimg from './assets/ml.png'
import gameimg from './assets/ue.jpg'
import autoimg from './assets/auto.png'
import cloudimg from './assets/azure-cloud.png'
import aimg from './assets/tf.png'

import tfskill from './assets/skills/tfskill.png'
function Cards(){
    return(
        <div className={"cards"}>
            <h1>
                Some of my projects
            </h1>
            <div className={"cards__container"}>
                <div className={"cards__wrapper"}>
                    <ul className={"cards__items"}>
                        <CardItem
                        src={proimg}
                        text={"using image detection and ballistics to teach a bot how to play a simple 2D game"}
                        label={'ImgDetection'}
                        path={"/projects"}
                        />
                        <CardItem
                            src={autoimg}
                            text={"Bug bundling tool that streamlines customer bug reporting,Eliminating the need for lengthy email exchanges"}
                            label={'Automation'}
                            path={"/projects"}
                        />
                        <CardItem
                            src={gameimg}
                            text={"UnrealEngine5 RTS Game using VisualScripting, C++ and self created models using Blender"}
                            label={'GameDevelop'}
                            path={"/projects"}
                        />
                    </ul>
                    <ul className={"cards__items"}>
                        <CardItem
                            src={cloudimg}
                            text={"Azure deployed backend and kivy based android app for weather applications"}
                            label={'Cloud'}
                            path={"/projects"}
                        />
                        <CardItem
                            src={aimg}
                            text={"Completely automated bot using image detection to control a bot behaviour in a constant changing environment "}
                            label={'ArtificialIntelligence'}
                            path={"/projects"}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Cards