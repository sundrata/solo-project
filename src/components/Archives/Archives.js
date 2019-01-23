import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import UserInfo from '../UserInfo/UserInfo';
import moment from 'moment';

class Archives extends Component {
    render() {
        return (
            <div>
                <table className="archivesTable">
                    <thead>
                        <tr>
                            <th>Feature Name</th>
                            <th>Who Maintained</th>
                            <th>When</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.maintenanceReducer.map((each) => {
                            return (
                                <tr key={each.id}>
                                    <td>{each.feature_name}</td>
                                    <td className="middleRow">{each.who_maintained}</td>
                                    <td>{moment(each.timestamp).format("MMM Do, YYYY")}</td>
                                    <td>{moment(each.when).format("hh:mm:ss a")}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Archives);