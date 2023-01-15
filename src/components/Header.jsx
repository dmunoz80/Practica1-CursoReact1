import React from 'react'

const Header = (props) => {
    const {title, subtitle} = props;
    return (
        <>
<div className='header'>
        <h1> {title}</h1>
        <h3>{subtitle}</h3>
</div>
        </>
    );
};

export default Header;