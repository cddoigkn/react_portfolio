import { Container, Row, Col } from 'react-bootstrap'

export default function Resume() {
  return (
    <Container fluid>
      <Row className='justify-content-between align-items-center'>
        <Col className='d-flex justify-content-center'>
         <p><a href="./assets/CaseyDoigResume.docx"><h1>Click these words to download my resume!</h1></a></p>
        </Col>
      </Row>
    </Container>
  );
}