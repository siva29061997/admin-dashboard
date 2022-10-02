import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { env } from './Config';

function Signup() {
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
                let loginData = await axios.post(`${env.api}/register`, values)
                if (loginData.status === 200) {
                    navigate("/")
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
                                            <h1 class="h4 text-gray-900 mb-4">Registration!</h1>
                                        </div>
                                        <form class="user" onSubmit={formik.handleSubmit}>
                                            <div>
                                                <h6 class="h6 text-gray-900 mb-4">Email Id</h6>
                                            </div>
                                            <div class="form-group">
                                                <input type="email" class="form-control form-control-user"
                                                    value={formik.values.email} onChange={formik.handleChange} name="email" />
                                            </div>
                                            <div>
                                                <h6 class="h6 text-gray-900 mb-4">Password</h6>
                                            </div>
                                            <div class="form-group">
                                                <input type="password" class="form-control form-control-user"
                                                    value={formik.values.password} name="password" onChange={formik.handleChange} />
                                            </div>
                                            <div class="form-group">
                                                <div class="custom-control custom-checkbox small">
                                                    <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                </div>
                                            </div>
                                            <button type='submit' class="btn btn-primary btn-user btn-block">
                                                Sign Up
                                            </button>
                                            <hr />
                                        </form>
                                        <hr />
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

export default Signup;
