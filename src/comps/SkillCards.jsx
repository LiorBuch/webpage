import React from "react";
import gameimg from './assets/ue.jpg'
import autoimg from './assets/auto.png'
import tfskill from './assets/skills/tfskill.png'
import CardItem from "./CardItem";
import './Cards.css'
function SkillCards(){
    return(
        <div className={"cards"}>
            <h1>
                MySkills
            </h1>
            <div className={"cards__container"}>
                <div className={"cards__wrapper"}>
                    <h2>Python</h2>
                    <ul className={"cards__item"}>
                        <CardItem
                            src={tfskill}
                            text={"TensorFlow"}
                            label={'AIML'}
                            path={"/"}
                        />
                        <CardItem
                            src={autoimg}
                            text={"Pandas"}
                            label={'Core'}
                            path={"/projects"}
                        />
                        <CardItem
                            src={gameimg}
                            text={"Numpy"}
                            label={'Core'}
                            path={"/projects"}
                        />
                        <CardItem
                            src={gameimg}
                            text={"ParallelComputing"}
                            label={'Core'}
                            path={"/projects"}
                        />
                        <CardItem
                            src={gameimg}
                            text={"Kivy"}
                            label={'UI'}
                            path={"/projects"}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SkillCards