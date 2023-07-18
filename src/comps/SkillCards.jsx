import React from "react";
import numpyimg from './assets/numpyicon.png'
import pandasimg from './assets/pandasimg.png'
import pythonimg from './assets/pythonicon.png'
import kivyimg from './assets/Kivy_logo.png'
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
                            src={pandasimg}
                            text={"Pandas"}
                            label={'Core'}
                            path={"/projects"}
                        />
                        <CardItem
                            src={numpyimg}
                            text={"Numpy"}
                            label={'Core'}
                            path={"/projects"}
                        />
                        <CardItem
                            src={pythonimg}
                            text={"ParallelComputing"}
                            label={'Core'}
                            path={"/projects"}
                        />
                        <CardItem
                            src={kivyimg}
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