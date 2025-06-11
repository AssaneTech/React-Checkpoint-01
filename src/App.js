import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const firstName = "Assane"; 

function App() {
  return (
    <Container className="mt-5 d-flex flex-column align-items-center">
      <Card style={{ width: '22rem', boxShadow: '0 4px 10px rgba(0,0,0,0.2)', border :'5px solid green' }} className="text-center">
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="mt-3">
        <h4>
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h4>
        {firstName && (
          <img
            src="/images/my_profile.png"
            alt="Profile"
            className="rounded-circle mt-2"
            style ={{height:'150px', border:'2px solid green'}}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
