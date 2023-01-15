import React from 'react'
import Button from 'react-bootstrap/Button'

const Footer = (props) => {
    const {desc} = props;
    return (
        <>
        <footer>{desc} </footer>;
        <Button variant="outline-success">COWABUNGA</Button>
        </>
    );
};

export default Footer;