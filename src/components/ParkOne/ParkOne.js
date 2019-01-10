import React, { Component } from 'react';
import { connect } from 'react-redux';

class ParkOne extends Component {
    render() {        
        console.log('hit parkOne');
        if (this.props.in_park === 1) {
            return (
                <div className="parkItem">
                    <hr></hr>
                    <p>{this.props.feature_name}</p>
                    <img className="featureImg" src={this.props.feature_image} />
                    <span>{this.props.who_maintained}</span>
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
export default connect(mapStateToProps)(ParkOne);