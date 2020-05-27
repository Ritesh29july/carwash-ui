import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import axios from 'axios';

class EditWasher extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
            address: '',
            city: '',
            phone: '',
            active: '',
        }
        this.saveUser = this.saveUser.bind(this);
        this.loadUser = this.loadUser.bind(this);
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser() {
        axios.get("http://localhost:8082/washer/"+window.localStorage.getItem("userId"))
             .then((res) => {
                let customer = res.data;
                this.setState({
                id: customer.id,
                name: customer.name,
                address: customer.address,
                phone: customer.phoneNumber,
                city: customer.city,
                active: customer.active,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveUser = (e) => {
         e.preventDefault();

        let customer = {
            address: this.state.address, 
            name: this.state.name, 
            city: this.state.city, 
            phoneNumber: this.state.phone,
            active : 'active' };

        axios.put("http://localhost:8082/washer"+"/" + window.localStorage.getItem("userId"), customer)
            .then(res => {
                this.setState({message : 'Customer added successfully.'});
                this.props.history.push('/users');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Washer</h2>
                <form>

                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" placeholder="username" name="name" className="form-control" readOnly="true" defaultValue={this.state.name}/>
                    </div>

                    <div className="form-group">
                        <label>Address :</label>
                        <input placeholder="address" name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>City:</label>
                        <input placeholder="City" name="city" className="form-control" value={this.state.city} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Phone:</label>
                        <input type="text" placeholder="phone" name="phone" className="form-control" value={this.state.phone} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Active:</label>
                        <input type="text" placeholder="active" name="active" className="form-control" value={this.state.active} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditWasher;