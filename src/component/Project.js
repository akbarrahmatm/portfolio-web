import {Container, Row, Col, Card, Button, Small} from "react-bootstrap"
import projectImg from "../asset/project/landing-page.jpg"
import swabinImg from "../asset/project/swabin.jpg"
import ciBlog from "../asset/project/ci-blog.jpg"


const LinkRepoLanding = () => {
    window.open("https://github.com/akbarrahmatm/swabin-front-end")
}

const LinkRepoSwabin = () => {
    window.open("https://github.com/akbarrahmatm/landing-page")
}

const LinkRepoBlogCi = () => {
    window.open("https://github.com/akbarrahmatm/simple-ci-blog")
}

const Project = () => {
    return(
        <div>
            <Container className="text-white">
                <h1 className="text-center p-5 sectionTitle">PROJECT</h1>
                <div>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={projectImg} />
                                <Card.Body className="text-dark">
                                    <Card.Title><strong>Landing Page</strong></Card.Title>
                                    <p className="small">HTML | CSS | JavaScript</p>
                                    <Card.Text>
                                    Project ini adalah landing page sederhana dengan fitur darkmode, memiliki link ke sosial media dan profil diri.
                                    </Card.Text>
                                    <Button onClick={LinkRepoLanding} variant="dark">Go To Repository</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={swabinImg} />
                                <Card.Body className="text-dark">
                                    <Card.Title><strong>Swabin Landing Page</strong></Card.Title>
                                    <p className="small">HTML | CSS | JavaScript | Bootstrap</p>
                                    <Card.Text>
                                    Project ini adalah landing page dari sebuah perusahaan fiktif bernama swabin, memiliki beberapa section dan gambar yang menarik.
                                    </Card.Text>
                                    <Button onClick={LinkRepoSwabin} variant="dark">Go To Repository</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={ciBlog} />
                                <Card.Body className="text-dark">
                                    <Card.Title><strong>Simple Codeigniter 4 Blog</strong></Card.Title>
                                    <p className="small">HTML | CSS | Bootstrap | Codeigniter 4</p>
                                    <Card.Text>
                                    Project ini adalah website dinamis yang back-endnya menggunakan Codeigniter 4 dan front-endnya menggunakan bootstrap.
                                    </Card.Text>
                                    <Button onClick={LinkRepoBlogCi} variant="dark">Go To Repository</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Project