import React from 'react';
import { Button, Card } from 'react-bootstrap';
import image from '../../images/mypicture.jpg'
import './About.css'
const About = () => {
    return (
        <div className='card-container'>
            <Card>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>Tahsim Reduwan</Card.Title>
    <Card.Text>
       My goal is to be a professional web developer. and to be a good web developer i will do all the hard work to learn so that i can learn every language of web developing and for that im Planning on doing a certification in MERN stack so I can get into full stack development which I believe is going to be a great career choice for the future.
    </Card.Text>
 <Button variant="primary"><a className='text-white text-decoration-none' href="https://github.com/Reduwan-Nyx">Checkout My Github</a></Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default About;