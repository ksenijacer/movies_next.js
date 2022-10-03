import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/slice";

import { useFormik } from "formik";
import * as Yup from "yup";
import { selectLoginError } from "../store/auth/selectors";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Router from "next/router";

import styles from "../styles/App.module.css";

const validationSchema = Yup.object({
  email: Yup.string()
    .max(50)
    .email("Invalid email format")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters at least")
    .required("Required"),
});

export default function Login() {
  const dispatch = useDispatch();
  const loginError = useSelector(selectLoginError);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => dispatch(login(values)),
  });

  return (
    <Container>
      <h2 className={styles.h2}>Login</h2>
      <Form onSubmit={formik.handleSubmit} className={styles.formWrapper}>
        <Form.Group className={styles.group}>
          <Form.Label className={styles.title}>Email</Form.Label>
          <Form.Control
            className={styles.input}
            id="email"
            name="email"
            type="text"
            placeholder="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <small className="form-text text-danger mt-2">
              {formik.errors.email}
            </small>
          )}
        </Form.Group>
        <Form.Group className={styles.group}>
          <Form.Label className={styles.title}>Password</Form.Label>
          <Form.Control
            className={styles.input}
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password && (
            <small className="form-text text-danger mt-2">
              {formik.errors.password}
            </small>
          )}
        </Form.Group>
        <Button
          className={styles.loginButton}
          variant="success"
          type="submit"
          onClick={() => Router.push("/profile")}
        >
          Login
        </Button>
        {loginError && (
          <small className="form-text text-danger mt-2">Try again</small>
        )}
      </Form>
    </Container>
  );
}
