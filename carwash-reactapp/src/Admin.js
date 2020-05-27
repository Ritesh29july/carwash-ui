import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Navigation} from './Navigation';
import Customer from "./component/user/Customer";
import AddUserComponent from "./component/user/AddUserComponent";
import EditUserComponent from "./component/user/EditUserComponent";
import orderManagament from "./orderManagament";
import Washer from "./component/Washer/Washer";
import AddWasher from "./component/Washer/AddWasher";
import EditWasher from "./component/Washer/EditWasher";



class Admin extends Component {
	
    render(){
        return(
        
   	   <div className="container">
           <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}></h1>
                   <Navigation/>
                <Switch>
                       <Route path="/" exact component={Customer} />
                      <Route path="/customer" component={Customer} />
                      <Route path="/add-user" component={AddUserComponent} />
                      <Route path="/edit-user" component={EditUserComponent} />
                      <Route path="/washer" component={Washer} />
                      <Route path="/add-washer" component={AddWasher} />
                      <Route path="/edit-washer" component={EditWasher} />

                      <Route path="/orderManagament" component={orderManagament} />
                      
                  </Switch>
                </div>
        </Router>
      </div>

       );
    }
}
const style = {
    color: 'red',
    margin: '10px'
}

export default Admin;