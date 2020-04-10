import React from "react";
import classes from './Input.module.css'

const input = (props) => {
    // console.log(props)
    let inputElement = null;
    switch (props.elementType) {
        case('input'):
            inputElement = <input className={classes.InputElement}
                                  {...props.elementConfig}
                                  onChange={props.changed}
                                  value={props.value}/>
            break;
        case('email'):
            inputElement = <input className={classes.InputElement}
                                  {...props.elementConfig}
                                  onChange={props.changed}
                                  value={props.value}/>
            break;
        case('textarea'):
            inputElement = <textarea className={classes.InputElement}
                                     {...props.elementConfig}
                                     onChange={props.changed}
                                     value={props.value}/>
            break;
        case('select'):
            inputElement = <select className={classes.InputElement}
                                   value={props.value}>
                onChange={props.changed}
                {props.elementConfig.options.map((ele
                    , incx) => (<option
                        key={ele.value}
                        value={ele.value}>
                        {ele.displayValue}
                    </option>
                ))}

            </select>
            break;
        default:
            inputElement = <input className={classes.InputElement}
                                  {...props.elementConfig}
                                  value={props.value}/>
    }


    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input