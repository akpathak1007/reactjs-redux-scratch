import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPost } from "../actions/post-actions";
import Post from '../components/Post';

const PostsPage = ({ dispatch, loading, hasErrors, posts }) => {
  useEffect(
    () => {
      dispatch(fetchPost());
    },
    [dispatch]
  );
  /* Show loading, error, and success state */
  const renderPost = () => {
    if(loading) return <p>Loading...</p>
    if (hasErrors) return <p>Unable to display posts.</p>
    return posts.map(post => <Post key={post.id} post={post}/>)
  };

  return (
    <section>
      {renderPost()}
    </section>
  );
};
const mapStatesToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErros,
});
export default connect(mapStatesToProps)(PostsPage);
