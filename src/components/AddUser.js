import React, { Component } from "react";
import UserConsumer from "../context";
var uniqid = require("uniqid");


class AddUser extends Component {
  state = {
    visible: false,
    name: "",
    department: "",
    salary: "",
  };
  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  //   changeName = (e) => {
  //     this.setState({
  //       name: e.target.value,
  //     });
  //   };
  //   changeDepartment = (e) => {
  //     this.setState({
  //       department: e.target.value,
  //     });
  //   };
  //   changeSalary = (e) => {
  //     this.setState({
  //       salary: e.target.value,
  //     });
  //   };
  AddUser = (dispatch,e) => {
    e.preventDefault();
    const { name, department, salary } = this.state;
    const newUser = {
      id: uniqid(),
      name,
      department,
      salary,
    };
    dispatch({ type: "ADD_USER", payload: newUser });
  };
  render() {
    const { visible, name, salary, department } = this.state;
    return (
      <UserConsumer>
        {(value) => {
            const {dispatch} = value;
          return (
            <div className="col-md-8 mb-4">
              <button
                onClick={this.changeVisibility}
                className="btn btn-dark btn-block"
              >
                {visible ? "Hide Form" : "Show Form"}
              </button>
              <div className="card">
                <div className="card-header">
                  <h4>Add User Form</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={this.AddUser.bind(this,dispatch)}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="id"
                        placeholder="Enter Name"
                        className="form-control"
                        value={name}
                        onChange={this.changeInput}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="department">Department</label>
                      <input
                        type="text"
                        name="department"
                        id="department"
                        placeholder="Enter department"
                        className="form-control"
                        value={department}
                        onChange={this.changeInput}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="salary">Department</label>
                      <input
                        type="text"
                        name="salary"
                        id="salary"
                        placeholder="Enter salary"
                        className="form-control"
                        value={salary}
                        onChange={this.changeInput}
                      />
                    </div>
                    <button class="btn btn-danger btn-block" type="submit">
                      Add User
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default AddUser;
