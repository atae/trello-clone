import React, { Component } from 'react';
import ListItem from '../listItem/listItem';
import './listIndex.css'

class ListIndex extends Component {

    constructor(props) {
        super(props);
    }

    renderList = () => {
        let listItems = this.props.listItems;
        let renderedList = [];
        for (let i = 0; i < listItems.length; i++) {
            console.log(this.props.searchValue)
            if (listItems[i].indexOf(this.props.searchValue) > -1) {
                renderedList = renderedList.concat(<ListItem 
                changeBackgroundColor={this.props.changeBackgroundColor}
                item={listItems[i]} />)
            }
        }

        return renderedList;
    }

    render() {
        let renderedList = this.renderList();

        return (
            <ul>
            {renderedList}
            </ul>
        )
    }
}

export default ListIndex;
