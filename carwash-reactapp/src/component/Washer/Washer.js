import React, { Component } from 'react'
import axios from 'axios';

class Washer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            washers: [],
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
        axios.get("http://localhost:8082/washer")
            .then((res) => {
                console.log('washer '+res.data)
                this.setState({washers: res.data})
            });
    }

    deleteUser(userId) {
         axios.delete("http://localhost:8082/washer"+ "/" + userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({washers: this.state.washers.filter(user => user.id !== userId)});
           })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-washer');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-washer');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Washer Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addUser()}> Add Washer</button>
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
                        this.state.washers.map(
                        washer =>
                                        <tr key={washer.washerId}>  
                                         <td>{washer.washerId}</td>
                                        <td>{washer.name}</td>
                                        <td>{washer.address}</td>
                                        <td>{washer.city}</td>
                                        <td>{washer.phoneNumber}</td>
                                        <td>{washer.active}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteUser(washer.washerId)}> Delete</button>
                                            </td>
                                            <td>
                                            <button className="btn btn-success" onClick={() => this.editUser(washer.washerId)} style={{marginLeft: '20px'}}> Edit</button>
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

export default Washer;