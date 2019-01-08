import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';

class Archives extends Component {
    render() {

        return (
            <div>
            <UserInfo />
            <div className="archivesTable">
            <table className="archivesTable">
                <thead>
                    <th>Feature Name</th>
                    <th>Park</th>
                    <th>Maintained?</th>
                    <th>Timestamp</th>
                    <th>Employee ID</th>
                </thead>
            </table>
            </div>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Archives);