import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <Container fluid>
      <Row className='footer justify-content-between align-items-center'>
        <Col>
         <p>Footer</p>
        </Col>
      </Row>
    </Container>
  );
}