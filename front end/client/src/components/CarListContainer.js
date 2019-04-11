import React, { Component } from 'react';
import './../App.css';

class CarListContainer extends Component {
  
  render() {
    return (
      <div>
        <p>Car List</p>

          {this.props.cars.map(car => {
            return (
              <div>
                <p>{car.make}</p>
                <p>{car.year}</p>
                <p>{car.color}</p>
                <p>{car.price}</p>
                <p>{car.hasSunroof}</p>
                <p>{car.isFourWheelDrive}</p>
                <p>{car.hasLowMiles}</p>
                <p>{car.hasPowerWindows}</p>
                <p>{car.hasNavigation}</p>
                <p>{car.hasHeatedSeats}</p>
              </div>
            );
          })}

      </div>
    );
  }
  
}

CarListContainer.defaultProps = {
  cars:[]
};

export default CarListContainer;