import { Container, Row, Col } from 'react-bootstrap'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/Contact.css'

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ejsuqqe', 'template_0mw6pik', form.current, 'Xv12kKXdI-_SFF7BI')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>Hello, feel free to enter in your name, along with your email and a brief message to send to me if you're interested in acquiring my services!</h3>
          <form className='formField' ref={form} onSubmit={sendEmail}>
            <div className='sendArea'>
              <div className='sendCol'>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
              </div>
              <div className='sendCol'>
                <label>Message</label>
                <textarea className="message" />
              </div>
            </div>
            <div className="sendArea"><input className='send' type="submit" value="Send" /></div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};