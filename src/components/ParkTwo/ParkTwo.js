import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class ParkTwo extends Component {
    render() {
        console.log('hit mItem')
        if (this.props.in_park === 2) {
            return (
                <div className="parkItem">
                    <hr></hr>
                    <p className="featureName">{this.props.feature_name}</p>
                    <img alt="feature" className="featureImg" src={this.props.feature_image} />
                    <div className="checker">
                        <input className="featureItemMaintained" type="checkbox" />
                        <span>Maintained?</span>
                        <p className="lastMaintained">Last Maintained: <span>{moment(this.props.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span> <span>({moment(this.props.timestamp).startOf('day').fromNow()})</span></p>
                    </div>
                    <hr></hr>
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
export default connect(mapStateToProps)(ParkTwo);