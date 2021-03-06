import React, {Component} from "react";
import Aux from "../Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount = () => {
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req;
            });
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            });
        }
        componentWillUnmount() {
            console.log('error handler unmounts')
            try{this.requestInterceptor.request.eject(this.requestInterceptor)
            this.responseInterceptor.response.eject(this.responseInterceptor)
            } catch (e) {
                console.log('error handler unmounts, error')
            }
        }

        errorConfirmedHandler = ()=> {
            this.setState({error: null});
        };

        render =() => {
            return (<Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        Oops - an error occurred! (
                        {this.state.error ? this.state.error.message : null} )
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}


export default withErrorHandler