import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../UserInfo/UserInfo';

class ManageEmployees extends Component {
    state = {
        username: '',
        password: '',
        is_admin: false,
    }
    handleUsername= (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handlePassword= (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleTitle= (event) => {
        this.setState({
            is_admin: event.target.value
        })
    }
    handleClick = () => {
        this.props.dispatch({ type: 'POST_PERSON', payload: this.state })
    }
    render() {
        console.log('person', this.props.reduxStore.personReducer);
        return (
            <div>
                <UserInfo />
                <form>
                    <label>
                        Username:
                        <input id="username"type="text" name="username" onChange={this.handleUsername} value={this.state.username} /><br></br>
                    </label>
                    <label>
                        Password:
                        <input id="password"type="password" name="password" onChange={this.handlePassword} value={this.state.password} /><br></br>
                    </label>
                    <label>
                        Title:
                        <select id="title" onChange={this.handleTitle} value={this.state.is_admin}>
                            <option value="false">Employee</option>
                            <option value="true">Admin</option>
                        </select><br></br>
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleClick} />
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