import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddBlog from "./AddBlog";
import Blog from "./Blog";
import EditBlog from "./EditBlog";

function BlogsList() {
  const [shouldShowEditForm, toggleShowEditForm] = useState(false);

  const blogs = useSelector((state) => state.blogs);
  console.log(blogs);

  const handleShowEditForm = () => {
    toggleShowEditForm(!shouldShowEditForm);
  };
  return (
    <div className="main-container">
      <div className="blogs-outer-container">
        <h3>All Blogs</h3>
        <div className="blogs-inner-container">
          {blogs != "" ? (
            <>
              {blogs.map((blog) => (
                <Blog
                  key={blog.id}
                  blog={blog}
                  handleShowEditForm={handleShowEditForm}
                />
              ))}
            </>
          ) : (
            <h4 class="text-muted">No Blogs Yet</h4>
          )}
        </div>
      </div>

      <div className="forms-container">
        {shouldShowEditForm ? (
          <EditBlog handleShowEditForm={handleShowEditForm} />
        ) : (
          <AddBlog />
        )}
      </div>
    </div>
  );
}

export default BlogsList;
