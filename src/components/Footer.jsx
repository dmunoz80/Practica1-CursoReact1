import React from 'react'
import Button from 'react-bootstrap/Button'

const Footer = (props) => {
    const {desc} = props;
    return (
        <>
        <footer>{desc}
        <Button variant="primary">COWABUNGA</Button>  
        </footer>

        </>
    );
};

export default Footer;