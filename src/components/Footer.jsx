import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <Container fluid>
      <Row className='footer justify-content-between align-items-center'>
        <Col>
         <a href="https://github.com/cddoigkn"><img src="./img/github-logo.png" width="50px" height="50px" /> My GitHub!</a>
         <a href="https://www.linkedin.com/in/caseydoig/"><img src="./img/linkedin.png" width="50px" height="50px"/> My LinkedIn!</a>
         <p>Last updated 2023.</p>
        </Col>
      </Row>
    </Container>
  );
}