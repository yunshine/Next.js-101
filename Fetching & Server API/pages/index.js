import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps(ctx) {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1/posts'
    );
    const { data } = res;
    return { posts: data };
  }

  render() {
    console.log('running index page...');
    const { posts } = this.props;
    return (
      <div>
        <h1>the index page...</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/post?id=${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

// import axios from 'axios';

// const Index = ({ posts }) => {
//   //   console.log('running index page...');
//   //   console.log(posts);
//   return (
//     <div>
//       <h1>the index page...</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// Index.getInitialProps = async (ctx) => {
//   const res = await axios.get(
//     'https://jsonplaceholder.typicode.com/users/1/posts'
//   );
//   const { data } = res;
//   console.log(data[0]);
//   console.log('Get initialsdkjfalkdjflaskd');
//   return { posts: data };
// };

export default Index;
