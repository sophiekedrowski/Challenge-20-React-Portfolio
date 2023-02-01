import React from 'react';
import Portrait from '../Images/Portrait.jpeg'

export default function AboutMe() {
    return (
        <div className="flex-row">
            <h1 className="flex-row">About Me</h1>
            <p className="flex-row"> Hello! My name is Sophie Kedrowski. I'm from Minneapolis, MN. I'm currently working as registered nurse in an observation unit. <br></br>
              I decided to try out full stack development in order to make a career change. <br></br> When i'm not studying coding or working, I am an avid rock climber
              and you will find me at the climbing gym at least 6 days a week. <br></br> Check out my portofolio to see some of the latest projects I have been working on 🍋.
            </p>
            <div>
                <img className="flex-row" src={Portrait} alt="Sophie Kedrowski"
                style={{ height: "400px", paddingRight: "10px" }}  />
            </div>
        </div>
    );
}
