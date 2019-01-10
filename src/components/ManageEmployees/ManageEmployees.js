import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../UserInfo/UserInfo';

class ManageEmployees extends Component {
    render() {        
        console.log('person', this.props.reduxStore.personReducer);
       
        return (
            <div>
            <UserInfo />
                <table className="archivesTable">
                    <thead>
                        <tr>
                            <th>Employee </th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.personReducer.map((person) => {
                            return (
                                <tr key={person.id}>
                                    <td>{person.username}</td>
                                    <td>{person.is_admin ? 'admin' : 'employee'}</td> {/*Cool way to render booleans*/}
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