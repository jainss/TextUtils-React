import React from 'react';

function Alerts(props) {
    const capitialize=(word)=>{
        const val=word.toLowerCase();
        return val.charAt(0).toUpperCase() + val.slice(1);
    }
  return (
  props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitialize(props.alert.type)}</strong>: {props.alert.msg}
 </div>
  )
}

export default Alerts;
