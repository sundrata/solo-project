import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParkThreeList from '../ParkThreeList/ParkThreeList';

class AdminThree extends Component {
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
    handleFeature = (event) => {
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
                <select onChange={this.handleFeature}>
                    {/* <option value="" disabled defaultValue>Select Feature</option> */}
                    {this.props.reduxStore.featuresReducer.map((feature) => {
                        if (`${feature.park}` == 3) {
                            return (
                                <option value={feature.id}>{feature.name}</option>)
                        }
                    })}
                </select>
                {/* list all parks in a dropdown to select which park to put feature into */}
                <select onChange={this.handlePark} >
                    <option value="" disabled defaultValue>Select Park</option>
                    {this.props.reduxStore.parksReducer.map((park) => {
                        return (<option value={park.id}>
                            {park.name}
                        </option>)
                    })}
                </select>
                <button onClick={this.updateFeature}>Add To Park</button>
                <hr></hr>
                <div className="adminViewParks">
                <ParkThreeList />
                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(AdminThree);