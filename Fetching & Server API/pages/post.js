const Post = (props) => <h1>Post Page. You are looking at post #{props.id}</h1>;

Post.getInitialProps = async ({ query }) => {
  console.log(query);
  return query;
};
export default Post;
