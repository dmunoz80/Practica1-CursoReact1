import React from 'react'
import Button from 'react-bootstrap/Card';

const Footer = (props) => {
    const {desc} = props;
    return (
        <>
        <footer>{desc} </footer>;
        <Button variant="dark">Primary</Button>
        </>
    );
};

export default Footer;