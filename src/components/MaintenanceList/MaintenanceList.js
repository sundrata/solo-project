import React, { Component } from 'react';
import { connect } from 'react-redux';
import MaintenanceItem from '../MaintenanceItem/MaintenanceItem';

class MaintenanceList extends Component {
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
                {/* Render each item from the maintenance reducer */}
                {this.props.reduxStore.maintenanceReducer.map((each) => {
                    return (<MaintenanceItem
                        key={each.id}
                        id={each.id} //this is NEEDED for delete
                        feature_name={each.feature_name}
                        who_maintained={each.who_maintained}
                        was_maintained={each.was_maintained}
                        timestamp={each.timestamp}
                        in_park={each.in_park} />);
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
export default connect(mapStateToProps)(MaintenanceList);