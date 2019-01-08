import React, { Component } from 'react';
import { connect } from 'react-redux';

class ParkThree extends Component {
    render() {        
        console.log('hit parkThree');
        if (this.props.in_park === 3) {
            return (
                <div>
                    <p>{this.props.feature_name}</p>
                </div>
            )
        } else {
            return (null)//end if  
        }
    }
}

// Instead of taking everything from state, we just want the shelf info.
const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ParkThree);