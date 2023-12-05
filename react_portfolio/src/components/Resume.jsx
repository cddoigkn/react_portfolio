import { Container, Row, Col } from 'react-bootstrap'

export default function Resume() {
  return (
    <Container fluid>
      <Row className='justify-content-between align-items-center'>
        <Col>
         <p>Resume here.</p>
        </Col>
      </Row>
    </Container>
  );
}