import React from 'react'

const Alert = (props) => {
  return (

    props.alert && <div className={`alert my-3 alert-primary  alert-dismissible fade show`} role="alert">
      <strong>{props.alert.type}</strong> : {props.alert.msg}
    </div>

  )
}

export default Alert
