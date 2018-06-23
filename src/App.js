import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, request } from './actions';
import './App.css';

const mapStateToProps = state => {
  return {
    count: state.reducer.count,
    isPending: state.request.isPending,
    robots: state.request.robots,
    error: state.request.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement()),
    rec: () => dispatch(request())
  };
};

class App extends Component {
  render() {
    return (
      <div className="body">
        {console.log(this.props)}
        <div className="container">
          <h3>Counter</h3>
          <button onClick={this.props.dec}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.props.inc}>+</button>
          <button onClick={this.props.rec}>See what happens</button>
          {console.log(this.props.robots)}
          <div />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
