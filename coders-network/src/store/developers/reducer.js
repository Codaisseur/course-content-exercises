// src/store/developers/reducer.js
const initialState = null;
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "developers/FETCHED": {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
