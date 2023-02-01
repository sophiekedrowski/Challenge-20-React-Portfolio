import React from 'react';
import CMS from '../Images/CMS.png'
import Ecommerce from '../Images/Ecommerce.png'
import MySQL from '../Images/MySQL.png'
import NetworkAPI from '../Images/NetworkAPI.png'
import PWA from '../Images/PWA.png'
import Scheduler from '../Images/Scheduler.png'

export default function Portfolio() {
    return (
        <div className="flex-row">
            <div className="flex-row">
                <a href="https://github.com/sophiekedrowski/Challenge-18-NoSQL-Network-API" target="_blank" rel="noreferrer">
                NoSQL Network API <br></br>
                <img className="flex-row" src={NetworkAPI} alt="Network API logo"
                    style={{ height: "200px", width: "400px", paddingRight: "10px" }} />
                </a>
            </div>
            <div className="flex-row">
                <a href="https://github.com/sophiekedrowski/Challenge-19-PWA-Text-editor" target="_blank" rel="noreferrer">
                PWA Text Editor <br></br>
                <img className="flex-row" src={PWA} alt="PWA logo"
                    style={{ height: "200px", width: "400px",paddingRight: "10px" }} />
                </a>
            </div>
            <div className="flex-row">
                <a href="https://github.com/sophiekedrowski/Challenge-18-NoSQL-Network-API" target="_blank" rel="noreferrer">
                CMS Style Blog <br></br>
                <img className="flex-row" src={CMS} alt="CMS logo"
                    style={{ height: "200px",width: "400px", paddingRight: "10px" }} />
                </a>
            </div>
            <div className="flex-row">
                <a href="https://github.com/sophiekedrowski/Challenge-18-NoSQL-Network-API" target="_blank" rel="noreferrer">
                E-commerce backend <br></br>
                <img className="flex-row" src={Ecommerce} alt="Ecommerce picture"
                    style={{ height: "200px",width: "400px", paddingRight: "10px" }} />
                 </a>
            </div>
            <div className="flex-row">
                <a href="https://github.com/sophiekedrowski/Challenge-12--Employee-Tracker-Using-MySql" target="_blank" rel="noreferrer">
                Employee tracker using MySQL <br></br>
                <img className="flex-row" src={MySQL} alt="MySQL logo"
                    style={{ height: "200px",width: "400px", paddingRight: "10px" }} />
                </a>
            </div>
            <div className="flex-row">
                <a href="https://github.com/sophiekedrowski/Challenge-5" target="_blank" rel="noreferrer">
                Javascript scheduler <br></br>
                <img className="flex-row" src={Scheduler} alt="Schedule cartoon"
                    style={{ height: "200px",width: "400px", paddingRight: "10px" }} />
                </a>
            </div>
        </div>
    );
}
