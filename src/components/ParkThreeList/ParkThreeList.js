import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParkThree from '../ParkThree/ParkThree'
import UserInfo from '../UserInfo/UserInfo';


class ParkThreeList extends Component {
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
                <UserInfo />
                {/* Render each item from the shelf reducer */}
                <h1 className="parkTitle">Park Three</h1>
                {this.props.reduxStore.maintenanceReducer.map((each) => {
                    return ( <ParkThree
                        key={each.id}
                        id={each.id} //this is NEEDED for delete
                        feature_name={each.feature_name}
                        feature_image={each.feature_image}
                        who_maintained={each.who_maintained}
                        was_maintained={each.was_maintained}
                        timestamp={each.timestamp}
                        in_park={each.in_park} /> )
                })}
                <button className="submit">Submit</button>
            </div>
        )
    }
    }


// Instead of taking everything from state, we just want the shelf info.
const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ParkThreeList);

