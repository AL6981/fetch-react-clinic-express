import React, { Component } from "react";
import InputField from "../components/InputField";

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bikeMake: "",
      bikeModel: "",
      bikeYear: ""
    };

  }

  handleSubmit(event) {
    event.preventDefault()
    let payload = {
      make: this.state.bikeMake,
      year: parseInt(this.state.bikeYear, 10),
      model: this.state.bikeModel
    }
    this.props.addNewBike(payload)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <InputField
            label="Bike Make"
            name="bikeMake"
            value={this.state.bikeMake}
            handleChange={this.handleChange}
          />
          <InputField
            label="Bike Model"
            name="bikeModel"
            value={this.state.bikeModel}
            handleChange={this.handleChange}
          />
          <InputField
            label="Bike Year"
            name="bikeYear"
            value={this.state.bikeYear}
            handleChange={this.handleChange}
          />
          <input type="submit" className="button" />
        </form>
      </div>
    );
  }
}

export default FormContainer;
