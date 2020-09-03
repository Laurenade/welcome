import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubmitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    };
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({
      formData,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      isSubmitted: true,
    });
  };

  handleReset = (event) => {
    event.preventDefault();

    this.state = {
      isSubmitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    };
  };

  render() {
    if (this.state.isSubmitted) {
      return (
        <div className="Contact">
          <h2>Thank you!</h2>
          <p>We will contact you.</p>
          <button type="reset" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      );
    }
    return (
      <div className="Contact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              name="firstName"
              value={this.state.formData.firstName}
              placeholder="Enter first name..."
              required
              minLength={1}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              name="lastName"
              value={this.state.formData.lastName}
              placeholder="Enter last name..."
              required
              minLength={1}
              onChange={this.handleChange}
              required
            />
          </div>
          <button>Submit</button>
        </form>
        <div>
          Full Name: {this.props.match.params.dataEntered}{" "}
          {this.state.formData.lastName}
        </div>
      </div>
    );
  }
}

export default Contact;
