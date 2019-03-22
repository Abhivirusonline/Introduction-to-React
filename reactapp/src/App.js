import React, { Component } from 'react';
import Header from './component/header';
import Main from './component/Main';
import Footer from './component/footer';
import Aside from './component/aside';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state={
            value:0,
        }
    }

    changeCounter=()=>{
        this.setState({
            value: this.state.value+1
        })
    };

  render() {
    return (
        <div className="App">
          <Header count={this.state.value}/>
          <Aside/>
          <Main changeCounter={this.changeCounter}/>
          <Footer/>
        </div>


    );
  }
}

export default App;
