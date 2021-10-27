export const addBlog = (blog) => {
  return {
    type: "ADD_BLOG",
    payload: blog,
  };
};

export const updateBlog = (blog) => {
  return {
    type: "UPDATE_BLOG",
    payload: blog,
  };
};

export const removeBlog = (key) => {
  return {
    type: "REMOVE_BLOG",
    payload: key,
  };
};
