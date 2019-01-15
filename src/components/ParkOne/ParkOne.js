import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

class ParkOne extends Component {
    state = {
     feature_id: 0,
     who_maintained: '',
     was_maintained: false,
     in_park: 1,  
    }

    componentDidMount(){
        this.handleID();
        this.handlePark();
    }

    handleID = (event) => {
        this.setState({
            feature_id: this.props.feature_id
        })
    }

    handleWho = (event) => {
        this.setState({
            who_maintained: this.props.username
        })
    }

    handleWas = (event) => {
        this.setState({
            was_maintained: event.target.value
        })
    }

    handlePark = () => {
        this.setState({
            in_park : this.state.in_park
        })
    }
    handleTime = (event) => {
        this.setState({
            timestamp: event.target.value
        })
    }

    handleSubmit = () => {
        this.handleID();
        this.handleWho();
        this.handlePark();
        this.props.dispatch({type: 'POST_MAINTENANCE', payload: this.state})
    }

    render() {
        if (this.props.park === 1) {
            return (
                <div className="parkItem">
                    <hr></hr>
                    <p value={this.props.feature_name} className="featureName">{this.props.feature_name}</p>
                    <img alt="feature" className="featureImg" src={this.props.feature_image} />
                    <div className="checker">
                        <input className="featureItemMaintained"type="checkbox" value={this.props.was_maintained}/>
                        <span>Maintained?</span>
                        <p className="lastMaintained">Last Maintained: <span value={this.props.timestamp}>{moment(this.props.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span> <span>({moment(this.props.timestamp).startOf('day').fromNow()})</span></p>
                    </div>       
                    <button onClick={this.handleSubmit}>Submit</button>             
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
    reduxStore
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ParkOne);