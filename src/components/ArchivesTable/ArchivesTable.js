import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

class ArchivesTable extends Component {
    render() {
        console.log('archives:', this.props)
        return (
            <div>
                <div className="archivesTable">
                    <table className="archivesTable">
                        <thead>
                            <th>Feature Name</th>
                            <th>Park</th>
                            <th>Maintained?</th>
                            <th>Timestamp</th>
                            <th>Employee ID</th>
                        </thead>
                        <tbody>
                           
                </tbody>
            </table>
                        {/* {JSON.stringify(this.props.reduxStore.maintenanceReducer)} */}
            </div>
                </div>
                )
            }
        }
        
const mapStateToProps = reduxStore => ({
                    reduxStore,
                });
                
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ArchivesTable);