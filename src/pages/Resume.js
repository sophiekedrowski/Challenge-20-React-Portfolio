import React from 'react';
import myResume from '../Assets/myResume.pdf'

export default function Resume() {
    return (
        <div className="container">
            <h1>Resume</h1>
            <div>
                <a href='{myResume}' download="myResume.pdf">
                    <h2>
                        Download my resume here!
                    </h2>
                </a>
            </div>
            <p>
                I have gained many skills over the past couple months in web development, some of those include :
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>Handlebars.js</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>React</li>
                </ul>
                Hit the contact page to learn more!
            </p>
        </div>
    );
}