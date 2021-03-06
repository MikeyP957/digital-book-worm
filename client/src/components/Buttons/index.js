import React from "react";
import "./style.css";
import Buton from 'react-bootstrap'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      Delete
    </span>
  );
}
export function ViewBtn(props) {
  return (
    <span className="view-btn" {...props} role="button" tabIndex="0">
      View
    </span>
  );
}
export function SaveBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
      Save
    </span>
  );
}


