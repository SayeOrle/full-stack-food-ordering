import React from 'react'

function Title(props) {
  return (
    <div className={props.addClass +" font-logoFont font-bold"} >{props.children}</div>
  )
}

export default Title