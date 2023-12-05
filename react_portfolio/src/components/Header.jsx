// import '../style/Header.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Header() {
  return (
    <Container fluid>
      <Row className='justify-content-between align-items-center'>
        <Col>
          <h1>The Works of Casey Doig</h1>
        </Col>
        <Col>
          <Container fluid>
            <Row className='justify-content-end'>
              <Col><a href='/'>About Me</a></Col>
              <Col><a href='/projects'>Projects</a></Col>
              <Col><a href='/contact'>Contact</a></Col>
              <Col><a href='/resume'>Resume</a></Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}