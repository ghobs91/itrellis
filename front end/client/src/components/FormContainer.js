import React, { Component } from 'react';
import './../App.css';

class FormContainer extends Component {
  
  render() {
    return (
      <div>
        <p>Form</p>

        <form>
          <label>
            Color
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />

          <label>
          Sunroof
          <input
            name="hasSunroof"
            type="checkbox"
            // checked={this.state.hasSunroof}
            onChange={this.handleInputChange} />
          </label>

          <label>
          4 Wheel Drive
          <input
            name="isFourWheelDrive"
            type="checkbox"
            // checked={this.state.isFourWheelDrive}
            onChange={this.handleInputChange} />
          </label>

          <label>
          Low Miles
          <input
            name="hasLowMiles"
            type="checkbox"
            // checked={this.state.hasLowMiles}
            onChange={this.handleInputChange} />
          </label>

          <label>
          Power Windows
          <input
            name="hasPowerWindows"
            type="checkbox"
            // checked={this.state.hasPowerWindows}
            onChange={this.handleInputChange} />
          </label>
          
          <label>
          Navigation System
          <input
            name="hasNavigation"
            type="checkbox"
            // checked={this.state.hasNavigation}
            onChange={this.handleInputChange} />
          </label>

          <label>
          Heated Seats
          <input
            name="hasHeatedSeats"
            type="checkbox"
            // checked={this.state.hasHeatedSeats}
            onChange={this.handleInputChange} />
          </label>
        </form>

        

      </div>
    );
  }

}

// FormContainer.defaultProps = {

// };

export default FormContainer;