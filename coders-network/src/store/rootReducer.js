import { combineReducers } from "redux";
import developers from "./developers/reducer";
import postReducer from "./post/reducer";

export default combineReducers({
  developers,
  post: postReducer
});
