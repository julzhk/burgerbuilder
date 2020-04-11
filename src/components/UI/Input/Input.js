import React from "react";
import classes from './Input.module.css'

const input = (props) => {
    // console.log(props)
    let inputClasses = [classes.InputElement]
    let inputElement = null;
    if (!props.valid && props.touched) {
        inputClasses.push(classes.Invalid)
    }
    switch (props.elementType) {
        case('input'):
            inputElement = <div>
                {props.valid ? 'valid' : 'invalid'}
                <input className={inputClasses.join(' ')}
                       {...props.elementConfig}
                       onChange={props.changed}
                       value={props.value}/>
            </div>
            break;
        case('email'):
            inputElement = <div>
                {props.valid ? 'valid' : 'invalid'}
                <input className={inputClasses.join(' ')}
                       {...props.elementConfig}
                       onChange={props.changed}
                       value={props.value}/>
            </div>
            break;
        case('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')}
                                     {...props.elementConfig}
                                     onChange={props.changed}
                                     value={props.value}/>
            break;
        case('select'):
            inputElement = <select className={inputClasses.join(' ')}
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