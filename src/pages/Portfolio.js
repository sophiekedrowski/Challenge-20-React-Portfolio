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
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { CardGroup } from 'react-bootstrap';


export default function Portfolio() {
    return (
        <Container className='d-flex'>

            <CardGroup>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', height: "24rem" }}>
                            <Card.Img className='Card_Img' variant="top" src={NetworkAPI} />
                            <Card.Body>
                                <Card.Title>NoSQL Network API</Card.Title>
                                <Button variant="primary" href="https://github.com/sophiekedrowski/Challenge-18-NoSQL-Network-API">Github link</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <Card style={{ width: '18rem', height: "24rem" }}>
                            <Card.Img className='Card_Img' variant="top" src={PWA} />
                            <Card.Body>
                                <Card.Title>PWA Text Editor</Card.Title>
                                <Button variant="primary" href="https://github.com/sophiekedrowski/Challenge-19-PWA-Text-editor">Github link</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CardGroup>

            <CardGroup>
                <Row >
                    <Col>
                        <Card style={{ width: '18rem', height: "24rem" }}>
                            <Card.Img className='Card_Img' variant="top" src={CMS} />
                            <Card.Body>
                                <Card.Title>CMS Style blog</Card.Title>
                                <Button variant="primary" href="https://github.com/sophiekedrowski/CMS-style-blog">Github link</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <Card style={{ width: '18rem', height: "24rem" }}>
                            <Card.Img className='Card_Img' variant="top" src={Ecommerce} />
                            <Card.Body>
                                <Card.Title>E-Commerce Backend</Card.Title>
                                <Button variant="primary" href="https://github.com/sophiekedrowski/E-commerce-back-end">Github link</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CardGroup>

            <CardGroup>
                <Row >
                    <Col>
                        <Card style={{ width: '18rem', height: "24rem" }}>
                            <Card.Img className='Card_Img' variant="top" src={MySQL} />
                            <Card.Body>
                                <Card.Title>Employee tracker using MySQL </Card.Title>
                                <Button variant="primary" href="https://github.com/sophiekedrowski/Challenge-12--Employee-Tracker-Using-MySql">Github link</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row >
                    <Col>
                        <Card style={{ width: '18rem', height: "24rem" }}>
                            <Card.Img className='Card_Img' variant="top" src={Scheduler} />
                            <Card.Body>
                                <Card.Title>Helping hands </Card.Title>
                                <Button variant="primary" href="https://github.com/mjkonkel/helping-hands">Github link</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </CardGroup>

        </Container >
    );
}
