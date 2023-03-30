import React from 'react'

const Alert = (props) => {
  return ( 
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible`}>
      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>      
      {props.alert.msg}
    </div> 
  )
}

export default Alert