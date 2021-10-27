import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../redux/actions/blogsActions";
import { v4 as uuidv4 } from "uuid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";

export default function AddBlog() {
  const [blog, setBlog] = useState({});

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBlog({
      ...blog,
      id: uuidv4(),
      [name]: value,
      userID: uuidv4(),
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
        dispatch(addBlog(blog));
        e.target.reset();
        swal(
          "Blog Added!",
          "Congratulations blog car has been added in all blogs list ",
          "success"
        );
      }
    }
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <h3 className="mb-3">Add New Blog</h3>
        <Form.Group className="mb-3">
          <Form.Label>Blog Name </Form.Label>{" "}
          <Form.Control
            id="blogName"
            name="blogName"
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
            type="text"
            placeholder="Enter your name"
            onChange={handleChange}
          />{" "}
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 me-3">
          Add Blog
        </Button>
      </Form>
    </div>
  );
}
