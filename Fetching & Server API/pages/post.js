import { withRouter } from 'next/router';

Post.getInitialProps = async ({ query }) => {
  console.log(query);
  return query;
};

export default Post;

//   const Post = withRouter((props) => (
//     <h1>Post Page. You are looking at post #{props.router.query.id}</h1>
//   ));

// export default withRouter(Post);
