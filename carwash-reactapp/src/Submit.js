import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import axios from 'axios';

class Submit extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = { 
	  	postId: null,
	  	date: null
	  };
	  this.submitbooking = this.submitbooking.bind(this);
	  this.dateChanged = this.dateChanged.bind(this);
      this.clear = this.clear.bind(this);
	}
  dateChanged(d){
    this.setState({date: d});
  }

  clear(){
      this.setState({date: null});
  }	

	submitbooking() {

		console.log('button clicked');
		console.log('this.name.value'+this.name.value);
		console.log('this.name.value'+this.address.value);
		console.log('this.name.value'+this.plateNumber.value);

		console.log('this.name.value'+this.mobile.value);
		console.log('this.name.value'+this.description.value);
		console.log('ScheduleDate'+this.ScheduleDate.value);
			
		let placeOrder = {name: this.name.value, address: this.address.value, 
			carPlateNumber: this.plateNumber.value, contactNumber: this.mobile.value,
			 scheduleDate: this.ScheduleDate.value, description: this.description.value};
		axios.post("http://localhost:8081/order",placeOrder)
		.then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/');
            });

		let customer = {name: this.name.value, address: this.address.value, 
			city: this.city.value, phoneNumber: this.mobile.value, active : 'active' };
		axios.post("http://localhost:8080/customer",customer)
		.then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/');
            });

	}

	render() {
		return (
			<div className="row">
				<div className="col-xs-5 col-sm-5">
				<form>
					  <div className="form-group">
					    <label htmlFor="name">Name</label>
					    <input type="text" 
					    				ref={(input) => {this.name = input;}}
					    				className="form-control" 
					    				id="name" 
					    				placeholder="Enter the name" />
					  </div>
					  <div className="form-group">
					    <label htmlFor="address">Address</label>
					    <input type="text" 
					    				ref={(input) => {this.address = input;}}
					    				className="form-control" 
					    				id="address" 
					    				placeholder="Enter the address" />
					  </div>
					<div className="form-group">
					    <label htmlFor="city">City</label>
					    <input type="text" 
					    				ref={(input) => {this.city = input;}}
					    				className="form-control" 
					    				id="city" 
					    				placeholder="Enter the city" />
					  </div>

					  <div className="form-group">
					    <label htmlFor="plateNumber">Car Plate Number</label>
					    <input type="text" 
					    				ref={(input) => {this.plateNumber = input;}}
					    				className="form-control" 
					    				id="plateNumber" 
					    				placeholder="Enter the Car Plate Number" />
					  </div>

					  <div className="form-group">
					    <label htmlFor="mobile">Contact Number</label>
					    <input type="text" 
					    				ref={(input) => {this.mobile = input;}}
					    				className="form-control" 
					    				id="mobile" 
					    				placeholder="Enter the Mobile Number" />
					  </div>
					{
						/* start Commented 
									<div className="form-group">
								    <label htmlFor="mobile">Wash Now</label>
								    <input type="text" 
								    				ref={(input) => {this.washnow = input;}}
								    				className="form-control" 
								    				id="washnow" 
								    				placeholder="Enter the washnow" />
								  </div>
								  <div className="form-group">
								    <label htmlFor="mobile">Wash Now</label>
								    <DatePicker selected={this.state.date}

			                  	  onChange={this.dateChanged} />
			       				 <input type="button" onClick={this.clear} value="Clear"/>
								  </div>
					  End Commented */
					}



			<Form.Group controlId="ScheduleDate">
              <Form.Label>ScheduleDate</Form.Label>
              <Form.Control
              ref={(input) => {this.ScheduleDate = input;}}
                type="date"
                name="ScheduleDate"
                required
                placeholder="ScheduleDate"
               />
              </Form.Group>
					  <div className="form-group">
					    <label htmlFor="description">Description</label>
					    <textarea className="form-control" 
					    id="description" 
					    ref={(input) => {this.description = input;}}
					    placeholder="Enter a brief description" />
					  </div>
				  
					  <button type="button" onClick={this.submitbooking} className="btn btn-default">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Submit;