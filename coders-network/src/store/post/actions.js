import api from "../../api";

export function fetchPost(id) {
  return function thunk(dispatch, getState) {
    api(`/posts/${id}`).then(post => {
      dispatch(setPost(post));
    });
  };
}
export function setPost(post) {
  return {
    type: "posts/FETCHED",
    payload: post
  };
}
