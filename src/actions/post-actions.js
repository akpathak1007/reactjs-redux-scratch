export const GET_POSTS = 'GET_POST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const getPost = () => ({
  type: GET_POSTS
});
export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts
});
export const getPostFailure = () => ({
  type: GET_POSTS_FAILURE
})

export function fetchPost() {
  return async function (dispatch) {
    dispatch(getPost());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json();
      dispatch(getPostsSuccess(data));
    } catch (err) {
      dispatch(getPostFailure());
    }
  }
}