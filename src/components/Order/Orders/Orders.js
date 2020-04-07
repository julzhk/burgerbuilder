import React, {Component} from "react";
import Order from "../Order";
import axios from "../../../axios-orders";
import withErrorHandler from "../../../hoc/withErrorHandler/WithErrorHandler";


class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/orders.json').then((res => {
            console.log(res.data)
            let fetchedData = []
            for (let key in res.data) {
                fetchedData.push({...res.data[key], id: key})
            }
            this.setState({orders: fetchedData, loading: false})

        })).catch((err) => {
            console.log(err)
        }).finally(
            this.setState({loading: false})
        )
    }

    render() {
        return (
            <div>
                {this.state.orders.map((order) => {
                    return(<Order ingredients= {order.ingredients} price={+(order.price)} key={order.id}/>)
                })}
            </div>

        )
    }
}

export default withErrorHandler(Orders, axios)