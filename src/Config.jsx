import * as yup from "yup";
export const env = {
    // api : "https://nodejs-first-01.herokuapp.com"
    api: "https://crud-application-anz4.onrender.com"
}

export const loginSchema = yup.object().shape({
    email: yup.string().email().required("please enter the valid email*"),
    password: yup.string().required("please enter the valid password*"),
});