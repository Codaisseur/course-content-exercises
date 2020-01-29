import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../store/post/actions";

class PostPage extends Component {
  componentDidMount() {
    const post_id = this.props.match.params.id;
    this.props.dispatch(fetchPost(post_id));
  }
  render() {
    const title = "??";
    const { post } = this.props;
    if (!post) {
      return (
        <div>
          <h1>{title}</h1>
          <p>Loading...</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>{post.title}</h1>
          <h3>{post.content}</h3>
        </div>
      );
    }
  }
}
function mapStateToProps(reduxState) {
  return {
    post: reduxState.posts
  };
}
export default connect(mapStateToProps)(PostPage);
