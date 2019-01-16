import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParkOneList from '../ParkOneList/ParkOneList';

class AdminOne extends Component {
    state = {
        feature: '',
        park: 1,
    }

    // componentDidMount() {
    //     this.handleFeature();
    // }

    handlePark = (event) => {
        this.setState({
            park: event.target.value
        })
        console.log('in park:',this.state.park)
    }

    handleFeature =  (event) => {
        this.setState({
            feature: event.target.value
        })
        console.log('feature:', event.target.value)
    }

    updateFeature = () => {
        // console.log('f id:', feature.id);
        
        this.props.dispatch({ type: 'UPDATE_PARKS', payload: this.state.feature })
    }

    render() {
        return (
            <div>
                {/* list all features in a dropdown and select which feature to add */}
                <select onChange={this.handleFeature}>
                {this.props.reduxStore.featuresReducer.map((feature) => {
                    return ( <option  value={feature.id}>
                        {/* {feature.id} */}
                        {feature.name}
                       </option> )
                })}
                </select>

                {/* list all parks in a dropdown to select which park to put feature into */}
                <select onChange={this.handlePark} value={this.state.park}>
                {this.props.reduxStore.parksReducer.map((park) => {
                    return ( <option>
                        {park.name}
                       </option> )
                })}
                </select>

                <button onClick={ this.updateFeature }>Add To Park</button>
                <hr></hr>
                <ParkOneList />
            </div>
        );
    }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = reduxStore => ({
    reduxStore
});

export default connect(mapStateToProps)(AdminOne);
