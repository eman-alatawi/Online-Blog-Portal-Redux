import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";
import selectedBlogReducer from "./selectedBlogReducer";

export default combineReducers({
    blogs: blogsReducer,
    selectedBlog: selectedBlogReducer
})