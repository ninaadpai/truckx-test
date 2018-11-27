import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import Loader from 'react-loader-spinner'
import "react-datepicker/dist/react-datepicker.css";
import '../styles/DriverForm.css';

class DriverForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            licenseNo: '',
            email: '',
            phoneNo: '',
            dateOfBirth: new Date(),
            licenseExpDate: new Date(),
            formFilled: false,
        }
        this.handleDOBChange = this.handleDOBChange.bind(this);
        this.handleEXPChange = this.handleEXPChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleDOBChange(date) {
        this.setState({
            dateOfBirth: date
        });
    }

    handleEXPChange(date) {
        this.setState({
            licenseExpDate: date
        });
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validateAndAddDriver = (user) => {
        const driver = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            licenseNo: this.state.licenseNo,
            email: this.state.email,
            phoneNo: this.state.phoneNo,
            dateOfBirth: this.state.dateOfBirth,
            licenseExpDate: this.state.licenseExpDate,
        }
        this.props.addNewDriver(user, driver);
    }

    render() {
        const {loading, user, error} = this.props;
        return (
            <div
                className="driver-form-outer"
            >
                <input
                    className="driver-form-input"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleInputChange}
                    value={this.state.firstName}
                />
                    <input
                        className="driver-form-input"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleInputChange}
                        value={this.state.lastName}
                    />
                <div style={{display: "flex", flexDirection: "column"}}>
                    <DatePicker
                        className="driver-form-input"
                        selected={this.state.dateOfBirth}
                        onChange={this.handleDOBChange}
                    />
                    <span style={{fontSize: "10px"}}>Date of Birth</span>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                <input
                    className="driver-form-input"
                    type="text"
                    name="licenseNo"
                    placeholder="License Number"
                    onChange={this.handleInputChange}
                    value={this.state.licenseNo}
                />
                    {error !== "" && <span style={{fontSize: "14px", color: "red"}}>{error}</span>}
                </div>
                <input
                    className="driver-form-input"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                    value={this.state.email}
                />
                <input
                    className="driver-form-input"
                    type="text"
                    name="phoneNo"
                    placeholder="Phone Number"
                    onChange={this.handleInputChange}
                    value={this.state.phoneNo}
                />
                <div style={{display: "flex", flexDirection:"column"}}>
                    <DatePicker
                        className="driver-form-input"
                        selected={this.state.licenseExpDate}
                        onChange={this.handleEXPChange}
                        placeholder="License Expiration Date"
                    />
                    <span style={{fontSize: "10px"}}>License Expiration Date</span>
                </div>
                <button
                    className={!this.state.formFilled ? "driver-form-button" : "driver-form-button-disabled"}
                    onClick={() => this.validateAndAddDriver(user)}
                >
                    {loading &&

                    <Loader
                        type="ThreeDots"
                        color="#000"
                        height="20"
                        width="20"
                    />}
                    {!loading &&
                    "Add"
                    }
                </button>
            </div>
        );
    }
}

export default DriverForm;
