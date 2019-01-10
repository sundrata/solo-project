import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';

class AdminDashboard extends Component {
    render() {

        return (
        <div>
            <UserInfo />
            <div className = "adminNavLeft">
            <Link to="/archives">
            <button className="adminDashButtons">Archives</button><br></br>
            </Link>
            <Link to ="/employees">
            <button className="adminDashButtons">Manage Employees</button>
            </Link>
            </div>
            <div className = "adminNavBottom">
            <button className="adminDashButtons">Park 1</button>
            <button className="adminDashButtons">Park 2</button>
            <button className="adminDashButtons">Park 3</button>
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