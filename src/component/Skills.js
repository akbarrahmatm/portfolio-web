import {Container, Row, Col, Card} from "react-bootstrap"

import pythonImg from "../asset/skill/python.jpg"
import javaImg from "../asset/skill/java.jpg"
import phpImg from "../asset/skill/php.jpg"
import javascriptImg from "../asset/skill/javascript.jpg"
import codeigniterImg from "../asset/skill/codeigniter.jpg"
import laravelImg from "../asset/skill/laravel.jpg"
import bootstrapImg from "../asset/skill/bootstrap.jpg"
import reactImg from "../asset/skill/react.jpg"
import windowsImg from "../asset/skill/windows.jpg"
import linuxImg from "../asset/skill/linux.jpg"
import officeImg from "../asset/skill/office.jpg"
import photoshopImg from "../asset/skill/photoshop.jpg"
import premiereImg from "../asset/skill/premiere.jpg"
import figmaImg from "../asset/skill/figma.jpg"

const Skills = () => {
    return(
        <div>
            <Container className="text-light">
                <h1 className="text-center p-5 sectionTitle">SKILLS</h1>
                <div>
                <h4 className="subSectionTitle">Programming Language</h4>
                    <div className="cardSkill">
                        <Row>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={pythonImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>Python</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={phpImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>PHP</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={javaImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>Java (Object-Oriented) </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={javascriptImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>JavaScript </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div>
                    <h4 className="subSectionTitle">Framework</h4>
                    <div className="cardSkill">
                        <Row>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={codeigniterImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>Codeigniter (3 & 4)</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={bootstrapImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>Bootstrap</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={laravelImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>Laravel</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={reactImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>React JS </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <h4 className="subSectionTitle">Operating System</h4>
                        <div className="cardSkill">
                        <Row>
                            <Col md={3}>

                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={windowsImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>Windows</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={linuxImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>Linux (Debian & Ubuntu)</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>

                            </Col>
                        </Row>
                        </div>

                    </div>
                    <div>
                        <h4 className="subSectionTitle">Other Skills</h4>
                        <div className="cardSkill">
                        <Row>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={photoshopImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>Adobe Photoshop</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={premiereImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>Adobe Premiere Pro</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={officeImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>Microsoft Office </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Img variant="top" className="skillCardImg" src={figmaImg} />
                                    <Card.Body className="text-dark">
                                        <Card.Title>Figma </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        </div>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Skills