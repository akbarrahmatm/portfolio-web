import {Container, Col, Row, Button} from "react-bootstrap"
import userimg from "../asset/img/user.jpg"


const Intro = () => {
    return(
        <div className="text-center d-flex justify-content-center align-items-center  text-white introContent">
        <Container className="">
          <Row>
            <Col>
              <img className="rounded-circle myImage" src={userimg}></img>
              <h1>Akbar Rahmat Mulyatama</h1>
              <h3>Student & Junior Web Developer</h3>
              <Button href="#project" className="buttonIntro" variant="light">My Project</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro