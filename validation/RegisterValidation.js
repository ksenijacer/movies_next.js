import * as Yup from "yup";

const registerSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters at least")
    .required("Required"),
  password_confirmation: Yup.string()
    .min(8, "Password must be 8 characters at least")
    .required("Required"),
  name: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
});

export default registerSchema;
