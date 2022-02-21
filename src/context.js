// import React,{Component} from "react";

// const UserContext = React.createContext();
// Provider(Sağlayıcı), Consumer(Tuketıcı)

import React, { Component } from "react";
const UserContext = React.createContext();

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Alperen Kapusuz",
        salary: "10000",
        department: "Bilişim",
      },
      {
        id: 2,
        name: "Sefa Kapusuz",
        salary: "5000",
        department: "Elektrik",
      },
      {
        id: 3,
        name: "İrfan Kapusuz",
        salary: "7000",
        department: "Emekli",
      },
    ],
  };
  render() {
    return(
    <UserContext.Provider value={this.state}>
        {this.props.children}
    </UserContext.Provider>
    )
     
  }
}

const UserConsumer = UserContext.Consumer;

export  default UserConsumer;
