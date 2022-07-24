import React from 'react'
import { Link } from 'react-router-dom'
import tick from '../../assets/tick-96.png'
import ReactDom from 'react-dom'

function Modal({ show, handleClose }) {
    if (!show) return null;

    return ReactDom.createPortal(
        <div className="modal">
            <div className="overlay">
            </div>
            <div className="modal-content">
                <img src={tick} alt="" />
                <h2>Project Added Succesfully</h2>
                <Link onClick={handleClose} to="/">Ok</Link>
            </div>
        </div>
    ,document.getElementById("modal"));
}

export default Modal