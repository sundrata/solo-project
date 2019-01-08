import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';
import ArchivesTable from '../ArchivesTable/ArchivesTable';

class Archives extends Component {
    render() {
        
        return (
            <div>
            <UserInfo />
            
            <ArchivesTable />
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Archives);