import * as Yup from "yup";

const createMovieSchema = Yup.object().shape({
  title: Yup.string()
    .max(100, "Must be 100 characters or less")
    .required("Required"),
  description: Yup.string()
    .max(500, "Must be 500 characters or less")
    .required("Required"),
  image_url: Yup.string().max(500, "Must be 500 characters or less"),
  genre: Yup.array().min(1),
});

export default createMovieSchema;
