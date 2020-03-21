import React, {Component} from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

const klasses = classes
class Modal extends Component  {
    // can use a pure component for
    shouldComponentUpdate(nextProps, nextState) {
        return(nextProps.show !== this.props.show || nextProps.children !== this.props.children)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('modal updated!')
    }

    render() {
    return (
        <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div className='Modal'
             style={{
                 transform: this.props.show ? 'translateY(0)':'translateY(-200vh)'
             }} >
            {this.props.children}
        </div>
            </Aux>
    )
}
}


export default Modal