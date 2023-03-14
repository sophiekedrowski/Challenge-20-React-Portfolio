import React from 'react';
import CMS from '../Images/CMS.png'
import Ecommerce from '../Images/Ecommerce.png'
import MySQL from '../Images/MySQL.png'
import NetworkAPI from '../Images/NetworkAPI.png'
import PWA from '../Images/PWA.png'
import Scheduler from '../Images/Scheduler.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Portfolio() {
    return (
        <Container fluid>
            <Row>
                <Col lg={true}>
                    <a href="https://github.com/sophiekedrowski/Challenge-18-NoSQL-Network-API" target="_blank" rel="noreferrer">
                        NoSQL Network API
                    </a>
                    <br></br>
                    <img className="row justify-content-start" src={NetworkAPI} alt="Network API logo"
                        style={{ height: "200px", width: "400px", paddingRight: "10px" }} />
                    {/* </a> */}
                </Col>
                {/* </div> */}
            </Row>
            <Row>
                <a href="https://github.com/sophiekedrowski/Challenge-19-PWA-Text-editor" target="_blank" rel="noreferrer">
                    PWA Text Editor</a> <br></br>
                <img className="row justify-content-end" src={PWA} alt="PWA logo"
                    style={{ height: "200px", width: "400px", paddingRight: "10px" }} />
            </Row>
            <Row>
                <a href="https://github.com/sophiekedrowski/Challenge-18-NoSQL-Network-API" target="_blank" rel="noreferrer">
                    CMS Style Blog  </a> <br></br>
                <img className="flex-row" src={CMS} alt="CMS logo"
                    style={{ height: "200px", width: "400px", paddingRight: "10px" }} />

            </Row>
            <Row>
                <a href="https://github.com/sophiekedrowski/Challenge-18-NoSQL-Network-API" target="_blank" rel="noreferrer">
                    E-commerce backend  </a> <br></br>
                <img className="flex-row" src={Ecommerce} alt="Ecommerce picture"
                    style={{ height: "200px", width: "400px", paddingRight: "10px" }} />
            </Row>
            <Row>
                <a href="https://github.com/sophiekedrowski/Challenge-12--Employee-Tracker-Using-MySql" target="_blank" rel="noreferrer">
                    Employee tracker using MySQL   </a> <br></br>
                <img className="flex-row" src={MySQL} alt="MySQL logo"
                    style={{ height: "200px", width: "400px", paddingRight: "10px" }} />

            </Row>
            <Row>
                <a href="https://github.com/mjkonkel/helping-hands" target="_blank" rel="noreferrer">
                    Project 3 - Helping hands    </a> <br></br>
                    <img className="flex-row" src={Scheduler} alt="Schedule cartoon"
                        style={{ height: "200px", width: "400px", paddingRight: "10px" }} />
                </Row>
        </Container>
    );
}
