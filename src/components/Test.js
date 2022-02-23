import React, { Component } from 'react';

class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            a:10
        }
        console.log("Constructor");
    }

    componentDidMount() {
        console.log("cdm")
        //Api istekleri
        this.setState({
            a: 20
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component  Did Update")
    }
    
    shouldComponentUpdate() { 
        console.log("Should Component update")
        return false
     }

    render() {
        console.log("Render");
        return (
            <div>
                
            </div>
        );
    }
}

export default Test;