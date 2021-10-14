import * as yup from 'yup';

const formSchema = yup.object().shape({
   name: yup
        .string()
        .trim()
        .required('Username is required ya chump!')
        .min(3, 'Username must be 3 or more characters long ya chump!'),
    email: yup
        .string()
        .email('Must be a valid email address!')
        .required('Email is required!'),
    password: yup
        .string()
        .required('Password is required!')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"),
    // confirmPassword: yup
    //       .string()
    //       .required("Please confirm your password")
    //       .when("password", {
    //         is: password => (password && password.length > 0 ? true : false),
    //         then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
    terms: yup.boolean()
});

export default formSchema;