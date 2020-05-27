import React, { Component } from 'react'
import axios from 'axios';

class Customer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        axios.get("http://localhost:8080/customer")
            .then((res) => {
                console.log('customer '+res.data)
                this.setState({customers: res.data})
            });
    }

    deleteUser(userId) {
         axios.delete("http://localhost:8080/customer"+ "/" + userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({customers: this.state.customers.filter(user => user.id !== userId)});
           })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Customer Details</h2>
                <button className="btn btn-danger" style={{width:'150px'}} onClick={() => this.addUser()}> Add Customer</button>
                
                <table  className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>ID   </th>
                            <th>Name </th>
                            <th>Address  </th>
                            <th>City   </th>
                            <th>Phone Number </th>
                            <th>Active  </th>
                            <th></th>
                             <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.customers.map(
                        customer =>
                                        <tr key={customer.customerId}>  
                                         <td>{customer.customerId}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.city}</td>
                                        <td>{customer.phoneNumber}</td>
                                        <td>{customer.active}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteUser(customer.customerId)}> Delete</button>
                                            </td>
                                            <td>
                                            <button className="btn btn-success" onClick={() => this.editUser(customer.customerId)} style={{marginLeft: '20px'}}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default Customer;