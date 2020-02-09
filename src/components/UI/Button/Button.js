import React from 'react'
import classes from './Button.module.css'

const button = (props) => (
    <button
<<<<<<< HEAD
        disabled={props.disabled}
=======
>>>>>>> a5722f90856dacd2fff63f7375f1f2d1246f7f9d
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;