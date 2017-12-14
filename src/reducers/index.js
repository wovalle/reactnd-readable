import { combineReducers } from 'redux';

import comments from './comments.reducer';
import categories from './categories.reducer';
import posts from "./posts.reducer";

const rootReducer = combineReducers({
    comments,
    categories,
    posts,
});

export default rootReducer;
