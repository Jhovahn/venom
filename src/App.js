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
  componentDidMount() {
    return this.props.inc;
  }

  getRobots = () => {
    return this.props.rec.map(
      <ul>
        robot => <li>robot.name</li>
      </ul>
    );
  };

  render() {
    return (
      <div className="body">
        {console.log(this.props)}
        <div className="container">
          <h3>Count React / Redux</h3>
          <button onClick={this.props.dec}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.props.inc}>+</button>
          <br />
          <br />
          <button onClick={this.getRobots}>Robots</button>
          <div>{this.getRobots}</div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
