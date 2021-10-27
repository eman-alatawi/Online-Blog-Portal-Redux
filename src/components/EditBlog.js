import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "../redux/actions/blogsActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";

export default function EditBlog({ handleShowEditForm }) {
  const blog = useSelector((state) => state.selectedBlog);

  const [updatedBlog, setUpdatedBlog] = useState(blog);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdatedBlog({
      ...blog,
      [name]: value,
    });

    console.log(blog);
  };

  const validate = () => {
    const blogName = document.getElementById("blogName").value;
    const description = document.getElementById("description").value;
    const postedDate = document.getElementById("postedDate").value;
    const userName = document.getElementById("userName").value;

    if (!blogName || !description || !postedDate || !userName) {
      swal("Empty!!", "Some Feilds are empty!", "error");
      return false;
    } else {
      return true;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (JSON.stringify(blog) === "{}") {
      swal("Oops!", "You should add the Blog details first ", "warning");
    } else {
      if (validate()) {
        dispatch(updateBlog(updatedBlog));
        handleShowEditForm();
        swal(
          "Blog Edited!",
          "Congratulations blog car has been Edited successfully ",
          "success"
        );
      }
    }
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <h3 className="mb-3">Edit Blog</h3>
        <Form.Group className="mb-3">
          <Form.Label>Blog Name </Form.Label>{" "}
          <Form.Control
            id="blogName"
            name="blogName"
            value={updatedBlog.blogName}
            type="text"
            placeholder="Enter blog Name "
            onChange={handleChange}
          />{" "}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>{" "}
          <Form.Control
            id="description"
            name="description"
            value={updatedBlog.description}
            type="text"
            placeholder="Enter Description"
            onChange={handleChange}
          />{" "}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>{" "}
          <Form.Control
            id="postedDate"
            name="postedDate"
            value={updatedBlog.postedDate}
            type="date"
            placeholder="Enter your name"
            onChange={handleChange}
          />{" "}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>{" "}
          <Form.Control
            id="userName"
            name="userName"
            value={updatedBlog.userName}
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
          />{" "}
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 me-3">
          Edit Blog
        </Button>
      </Form>
    </div>
  );
}
