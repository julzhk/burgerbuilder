import React from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import {Route, Switch} from "react-router-dom";
import ContactData from "./containers/Checkout/contactData/contentData";

function App() {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path='/checkout/contact-data' component={ContactData}/>
                    <Route exact path='/checkout' component={Checkout}/>
                    <Route exact path='/' component={BurgerBuilder}/>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
