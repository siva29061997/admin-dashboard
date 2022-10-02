import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { env } from './Config';

function Login() {
    let navigate = useNavigate();

    // let login = () => {
    //     if (userName == "abc" && pass == "123") {
    //         navigate("/portal/dashbord")
    //     }
    //     else {
    //         alert("wrong")
    //     }
    // };
    let formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post(`${env.api}/login`, values)
                if (loginData.status === 200) {
                    navigate("/portal/dashbord")
                    window.localStorage.setItem("app-token", loginData.data.token)
                }
                console.log(loginData)
            } catch (error) {
                alert(error.response.data.message)
                console.log(error)
            }
        }
    })
    return (
        <div class="container">

            {/* <!-- Outer Row --> */}
            <div class="row justify-content-center">

                <div class="col-xl-10 col-lg-12 col-md-9">

                    <div class="card o-hidden border-0 shadow-lg my-5">
                        <div class="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div class="row">
                                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div class="col-lg-6">
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form class="user" onSubmit={formik.handleSubmit}>
                                            <div class="form-group">
                                                <input type="email" class="form-control form-control-user"
                                                    value={formik.values.email} onChange={formik.handleChange} name="email" />
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-user"
                                                    value={formik.values.password} name="password" onChange={formik.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                    <label class="custom-control-label" for="customCheck">Remember
                                                        Me</label>
                                                </div>
                                            </div>
                                            <button type='submit' class="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>
                                            <hr />
                                            <a href="index.html" class="btn btn-google btn-user btn-block">
                                                <i class="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                                <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </form>
                                        <hr />
                                        <div class="text-center">
                                            <Link to={`\signup`}>Forgot Password?</Link>
                                        </div>
                                        <div class="text-center">
                                            <Link to={`\signup`} >Create an Account!</Link>
                                            {/* <Link to={`/portal/users/${user._id}`} className='btn btn-sm btn-primary mr-1'>View</Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login;
