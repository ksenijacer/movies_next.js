import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { useFormik } from "formik";
import { addComment, getComment } from "../store/movies/slice";
import { selectMovieComments } from "../store/movies/selectors";
import commentSchema from "../validation/CommentValidation";
import { useRouter } from "next/router";

const Comment = ({ movie }) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectMovieComments);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    dispatch(getComment(id));
  }, [id, dispatch]);

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema: commentSchema,

    onSubmit: (values) => {
      dispatch(addComment({ id: movie.id, content: values.content }));
      values.content = "";
    },
  });

  return (
    <Card style={{ maxWidth: "70%", marginBottom: "50px", border: "0px" }}>
      <ListGroup style={{ border: "1px solid lightblue", textAlign: "left" }}>
        <div>
          {comments?.length > 0 ? (
            comments.map((comment) => (
              <ListGroupItem key={comment.id}>
                <small>
                  <b>{comment.user.name}&nbsp;</b>
                </small>
                <small>{comment.content}</small>
              </ListGroupItem>
            ))
          ) : (
            <small>No comments</small>
          )}
        </div>
      </ListGroup>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Control
          id="content"
          name="content"
          as="textarea"
          row={3}
          className="shadow-none"
          placeholder="Leave a comment"
          style={{ borderTop: "0px" }}
          value={formik.values.content}
          onChange={formik.handleChange}
        />
        <Button className="shadow" variant="success" type="submit">
          Post
        </Button>
        {formik.touched.content && formik.errors.content && (
          <div className="form-text text-danger mt-2">
            {formik.errors.content}
          </div>
        )}
      </Form>
      <Row></Row>
    </Card>
  );
};

export default Comment;
