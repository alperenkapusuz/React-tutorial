import React, { Component } from "react";
import "./App.css";
import Users from "./components/Users";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import Test from "./components/Test";

class App extends Component {
  // state = {
  //   users: [
  //     {
  //       id: 1,
  //       name: "Alperen Kapusuz",
  //       salary: "10000",
  //       department: "Bilişim",
  //     },
  //     {
  //       id: 2,
  //       name: "Sefa Kapusuz",
  //       salary: "5000",
  //       department: "Elektrik",
  //     },
  //     {
  //       id: 3,
  //       name: "İrfan Kapusuz",
  //       salary: "7000",
  //       department: "Emekli",
  //     },
  //   ],
  // };

  render() {
    return (
      <div className="container">
        <Test test="deneme"/>
        <Navbar title="User App" />
        <hr />
        <AddUser/>
        <Users />
      </div>
    );
  }
}

export default App;
