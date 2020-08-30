// import React, { Component } from 'react';

// class Index extends Component {
//   constructor(props) {
//     super(props);
//   }

//   static async getInitialProps(ctx) {
//     return { res: console.log('Fetched in get initial props') };
//   }

//   render() {
//     console.log('running index page...');
//     return (
//       <div>
//         <h1>the index page...</h1>
//       </div>
//     );
//   }
// }
import axios from 'axios';

const Index = () => {
  console.log('running index page...');
  return (
    <div>
      <h1>the index page...</h1>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  // https://jsonplaceholder.typicode.com/users/1/posts
  console.log('Get initialsdkjfalkdjflaskd');
  return {};
};

export default Index;
