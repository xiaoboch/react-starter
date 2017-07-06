import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {increaseCounter} from '../actions'

class App extends Component {

  render() {

    return (
      <div>
        <div className='text'>
          Hello, welcome to React world.
        </div>

        <button className='btn btn-primary' onClick={() =>this.props.increaseCounter()}>Click me</button>
        <div className='counter'>{this.props.count}</div>
      </div>
    );

  }
}

function mapActionToProps(dispatch){
  return bindActionCreators({increaseCounter}, dispatch);
}

function mapStateToProps(state){

  return {count: state};
}
export default connect(mapStateToProps, mapActionToProps)(App);
