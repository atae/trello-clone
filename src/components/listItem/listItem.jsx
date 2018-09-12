import React, { Component } from 'react';
import './listItem.css';

class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li onClick={this.props.changeBackgroundColor}>{this.props.item}</li>
        )
    }
}

export default ListItem;
