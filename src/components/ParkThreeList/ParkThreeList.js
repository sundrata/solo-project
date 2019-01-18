import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParkThree from '../ParkThree/ParkThree';
import { Link } from 'react-router-dom';

class ParkThreeList extends Component {

    componentDidMount() {
        this.getMaint();
    }

    getMaint() {
        console.log('hit get Maint');
        this.props.dispatch({ type: 'FETCH_MAINTENANCE' })
    }//end getMaint

    //alert users of succes and routing
    handleSubmit = () => {
        alert('Succesfuly submitted log. Returning to home page.')
    }

    render() {
        return (
            <div>
                {/* Render each item from the features reducer */}
                <h1 className="parkTitle">Little Jibber</h1>
                {this.props.reduxStore.featuresReducer.map((each) => {
                    return (<ParkThree
                        key={each.id}
                        feature_id={each.id} //this is NEEDED for delete
                        feature_name={each.name}
                        feature_image={each.image}
                        timestamp={each.timestamp}
                        park={each.park} />)
                })}
                <Link to="/split" >
                    <button className="submit" onClick={this.handleSubmit}>Submit</button>
                </Link>
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

