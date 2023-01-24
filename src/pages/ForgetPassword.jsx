import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgetPassword() {
    const [email, setEmail] = useState('')
    const [isEmailSend, setIsEmailSend] = useState(false)


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post(`https://shibil-siva-complete-authentication.onrender.com/api/forgetpassword`, { email: email }).then((res) => {
                console.log(res)
                if (response) {
                    setIsEmailSend(true)
                    alert("Email has been sent successfully.")
                }
            }).catch((err) => {
                console.log(err)
            })

        } catch (err) {
            console.log(err)
        }
    }


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
                                            <h1 className="h4 text-gray-900 mb-4">Forgetpassword!</h1>
                                        </div>
                                        {
                                            !isEmailSend ?
                                                <form className="user" onSubmit={handleSubmit}>
                                                    <div>
                                                        <h6 className="h6 text-gray-900 mb-4">Email Id</h6>
                                                    </div>
                                                    <div className="form-group">
                                                        <span classNameName="danger"></span>
                                                        <input type="email" className="form-control form-control-user" placeholder='examble@gmail.com'
                                                            id='email' onChange={(e) => setEmail(e.target.value)} name="email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                        </div>
                                                    </div>
                                                    <button type='submit' className="btn btn-primary btn-user btn-block">
                                                        Forget Password
                                                    </button>
                                                    <Link to="/">Already have account ? </Link>
                                                    <hr />
                                                </form> :
                                                <div>Reset password link has been sent to your email address</div>
                                        }
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

export default ForgetPassword
