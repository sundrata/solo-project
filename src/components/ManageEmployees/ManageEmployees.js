import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../UserInfo/UserInfo';

class ManageEmployees extends Component {
    render() {
        console.log('person', this.props.reduxStore.personReducer);

        return (
            <div>
                <UserInfo />
                
                <form>
                    <label>
                        Username:
                        <input type="text" name="username" />
                    </label>
                    <label>
                        Password:
                        <input type="text" name="password" />
                    </label>
                    <label>
                        Title:
                        <select>
                            <option>Employee</option>
                            <option>Admin</option>
                        </select><br></br>
                    </label>
                    <input type="submit" value="Submit" />
                </form>

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
                                //cool way to render booleans
                                <tr key={person.id}>
                                    <td>{person.username}</td>
                                    <td>{person.is_admin ? 'admin' : 'employee'}</td>
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