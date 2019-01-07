import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        width: 345,
    },
    media: {
        height: 150,
    },
};

class MaintenanceItem extends Component {
    // handleDeleteClick = () => {
    //     console.log('this.props.id', this.props.id);
    //     this.props.dispatch({ type: 'DELETE_SHELF_ITEM', payload: {item: this.props.id, user: this.props.person} })
    // }

    render() {
        const { classes } = this.props;

        return (
            <div className="shelfItem">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={this.props.feature_name}
                        />
                        <CardContent>

                            <Typography variant="h5" component="p">
                                {this.props.who_maintained}
                            </Typography>
                            <Typography component="p">
                                {this.props.was_maintained}
                            </Typography>
                        </CardContent>
                        {/* <Button size="small" color="primary" onClick={this.handleDeleteClick}>
                            Delete
                        </Button> */}
                    </CardActionArea>
                </Card>
            </div>

        );

    }

}

// Instead of taking everything from state, we just want the shelf info.
const mapStateToProps = reduxStore => ({
    reduxStore,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(MaintenanceItem));