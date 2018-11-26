import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    counter: state
});

const mapDispatchToProps = dispatch => ({
    add1: () => dispatch({ type: "ADD"}),
    remove1: () => dispatch({ type: "REMOVE"}),
    add10: () => dispatch({ type: "ADDTEN"}),
    remove10: () => dispatch({ type: "REMOVETEN"}),
    reset: () => dispatch({ type: "RESET"})
  });
  
const CounterComponent = ({ counter, add1, remove1, add10, remove10, reset}) => (
    <div>
        <p>{counter}</p>
        <button onClick={add1}>+</button>
        <button onClick={remove1}>-</button>
        <button onClick={add10}>plus 10</button>
        <button onClick={remove10}>moins 10</button>
        <button onClick={reset}>Reset</button>
    </div>
);
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CounterComponent);

