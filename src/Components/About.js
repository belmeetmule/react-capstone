import React from 'react';
import Card from 'react-bootstrap/Card';

const About = () => (
  <div className="about-style" style={{ display: 'flex', justifyContent: 'center', margin: '30px' }}>
    <Card style={{ width: '40rem' }}>
      <h2 style={{ margin: '10px' }}>
        Our contacts
      </h2>
      <Card.Text style={{ margin: '15px' }}>
        <span className="stats">
          email: belmeetmule@gmail.com
          <br />
          {}
        </span>
        <span className="stats">
          website:
          {' '}
          <a href="https://belmeetmule.github.io/My-Portfolio/">www.belmeetmule.github.io/My-Portfolio</a>
          <br />
          {}
        </span>
      </Card.Text>

    </Card>
  </div>
);

export default About;
