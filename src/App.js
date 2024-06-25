
import { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { decrease, increase } from './actions/action';

class App extends Component {


 


 render() {

  console.log(this.props)

  return (
    <div className="App">
      <h1>redux app</h1>
      <button onClick={this.props.increase}>+</button>
      <div>{this.props.count}</div>
      <button onClick={this.props.decrease}>-</button>
    </div>
  );
}

 }
  
function mapStateToProps  (state) {
   return {
     count : state.count
   }
}






function mapDispatchToProps (dispatch) {
    return{
      increase: () => dispatch(increase),
      decrease: () => dispatch(decrease)
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);
