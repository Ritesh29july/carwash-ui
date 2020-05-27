import React, { Component } from 'react';
import axios from 'axios';


class CarWasher extends Component {
	    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            assign:'',
            status:'',
            id:'',
            message: null,
        }
       
        
        this.reloadUserList = this.reloadUserList.bind(this);
        this.updateDetails = this.updateDetails.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        axios.get("http://localhost:8081/order")
            .then((res) => {
                console.log('order '+res.data)
                this.setState({orders: res.data})
            });
    }

  
	 updateDetails(id){
	 	alert(id)
         var aw = document.getElementById("assign");
				var awresult = aw.options[aw.selectedIndex].text;
		var st = document.getElementById("status");
				var sresult = st.options[st.selectedIndex].text;

         let placeorder = {
            assignWasher: awresult, 
            status: sresult
            };
           		   
        axios.put("http://localhost:8081/order"+"/" + id, placeorder)
            .then(res => {
                this.setState({message : 'Place Oreder updated successfully.'});
                this.props.history.push('/users');
            });
    }
   render() {
        return (
            <div>
                <h2 className="text-center">Washer</h2>
                 <table  className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>#   </th>
                            <th>Name </th>
                            <th>Address  </th>
                            <th>CarPlateNumber   </th>
                            <th>PhoneNumber </th>
                            <th>     ScheduleDate  </th>
                            <th>Description  </th>
                            <th>Washer Status  </th>
                            <th>Washer Name</th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.orders.map(
                        order =>
                                        <tr key={order.orderId}>  
                                         <td>{order.orderId}</td>
                                         <td>{order.name}</td>
                                        <td>{order.address}</td>
                                        <td>{order.carPlateNumber}</td>
                                        <td>{order.contactNumber}</td>
                                        <td>{order.scheduleDate}</td>
                                        <td>{order.description}</td>
                                        <td>
                                         <select id="status" name="status">
											<option value="Accepted">Accepted</option>
  											<option value="Decline">Decline</option>
  											<option value="Completed">Completed</option>
  											<option value="Generated Invoice">Generated Invoice</option>
										</select>	

                                       
                                        </td>

									<td>{order.assignWasher}</td>
                                         <td>
                                            <button className="btn btn-success" onClick={() => this.updateDetails(order.orderId)} style={{marginLeft: '20px'}}> Update</button>
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

export default CarWasher;