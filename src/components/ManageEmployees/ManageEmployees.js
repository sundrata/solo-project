import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../UserInfo/UserInfo';

class ManageEmployees extends Component {
    render() {        
        return (
            <div>
            <UserInfo />
                <table className="archivesTable">
                    <thead>
                        <tr>
                            <th>Username </th>
                            <th>Admin?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.personReducer.map((each) => {
                            return (
                                <tr key={each.id}>
                                    <td>{each.username}</td>
                                    <td>{each.is_admin}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

// Instead of taking everything from state, we just want the shelf info.
const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ManageEmployees);