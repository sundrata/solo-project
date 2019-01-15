import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParkOne from '../ParkOne/ParkOne';
import UserInfo from '../UserInfo/UserInfo';

class ParkOneList extends Component {
    
    componentDidMount() {
        this.getMaint();
    }
    getMaint() {
        console.log('hit get Maint');
        this.props.dispatch({ type: 'FETCH_MAINTENANCE' })
    }//end getMaint
    
    handleSubmit = () => {
        this.props.dispatch({type: 'POST_MAINTENANCE', payload: this.state})
    }

    render() {
     
        return (
            <div>
                {/* Render each item from the shelf reducer */}
                <h1 className="parkTitle">Park One</h1>
                {this.props.reduxStore.featuresReducer.map((each) => {
                    return ( <ParkOne
                        key={each.id}
                        feature_id={each.id} //this is NEEDED for delete
                        feature_name={each.name}
                        feature_image={each.image}
                        // who_maintained={each.who_maintained}
                        // was_maintained={each.was_maintained}
                        // timestamp={each.timestamp}
                        park={each.park} /> )
                })}
                <button className="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
    }


// Instead of taking everything from state, we just want the shelf info.
const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ParkOneList);

