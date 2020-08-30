import React, { Component } from 'react';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps(ctx) {
    return { res: console.log('Fetched in get initial props') };
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
