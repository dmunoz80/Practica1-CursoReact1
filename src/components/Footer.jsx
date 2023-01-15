import React from 'react'

const Footer = (props) => {
    const {desc} = props;
    return <h2 className='footer'>{desc}</h2>;
};

export default Footer;