import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/auth/slice";

import Router from "next/router";

import { useFormik } from "formik";
import * as Yup from "yup";
import { selectRegisterError } from "../store/auth/selectors";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from '../styles/App.module.css'

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters at least")
    .required("Required"),
  name: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
});

export default function Register() {
  const dispatch = useDispatch();
  const registerError = useSelector(selectRegisterError);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => dispatch(register(values)),
  });

  return (
    <Container>
      <h2 className={styles.h2}>Register</h2>
      <Form onSubmit={formik.handleSubmit} className={styles.formWrapper}>
        <Form.Group className={styles.group}>
          <Form.Label className={styles.title}>Enter name</Form.Label>
          <Form.Control className={styles.input}
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.touched.name && formik.errors.name && (
            <small className="form-text text-danger mt-2">
              {formik.errors.name}
            </small>
          )}
        </Form.Group>
        <Form.Group className={styles.group}>
          <Form.Label className={styles.title}>Email address</Form.Label>
          <Form.Control className={styles.input}
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
          <Form.Control className={styles.input}
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
        <Button className={styles.button}
        variant="success" type="submit" onClick={() => Router.push('/login')}>
          Register
        </Button>
        {registerError && (
          <small className="form-text text-danger mt-2">
            User already exists
          </small>
        )}
      </Form>
    </Container>
  );
}
