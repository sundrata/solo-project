import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';

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
                        <button className="adminDashButtons">Park #1</button>
                    </Link>
                    <Link to="/park2">
                        <button className="adminDashButtons">Park #2</button>
                    </Link>
                    <Link to="/park3">
                        <button className="adminDashButtons">Park #3</button>
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