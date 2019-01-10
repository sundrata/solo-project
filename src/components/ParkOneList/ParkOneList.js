import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParkOne from '../ParkOne/ParkOne'

class ParkOneList extends Component {
    componentDidMount() {
        this.getMaint();
    }
    getMaint() {
        console.log('hit get Maint');
        this.props.dispatch({ type: 'FETCH_MAINTENANCE' })
    }//end getMaint

    render() {
        return (
            <div>
                {/* Render each item from the shelf reducer */}
                <h1 className="parkTitle">Park One</h1>
                {this.props.reduxStore.maintenanceReducer.map((each) => {
                    return ( <ParkOne
                        key={each.id}
                        id={each.id} //this is NEEDED for delete
                        feature_name={each.feature_name}
                        feature_image={each.feature_image}
                        who_maintained={each.who_maintained}
                        was_maintained={each.was_maintained}
                        timestamp={each.timestamp}
                        in_park={each.in_park} /> )
                })}
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

