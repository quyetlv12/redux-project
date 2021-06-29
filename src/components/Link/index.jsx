import React from 'react'
import {Link} from 'react-router-dom';
const LinkHref = ({children},props) => {
    return (
        <Link to={props.link}>{children}</Link>
    )
}

export default LinkHref
