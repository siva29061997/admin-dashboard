import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { env, loginSchema } from '../Config';

function Signup() {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        }, validationSchema: loginSchema,
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
        <div className="container">

            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Registration!</h1>
                                        </div>
                                        <form className="user" onSubmit={formik.handleSubmit}>
                                            <div>
                                                <h6 className="h6 text-gray-900 mb-4">Email Id</h6>
                                            </div>
                                            <div className="form-group">
                                                <span classNameName="danger">{formik.errors.email}</span>
                                                <input type="email" className="form-control form-control-user"
                                                    value={formik.values.email} onChange={formik.handleChange} name="email" />
                                            </div>
                                            <div>
                                                <h6 className="h6 text-gray-900 mb-4">Password</h6>
                                            </div>
                                            <div className="form-group">
                                                <span classNameName="errors">{formik.errors.password}</span>
                                                <input type="password" className="form-control form-control-user"
                                                    value={formik.values.password} name="password" onChange={formik.handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                </div>
                                            </div>
                                            <button type='submit' className="btn btn-primary btn-user btn-block">
                                                Sign Up
                                            </button>
                                            <Link to="/">Already have account ? </Link>
                                            <hr />
                                        </form>
                                        {/* <hr /> */}
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
