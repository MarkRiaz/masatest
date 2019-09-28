import React from 'react';

class Item extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (nextProps.selectedItem === this.props.name) {
            return true
        }
        // homework
        // if (this.props.selectedItem !== this.props.name) {
        //     return true
        // }

        return  false
    }

    render() {
    console.log('[Item][render]');
    const { age, name, onItemClick, selectedItem } = this.props;
    return (
        <div className={selectedItem === name ? "selected" : ""} onClick={onItemClick}>
            {age}:{name}
        </div>
    )
}
}

export default Item;