import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class AdminDashboard extends Component {
    render() {

        return (
            <div>
                <div className="adminNavLeft">
                    <Link to="/archives">
                        <button className="adminDashButtons">Archives</button><br></br>
                    </Link>
                    <Link to="/employees">
                        <button className="adminDashButtons">Manage Employees</button>
                    </Link>
                </div>
                <div className="adminNavBottom">
                    <Link to="/adminOne">
                        <button className="adminDashButtons">The Knob</button>
                    </Link>
                    <Link to="/adminTwo">
                        <button className="adminDashButtons">Red Tail Ridge</button>
                    </Link>
                    <Link to="/adminThree">
                        <button className="adminDashButtons">Little Jibber</button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AdminDashboard);