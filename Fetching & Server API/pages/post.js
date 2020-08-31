import { withRouter } from 'next/router';
import axios from 'axios';

const Post = (props) => (
  <div>
    <h1>Post Page. These are the comments for post #{props.id}</h1>
    {props.comments.map((comment) => (
      // <p>{comment.email}</p>
      <Comment {...comment} key={comment.id} />
    ))}
  </div>
);

const Comment = ({ email, body }) => (
  <div>
    <h5>{email}</h5>
    <p>{body}</p>
    <br></br>
  </div>
);

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = res;
  console.log(data[0]);
  return { ...query, comments: data };
};

export default Post;

//   const Post = withRouter((props) => (
//     <h1>Post Page. You are looking at post #{props.router.query.id}</h1>
//   ));

// export default withRouter(Post);
