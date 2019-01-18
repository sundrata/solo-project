import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class ParkThree extends Component {
    state = {
        feature_id: 0,
        who_maintained: '',
        was_maintained: true,
    }

    componentDidMount() {
        this.handleID();
        this.handleWho();
    }

    handleID = () => {
        this.setState({
            feature_id: this.props.feature_id
        })
    }

    handleWho = () => {
        this.setState({
            who_maintained: this.props.username
        })
    }
// post to database onChange of checkbox
// set last_maintained_by
    handleSubmit = () => {
        this.handleID();
        this.handleWho();
        this.props.dispatch({ type: 'POST_MAINTENANCE', payload: this.state })
        this.props.dispatch({ type: 'UPDATE_FEATURES', payload: this.props.feature_id })
    }

    render() {
        if (this.props.park === 3) {
            return (
                <div className="parkItem">
                    <hr></hr>
                    <p value={this.props.feature_name} className="featureName">{this.props.feature_name}</p>
                    <img alt="feature" className="featureImg" src={this.props.feature_image} />
                    <div className="checker">
                        <input className="featureItemMaintained" type="checkbox" onChange={this.handleSubmit} value={this.props.was_maintained} />
                        <span>Maintained?</span>
                        <p className="lastMaintained">Last Maintained: <span value={this.props.timestamp}>{moment(this.props.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span> <span>({moment(this.props.timestamp).startOf('day').fromNow()})</span></p>
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
const mapStateToProps = (reduxStore) => ({
    reduxStore
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ParkThree);