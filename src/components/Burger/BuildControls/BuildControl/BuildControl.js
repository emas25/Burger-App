import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
    let removeBtn;
    if(props.disabled) {
        removeBtn = <button disabled
                        className={classes.Less}
                        onClick={props.remove}>Less</button>
    } else {
        removeBtn = <button
                        className={classes.Less}
                        onClick={props.remove}>Less</button>
    }

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            {removeBtn}
            <button
                className={classes.More} 
                onClick={props.add}>More</button>
        </div>
    )
}

export default buildControl;