const selectedBlogReducer = (selectedBlog = null, action) => {
    switch (action.type) {
        case 'SELECTED_BLOG':
            return action.payload;
        default:
            return selectedBlog;
    }
}

export default selectedBlogReducer;