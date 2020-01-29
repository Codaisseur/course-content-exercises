import { combineReducers } from "redux";

import developers from "./developers/reducer";
import posts from "./post/reducer";

export default combineReducers({
  developers,
  posts
});
