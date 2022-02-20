import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  state = {
    isVisible : false
  }
  //Destructing
  static defaultProps = {
    name: "bilgi yok",
    salary: "bilgi yok",
    department: "bilgi yok",
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isVisible: false,
  //   };
  // }

  // constructor(props){
  //   super(props);
  //   this.onClickEvent = this.onClickEvent.bind(this);
  // }

  onClickEvent = (e) => {
    this.setState({
      isVisible : !this.state.isVisible
    })
    
  }

  render() {
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick={this.onClickEvent}>{name}</h4>
            <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
          </div>
          {isVisible ? (
            <div className="card-body">
              <p className="card-text">Maas : {salary}</p>
              <p className="card-text">Department : {department}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
};

User.defaultProps = {};

export default User; /* Başka classlarda kullanılmak için export edildi*/
