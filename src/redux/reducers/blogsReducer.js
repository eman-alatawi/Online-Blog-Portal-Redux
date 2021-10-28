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

      const filterdBlogs = blogs.filter((filterdBlog) => filterdBlog.id !== action.payload.id);
      return [ action.payload , ...filterdBlogs];
      
    case "REMOVE_BLOG":
      const filterdBlogsAfterRemove = blogs.filter((filterdBlog) => filterdBlog.id !== action.payload);
      return filterdBlogsAfterRemove
    

    default:
      return blogs;
  }
};

export default blogsReducer;
