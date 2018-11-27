import React, {Component} from 'react';
import ListView from "../components/ListView/container/ListView";

class Dashboard extends Component {

    render() {
        return (
            <div style={{display: "flex", flexDirection: "column"}}>

                <ListView/>
            </div>
        );
    }
}

export default Dashboard;
