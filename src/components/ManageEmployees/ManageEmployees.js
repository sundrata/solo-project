import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserInfo from '../UserInfo/UserInfo';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ManageEmployees extends Component {
    state = {
        username: '',
        password: '',
        is_admin: false,
        open: false
    }

    //new employee handlers
    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleTitle = (event) => {
        this.setState({
            is_admin: event.target.value
        })
    }

    //SAGA handlers
    handleClick = () => {
        this.props.dispatch({ type: 'POST_PERSON', payload: this.state })
        this.setState({ open: false });

    }
    deletePerson = (person) => {
        this.props.dispatch({ type: 'DELETE_PERSON', payload: person.id })
    }

    updatePerson = (person) => {
        this.props.dispatch({ type: 'UPDATE_PERSON', payload: person.id })
    }

    //Material UI dialog handlers
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        console.log('person', this.props.reduxStore.personReducer);
        return (
            <div>
                <div className="addEmpDialog">
                    <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                        Add New Employee
                        </Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Add a new employee
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="newUsername"
                                label="Username"
                                type="text"
                                onChange={this.handleUsername}
                                value={this.state.username}
                                fullWidth
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="newPassword"
                                label="Password"
                                type="password"
                                onChange={this.handlePassword}
                                value={this.state.password}
                                fullWidth
                            />
                            <select id="title" onChange={this.handleTitle} value={this.state.is_admin}>
                                <option value="false">Employee</option>
                                <option value="true">Admin</option>
                            </select>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleClick} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <hr width="35%"></hr>
                </div>
                <table className="archivesTable">
                    <thead>
                        <tr>
                            <th>Employee </th>
                            <th>Title</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxStore.personReducer.map((person) => {
                            if(person.is_admin){
                                return (
                                //cool way to render booleans
                                <tr key={person.id}>                                
                                    <td>{person.username}</td>
                                    <td>{person.is_admin ? 'admin' : 'employee'}</td>
                                    <td><div className="addEmpDialog">
                                        <Button id={person.id} variant="outlined" color="primary" onClick={this.handleClickOpen}>
                                            Edit                        
                                        </Button>
                                        <Dialog
                                            open={this.state.open}
                                            onClose={this.handleClose}
                                            aria-labelledby="form-dialog-title"
                                        >
                                            <DialogTitle id="form-dialog-title">Edit Employee</DialogTitle>
                                            <DialogContent>
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id={person.username}
                                                    label="Username"
                                                    type="text"
                                                    onChange={this.handleUsername}
                                                    value={this.state.username}
                                                    fullWidth
                                                />
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id={person.password}
                                                    label="Password"
                                                    type="password"
                                                    onChange={this.handlePassword}
                                                    value={this.state.password}
                                                    fullWidth
                                                />
                                                <select id="title" onChange={this.handleTitle} value={this.state.is_admin}>
                                                    <option value="false">Employee</option>
                                                    <option value="true">Admin</option>
                                                </select>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={this.handleClose} color="primary">
                                                    Cancel
                            </Button>
                                                <Button onClick={() => this.updatePerson(person)} color="primary">
                                                    Submit
                            </Button>
                                            </DialogActions>
                                        </Dialog>
                                        <hr width="35%"></hr>
                                    </div></td>
                                    
                                    <td><button onClick={() => this.deletePerson(person)}>Delete</button></td>
                                </tr>
                            )
                                }
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