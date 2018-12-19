import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';

//import { connect, bindActionCreators } from 'react-redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
        const color = [
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200),
            Math.floor((Math.random() * 55) + 200)
        ];

        this.props.handleSetColor(color);
    }

    render() {

        const color = this.props.color;
        /* 
            background 설정시 사용된 문법: Template literals
            참조: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
        */
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        }

        return (
            <div style={style}>
                <Value 
                    number={this.props.number}
                />
                <Control 
                    onPlus = {this.props.handleIncrement} 
                    onSubtract = {this.props.hadleDecrement} 
                    onRadomizeColor = {this.setRandomColor}
                />
            </div>
        );
    }
}

Counter.propTypes = {

}

Counter.defaultProps = {

}

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.ui.color
    }
}

const mapDispatchToProps = (dispatch) => {
    // ActionType에서 설정한 이름 그대로 사용
    //return bindActionCreators(actions, dispatch);
    return {
        handleIncrement: () => {
            dispatch(actions.increment())
        },
        hadleDecrement: () => {
            dispatch(actions.decrement())
        },
        handleSetColor: (color) => {
            dispatch(actions.setColor(color))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);