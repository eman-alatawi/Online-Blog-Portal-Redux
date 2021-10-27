const initState = {
  blogs: [
    {
      id: "1234fff",
      blogName: "web development",
      description: "some text here....",
      postedDate: "2021-10-27",
      userName: "Eman",
      userID: "14564fff",
    },
    {
      id: "14564fff",
      blogName: "Java development",
      description: "some text here....",
      postedDate: "2021-10-25",
      userName: "Sara",
      userID: "56764fff",
    },
  ],
};

const blogsReducer = (blogs = [], action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...blogs, action.payload];

    case "UPDATE_BLOG":
      let updatedBlogs = [...blogs];
      updatedBlogs.splice(blogs.indexOf(action.payload), 1, action.payload);
      return updatedBlogs;

    case "REMOVE_BLOG":
      let newBlogs = [...blogs];
      newBlogs.splice(blogs.indexOf(action.payload), 1);
      return newBlogs;

    default:
      return blogs;
  }
};

export default blogsReducer;
