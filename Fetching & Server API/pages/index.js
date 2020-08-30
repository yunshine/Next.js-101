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

const Index = ({ posts }) => {
  //   console.log('running index page...');
  //   console.log(posts);
  return (
    <div>
      <h1>the index page...</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await axios.get(
    'https://jsonplaceholder.typicode.com/users/1/posts'
  );
  const { data } = res;
  console.log(data[0]);
  console.log('Get initialsdkjfalkdjflaskd');
  return { posts: data };
};

export default Index;
