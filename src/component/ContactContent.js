import {Container, Col, Row, Button} from "react-bootstrap"
import {
    faGithub,
    faInstagram,
    faTwitter,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const igLink = () => {
    window.open("https://instagram.com/akbarrahmatm");
}

const twitterLink = () => {
    window.open("https://twitter.com/AkbarRahmatM");
}

const emailLink = () => {
    window.open("mailto:akbarrahmatm@gmail.com");
}

const linkedInLink = () => {
    window.open("https://www.linkedin.com/in/akbar-rahmat-mulyatama-b03894219/");
}

const githubLink = () => {
    window.open("https://github.com/akbarrahmatm");
}

const ContactContent = () => {
    return (
        <div>
        <div className="text-center d-flex justify-content-center align-items-center  text-white contactContent">
            <Container className="">
            <Row>
                <Col>
                <h1>Hit Me Up !</h1>
                <Button className="buttonIntro mx-2" variant="light" onClick={igLink}><FontAwesomeIcon icon={faInstagram} /> Instagram</Button>
                <Button className="buttonIntro mx-2" variant="light" onClick={linkedInLink}><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</Button>
                <Button className="buttonIntro mx-2" variant="light" onClick={emailLink}><FontAwesomeIcon icon={faEnvelope} /> Email</Button>
                <Button className="buttonIntro mx-2" variant="light" onClick={githubLink}><FontAwesomeIcon icon={faGithub} /> Github</Button>
                <Button className="buttonIntro mx-2" variant="light" onClick={twitterLink}><FontAwesomeIcon icon={faTwitter} /> Twitter</Button>
                </Col>
            </Row>
            </Container>
        </div>
        </div>
    )
}

export default ContactContent