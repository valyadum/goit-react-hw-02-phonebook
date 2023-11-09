import React, { Component } from 'react';



class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return <input type="text" name="name" required />;
  }
}

export default App;
