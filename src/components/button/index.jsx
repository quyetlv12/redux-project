import React from 'react'
import {Link} from 'react-router-dom'
const Button = (props) => {
    return (
       <button className={props.textClass} onClick={props.action}>
       {props.href ?  <Link to={props.href}>
       {props.content}
       </Link> : props.content}
      
      </button>
    )
}

export default Button
