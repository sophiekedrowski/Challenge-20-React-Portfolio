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
                NoSQL Network API <br></br>
                <img className="flex-row" src={NetworkAPI} alt="Network API logo"
                    style={{ height: "200px", width: "400px", paddingRight: "10px" }} />
            </div>
            <div className="flex-row">
                PWA Text Editor <br></br>
                <img className="flex-row" src={PWA} alt="PWA logo"
                    style={{ height: "200px", width: "400px",paddingRight: "10px" }} />
            </div>
            <div className="flex-row">
                CMS Style Blog <br></br>
                <img className="flex-row" src={CMS} alt="CMS logo"
                    style={{ height: "200px",width: "400px", paddingRight: "10px" }} />
            </div>
            <div className="flex-row">
                E-commerce backend <br></br>
                <img className="flex-row" src={Ecommerce} alt="Ecommerce picture"
                    style={{ height: "200px",width: "400px", paddingRight: "10px" }} />
            </div>
            <div className="flex-row">
                Employee tracker using MySQL <br></br>
                <img className="flex-row" src={MySQL} alt="MySQL logo"
                    style={{ height: "200px",width: "400px", paddingRight: "10px" }} />
            </div>
            <div className="flex-row">
                Javascript scheduler <br></br>
                <img className="flex-row" src={Scheduler} alt="Schedule cartoon"
                    style={{ height: "200px",width: "400px", paddingRight: "10px" }} />
            </div>
        </div>
    );
}
