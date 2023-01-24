import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'

function ResetPassword() {
    const [userData, setUserData] = useState({ userId: '', token: '', password: '' });
    const navigate = useNavigate();
    const search = useLocation().search;
    const token = new URLSearchParams(search).get('token');
    const userId = new URLSearchParams(search).get('id');

    useEffect(() => {
        setUserData({ ...userData, userId: userId, token: token })
    }, [])

    const handleLogin = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post(`https://shibil-siva-complete-authentication.onrender.com/api/resetpassword`, userData);
            if (response) {
                navigate('/portal/dashbord');
            }
        } catch (error) {
            console.log('Error: ', error);
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
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className="user" onSubmit={handleLogin}>
                                            <div>
                                                <h6 className="h6 text-gray-900 mb-4">Reset Password</h6>
                                            </div>
                                            <div className="form-group">
                                                <span classNameName="errors"></span>
                                                <input type="password" className="form-control form-control-user" placeholder='******'
                                                    id="password" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                                            </div>
                                            <button type='submit' className="btn btn-primary btn-user btn-block">
                                                Login
                                            </button>
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

export default ResetPassword
