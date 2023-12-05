import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { validateEmail } from '../utils/helper';
import '../style/Contact.css'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    setName('');
    setEmail('');
    setMessage('');
  };
    return (
      <Container fluid>
        <Row className='justify-content-between align-items-center'>
          <Col>
          <h3>Hello, feel free to enter in your name, along with your email and a brief message to send to me if you're interested in acquiring my services!</h3>
      <form className="form" onSubmit={handleFormSubmit}>
        
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
          </Col>
        </Row>
      </Container>
    );
  }