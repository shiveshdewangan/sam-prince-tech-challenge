import React, { Component } from "react";
import { getAge, isValidAge, isValidName } from "./utils/utils";
import TextInputField from "./TextInputField";
import DateInputField from "./DateInputField";
import DropdownField from "./DropdownField";
import PhoneInputField from "./PhoneInputField";
import schema from "./schema";

class App extends Component {
  state = {
    name: "",
    birth_date: "",
    gender: "",
    home_phone: "",
    mobile_phone: "",
    guardian_consent: "",
    guardian_name: "",
    guardian_number: "",
    invalid_name: false,
    invalid_dob: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Set errors to default state
    this.setState({
      invalid_dob: false,
      invalid_name: false
    });

    // Validate name
    if (!isValidName(this.state.name)) {
      this.setState({
        invalid_name: true
      });
      return;
    }

    // Validate age
    if (!isValidAge(getAge(this.state.birth_date))) {
      this.setState({
        invalid_dob: true
      });
      return;
    }

    const {
      name,
      bday,
      gender,
      mobile_phone,
      home_phone,
      guardian_name,
      guardian_number
    } = this.state;
    const result = {
      name,
      bday,
      gender,
      contact: [
        { type: "mobile", value: mobile_phone },
        { type: "home", value: home_phone }
      ],
      guardian: {
        name: guardian_name,
        contact: guardian_number
      }
    };
    console.log("result", result);
    alert(JSON.stringify(result));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {schema.map(({ name, label, type, options }) => {
            // Handle type = "text" and name = "name" or name ="guradian_name"
            if (type === "text") {
              if (name === "name") {
                return (
                  <>
                    <TextInputField
                      name={name}
                      label={label}
                      type={type}
                      required={true}
                      handleChange={this.handleChange}
                      value={this.state.name}
                    />
                    {this.state.invalid_name ? (
                      <div className="error">
                        First and Last Name must be separated by a space.
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                );
              }
              if (name === "guardian_name") {
                return (
                  <>
                    <TextInputField
                      name={name}
                      label={label}
                      type={type}
                      required={this.state.guardian_consent === "Yes"}
                      handleChange={this.handleChange}
                      value={this.state.guardian_name}
                    />
                  </>
                );
              }
            }
            // Handle type = "date"
            if (type === "date") {
              return (
                <>
                  <DateInputField
                    name={name}
                    label={label}
                    type={type}
                    required={true}
                    handleChange={this.handleChange}
                    value={this.state.birth_date}
                  />
                  {this.state.invalid_dob ? (
                    <div className="error">
                      Age must be greater than 18 years
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            }
            // Handle type = "select"
            if (type === "select") {
              if (name === "gender") {
                return (
                  <DropdownField
                    name={name}
                    type={type}
                    label={label}
                    options={options}
                    handleChange={this.handleChange}
                    value={this.state.gender}
                  />
                );
              }
              if (name === "guardian_consent") {
                return (
                  <DropdownField
                    name={name}
                    type={type}
                    label={label}
                    options={options}
                    handleChange={this.handleChange}
                    value={this.state.guardian_consent}
                  />
                );
              }
            }
            if (type === "tel") {
              if (name === "home_phone") {
                return (
                  <PhoneInputField
                    name={name}
                    type={type}
                    label={label}
                    handleChange={this.handleChange}
                    value={this.state.home_phone}
                  />
                );
              }
              if (name === "mobile_phone") {
                return (
                  <PhoneInputField
                    name={name}
                    type={type}
                    label={label}
                    handleChange={this.handleChange}
                    value={this.state.mobile_phone}
                  />
                );
              }
              if (name === "guardian_number") {
                return (
                  <PhoneInputField
                    name={name}
                    type={type}
                    label={label}
                    handleChange={this.handleChange}
                    value={this.state.guardian_number}
                    required={this.state.guardian_consent === "Yes"}
                  />
                );
              }
            }
          })}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    );
  }
}

export default App;
