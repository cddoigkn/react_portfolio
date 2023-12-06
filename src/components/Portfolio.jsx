import { Container, Row, Col } from 'react-bootstrap'

export default function Portfolio() {
  return (
    <Container fluid>
      <Row className='justify-content-between align-items-center'>
        <Col>
         <p>Projects go here</p>
        </Col>
      </Row>
    </Container>
  );
}