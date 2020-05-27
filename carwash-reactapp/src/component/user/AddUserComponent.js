import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import axios from 'axios';

class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
            address: '',
            city: '',
            phone: '',
            active: '',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let customer = {
            name: this.state.name, 
             address: this.state.address, 
            city: this.state.city, 
            phoneNumber: this.state.phone,
             active : 'active' };

      axios.post("http://localhost:8080/customer", customer)
            .then(res => {
                this.setState({message : 'Customer added successfully.'});
                this.props.history.push('/users');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add User</h2>
                <form>
                <div className="form-group">
                    <label>Customer Name:</label>
                    <input type="text" placeholder="name" name="name" className="form-control" value={this.state.username} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" placeholder="address" name="address" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>City :</label>
                    <input placeholder="city" name="city" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>phone:</label>
                    <input type="text" placeholder="phone" name="phone" className="form-control" value={this.state.age} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Active:</label>
                    <input type="text" placeholder="active" name="active" className="form-control" value={this.state.salary} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddUserComponent;