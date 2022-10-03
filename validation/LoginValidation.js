import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string()
    .max(50)
    .email("Invalid email format")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be 8 characters at least")
    .required("Required"),
});

export default loginSchema;
