import React from 'react'

export default function Alert(props) {
    // ============= For Capitalize 1st word ============
    const cap = (word)=>{
        let lower = word.toLowerCase();
        return lower[0].toUpperCase() + lower.slice(1)
    }
    // ============= For Capitalize 1st word ============
    
  return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show` }role="alert">
            <strong>{cap(props.alert.type)}:</strong> {props.alert.msg}
        </div>
  )
}
