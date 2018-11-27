import React, {Component} from 'react';
import DriverForm from "../../DriverForm/container/DriverForm";
import '../styles/ListView.css';

class ListView extends Component {
    constructor() {
        super();

        this.state = {
            showForm: false,
            addDriverBtn: 'Add Driver'
        }
    }

    toggleForm = () => {
        this.state.addDriverBtn === 'Add Driver' ?
            this.setState({
                showForm: true,
                addDriverBtn: 'Cancel'
            }) :
            this.setState({
                showForm: false,
                addDriverBtn: 'Add Driver'
            })
    }

    deleteRecord = (driver) => {
        this.props.deleteThisRecord(driver)
    }

    componentDidMount() {
        this.props.getDrivers(this.props.user);
    }

    render() {
        const {driversLoading, drivers} = this.props;

        const driversList = drivers.map((driver, index) =>
            <div key={index} style={{display: "flex", flexDirection: "row"}}>
                <p className="table-element">{driver.firstName}</p>
                <p className="table-element">{driver.lastName}</p>
                <p className="table-element">{driver.dateOfBirth.substring(0, 10)}</p>
                <p className="table-element">{driver.email}</p>
                <p className="table-element">{driver.phoneNo}</p>
                <p className="table-element">{driver.licenseNo}</p>
                <p className="table-element">{driver.licenseExpDate.substring(0, 10)}</p>
                <p className="table-element delete"
                    onClick={() => this.deleteRecord(driver)}
                >Delete</p>
            </div>
        )


        return (
            <div className="driver-outer">

                <button style={{
                    border: "1px solid #000",
                    fontSize: "16px",
                    height: "32px",
                    marginTop: "8px",
                    marginLeft: "auto",
                    marginRight: "8px",
                    marginBottom: "20px",
                    right: "0"
                }}
                onClick={() => this.props.logOut()}
                >
                    Log Out
                </button>

                <div className="driver-table">

                    {drivers.length === 0 && "Currently you have no drivers added"}
                    <button
                        style={{
                            border: "1px solid #000",
                            fontSize: "16px",
                            height: "32px",
                            marginTop: "8px",
                            marginLeft: "8px",
                            marginRight: "8px",
                            marginBottom: "20px",
                            right: "0"
                        }}
                        onClick={() => this.toggleForm()}
                    >
                        {this.state.addDriverBtn}
                    </button>

                    {this.state.showForm &&
                    <DriverForm/>
                    }
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <p className="table-element title">First Name</p>
                        <p className="table-element title">Last Name</p>
                        <p className="table-element title">Date of Birth (yyyy/mm/dd)</p>
                        <p className="table-element title">Email</p>
                        <p className="table-element title">Phone</p>
                        <p className="table-element title">License Number</p>
                        <p className="table-element title">License Expiration (yyyy/mm/dd)</p>
                    </div>
                    {!driversLoading ?
                        driversList

                        :
                        <p>Loading Drivers...</p>
                    }
                </div>
            </div>
        );
    }
}

export default ListView;
