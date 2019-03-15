import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParkTwoList from '../ParkTwoList/ParkTwoList';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

class AdminTwo extends Component {
    state = {
        feature: '',
        park: 0,
    }
    //set which park you're sending the feature to in dropdown
    handlePark = (event) => {
        this.setState({
            park: event.target.value
        })
        console.log('in park:', event.target.value)
    }
    //select feature to move
    handleFeature =  (event) => {
        this.setState({
            feature: event.target.value
        })
        console.log('feature:', event.target.value)
    }
    //trigger put route to change which park the feature is in
    updateFeature = () => {
        this.props.dispatch({ type: 'UPDATE_PARKS', payload: this.state })
    }

    render() {
        return (
            <div>
                {/* list all features in a dropdown and select which feature to add */}
                <center>
                {/* list all features in a dropdown and select which feature to add */}
                
                Feature: <Select
                  value={this.state.category_id}
                  onChange={this.handleFeature}
                  label="Category"
                  inputProps={{
                    name: 'category',
                    id: 'category-simple'
                  }}
                >
                  {this.props.reduxStore.featuresReducer.map((row) => (
                      <MenuItem
                        value={row.id}
                        key={row.id}
                      >
                        {row.name}
                      </MenuItem>
                  ))}
                </Select><br></br>
                {/* list all parks in a dropdown to select which park to put feature into */}
                Park: <Select
                  value={this.state.category_id}
                  onChange={this.handlePark}
                  label="Category"
                  inputProps={{
                    name: 'category',
                    id: 'category-simple'
                  }}
                >
                  {this.props.reduxStore.parksReducer.map((row) => (
                      <MenuItem
                        value={row.id}
                        key={row.id}
                      >
                        {row.name}
                      </MenuItem>
                  ))}
                </Select><br></br>
                <Button onClick={this.updateFeature}>Add To Park</Button>
                </center>
                <hr></hr>
                <div className="adminViewContent">
                {/* <hr className="fakePhoneTop"></hr> */}
                <ParkTwoList />
                {/* <hr className="fakePhoneBottom"></hr> */}
                {/* <span className="dot"></span>  */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(AdminTwo);