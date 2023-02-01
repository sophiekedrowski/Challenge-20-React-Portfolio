import React from "react";
import githubLogo from '../Images/githubLogo.png'
import linkedinlogo from '../Images/linkedinlogo2.png'
import miniinsta from '../Images/miniinsta.png'

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                <hr />
                    {/* <strong>My Full Stack Development Portfolio</strong> - a React site by{" "} */}
                    <a href="https://github.com/sophiekedrowski" target="_blank" rel="noreferrer">
                    <img className="flex-row" src={githubLogo} alt="Github logo"
                style={{ height: "40px", paddingRight: "10px" }}  />
                    </a>
                    <a href="https://www.linkedin.com/in/sophie-kedrowski-0a5586130" target="_blank" rel="noreferrer">
                    <img className="flex-row" src={linkedinlogo} alt="linkedin logo"
                style={{ height: "40px", paddingRight: "10px" }}  />
                    </a>
                    <a href="https://www.instagram.com/skophssoph/" target="_blank" rel="noreferrer">
                    <img className="flex-row" src={miniinsta} alt="Insta logo"
                style={{ height: "40px", paddingRight: "10px" }}  />
                    </a>
                    {/* {" "}{" "} */}
                </p>
            </div>
        </footer>
    );
}

export default Footer;