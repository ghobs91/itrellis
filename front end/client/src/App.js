import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import FormContainer from './components/FormContainer';
import CarListContainer from './components/CarListContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cars: [], 
      filteredCars: [],
      filters: {
        "color": null,
        "hasSunroof": null,
        "isFourWheelDrive": null,
        "hasLowMiles": null, 
        "hasPowerWindows": null,
        "hasNavigation": null, 
        "hasHeatedSeats": null
      }
    };
  }

  async componentDidMount() {
    const carRequest = await axios.get('http://localhost:5000/api/list');
    console.log("carRequest result:" + carRequest.data)
    this.setState({
      cars: carRequest.data,
      filteredCars: carRequest.data
    });
  }

  render() {
    return (
      <div className="App">
        <FormContainer/>
        <CarListContainer cars = {this.state.filteredCars}/>
      </div>
    );
  }

}

export default App;
