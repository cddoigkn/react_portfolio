import { Container, Row, Col } from 'react-bootstrap'

export default function AboutMe() {
  return (
    <Container fluid>
      <Row className='justify-content-between align-items-center'>
        <Col>
        <a ><img src="./img/me.jpg" width="300px" height="375px" /></a>
         <p>Hey there, my name's Casey Doig and welcome to my portfolio! Growing up in a small town in Minnesota, I always greatly enjoyed working with others to accomplish goals, no matter how large or small the project. One of my favorite interests over time was actually the human brain and the emotions tied to it, and I ended up going to Hamline University in St. Paul, Minnesota, becoming a Psychology major. In an unforseen turn of events, Covid-19 struck as soon as I graduated from there and I ended up in quarantine for quite some time, and I ended up turning my passion over to something that I have always loved as well in my life: computers! I was always something of a nerd growing up, and I played plenty of video games on whatever console I could get my hands on, now, armed with nothing but time, debt, and a whole lot of passion to learn, I have set my sights on becoming a wonderful developer, first through a Full Stack Web Development bootcamp at the University of Minnesota, being taught by the wonderful <a href="https://garytalmes.com/">Gary Almes</a> on how to properly code my way into the field of both front and back end development in computers!</p>
        </Col>
      </Row>
    </Container>
  );
}