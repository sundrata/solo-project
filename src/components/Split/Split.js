import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import UserPage from '../UserPage/UserPage';

class Split extends Component {
    render() {
        if (this.props.user.is_admin) {
            return(
            <AdminDashboard />
            )
        } else {
            return (
                <UserPage />
            )
        }
    }
}


// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(Split);
