import React from 'react'

import Card from 'react-bootstrap/Card';

const Tarjeta = (props) => {
    const {title, description, photo} = props;
  
    return (
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Tarjeta;