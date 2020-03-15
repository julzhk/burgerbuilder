import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const klasses = classes

class Layout extends Component {
    state = {
        showSideDrawer : true
    }
    sideDrawClosedHandler = () =>{
        this.setState({showSideDrawer:false})
    }
    render() {
        return (
            <Aux>
            <Toolbar />
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawClosedHandler} />
            <div>
                Toolbar / SideDrawer / Backdrop
            </div>
            <main className="Content">
                {this.props.children}
            </main>
        </Aux>
        )
}
}

export default Layout;