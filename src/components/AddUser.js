import React, { Component } from "react";

class AddUser extends Component {
  state = {
    visible: false,
  };
  changeVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <button onClick={this.changeVisibility} className="btn btn-dark btn-block">
          {visible ? "Hide Form" : "Show Form"}
        </button>
        <div className="card">
          <div className="card-header">
            <h4>Add User Form</h4>
          </div>
          <div className="card-body">
            <form action="">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="id"
                  placeholder="Enter Name"
                  className="form-control"
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
  }
}

export default AddUser;
