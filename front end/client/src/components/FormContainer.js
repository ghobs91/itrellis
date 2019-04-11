import React, { Component } from 'react';
import './../App.css';

class FormContainer extends Component {

  handleColorChange(event) {
    // this.setState({filters["color"]: event.target.value});
  }

  handleSunroofChange(event) {
    this.setState({value: event.target.value});
  }

  handle4WDChange(event) {
    this.setState({value: event.target.value});
  }

  handleLowMilesChange(event) {
    this.setState({value: event.target.value});
  }

  handleWindowsChange(event) {
    this.setState({value: event.target.value});
  }

  handleNavigationChange(event) {
    this.setState({value: event.target.value});
  }

  handleSeatsChange(event) {
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
      <div>
        <p>Form</p>

        <form>
          <label>
            Color
            <input
            name="color"
            type="text"
            onChange={this.handleColorChange} />
          </label>

          <label>
          Sunroof
          <input
            name="hasSunroof"
            type="checkbox"
            // checked={this.state.hasSunroof}
            onChange={this.handleSunroofChange} />
          </label>

          <label>
          4 Wheel Drive
          <input
            name="isFourWheelDrive"
            type="checkbox"
            // checked={this.state.isFourWheelDrive}
            onChange={this.handle4WDChange} />
          </label>

          <label>
          Low Miles
          <input
            name="hasLowMiles"
            type="checkbox"
            // checked={this.state.hasLowMiles}
            onChange={this.handleLowMilesChange} />
          </label>

          <label>
          Power Windows
          <input
            name="hasPowerWindows"
            type="checkbox"
            // checked={this.state.hasPowerWindows}
            onChange={this.handleWindowsChange} />
          </label>
          
          <label>
          Navigation System
          <input
            name="hasNavigation"
            type="checkbox"
            // checked={this.state.hasNavigation}
            onChange={this.handleNavigationChange} />
          </label>

          <label>
          Heated Seats
          <input
            name="hasHeatedSeats"
            type="checkbox"
            // checked={this.state.hasHeatedSeats}
            onChange={this.handleSeatsChange} />
          </label>
        </form>

      </div>
    );
  }

}

// FormContainer.defaultProps = {

// };

export default FormContainer;