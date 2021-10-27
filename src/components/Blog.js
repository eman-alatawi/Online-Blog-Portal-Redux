import React from "react";
import { useDispatch } from "react-redux";
import { removeBlog } from "../redux/actions/blogsActions";
import { selectedBlog } from "../redux/actions/selectedBlogActions";
import Card from "react-bootstrap/Card";

function Blog({ blog, handleShowEditForm }) {
  const dispatch = useDispatch();

  const handleSelectedTask = () => {
    handleShowEditForm();
    dispatch(selectedBlog(blog));
  };

  return (
    <div>
      <Card style={{ width: "32rem", height: "20rem", margin: "2rem 0" }}>
        <Card.Body>
          <Card.Title>{blog.blogName}</Card.Title>
          <Card.Text style={{ height: "11rem", overflowY: "scroll" }}>
            {blog.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <span>
            {" "}
            <i className="far fa-calendar-alt "></i>{" "}
            <small className="me-4">{blog.postedDate}</small>{" "}
            <i class="fas fa-user "></i> {blog.userName}
          </span>
          <div>
            <i
              className="fas fa-pen me-3 edit-icon"
              onClick={() => handleSelectedTask()}
            />
            <i
              className="fas fa-times delete-icon"
              onClick={() => dispatch(removeBlog(blog.id))}
            />
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Blog;
