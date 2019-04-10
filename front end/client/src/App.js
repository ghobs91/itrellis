import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import FormContainer from './components/FormContainer';
import CarListContainer from './components/CarListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormContainer/>
        <CarListContainer/>
      </div>
    );
  }
}

export default App;
