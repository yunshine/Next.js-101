import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Fetching Data in componentDidMount...');
  }

  render() {
    console.log('running index page...');
    return (
      <div>
        <h1>the index page...</h1>
      </div>
    );
  }
}

export default Index;
