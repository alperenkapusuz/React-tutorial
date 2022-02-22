// import React,{Component} from "react";

// const UserContext = React.createContext();
// Provider(Sağlayıcı), Consumer(Tuketıcı)

import React, { Component } from "react";
const UserContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id)
      };
    case "ADD_USER":
      return{
        ...state,
        users: [...state.users,action.payload]
      }
    default:
      return state
  }
};

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: "unique-1",
        name: "Alperen Kapusuz",
        salary: "10000",
        department: "Bilişim",
      },
      {
        id: "unique-2",
        name: "Sefa Kapusuz",
        salary: "5000",
        department: "Elektrik",
      },
      {
        id: "unique-3",
        name: "İrfan Kapusuz",
        salary: "7000",
        department: "Emekli",
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
      
    );
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
