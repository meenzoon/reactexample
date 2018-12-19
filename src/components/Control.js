import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Control extends Component {
    
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRadomizeColor}>Randomize Color</button>
            </div>
        );
    }

}

Control.propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRadomizeColor: PropTypes.func
}

function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}

Control.defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRadomizeColor: createWarning('onRadomizeColor')
}

export default Control;