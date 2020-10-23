import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addItem } from  './actions/items';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';

export class App extends Component {

  // handleOnClick() {
  //   // this.props.store.dispatch(addItem());
  //   this.props.addItem()
  // }

  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};

export default App;
// export default connect(state => ({ items: state.items }), {addItem})(App);
