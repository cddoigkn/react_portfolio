import { Container, Row, Col, Carousel } from 'react-bootstrap'
import Halfofsvg from '../img/halfofsvg.png';
import Redhalfsvg from '../img/redhalfsvg.png'
import "bootstrap/dist/css/bootstrap.css";


export default function Portfolio() {
  return (
    <Container fluid>
      <Row className='justify-content-between align-items-center'>
        <Col>
          <Carousel>
            <Carousel.Item>
                <h3>My Work with SVG</h3>
<img src={Halfofsvg}/> <img src={Redhalfsvg}/>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}