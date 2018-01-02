import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetails extends Component {
    render() {
        if(!this.props.user) {
            return (<h4>Select a user....</h4>);
        }
        return (
            <div>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetails);