import React, { useState } from 'react';
import '../css/login.css';
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Login = ({ isActive, setActive }) => {
    const [showPassword, setShowPassword] = useState(true);
    const [FormData, setFormData] = useState({
        "username": "",
        "password": ""
    });

    // navigate to another page handler
    const navigate = useNavigate();

    const input_data = [
        { name: 'username', placeholder: 'username', type: 'text', value: FormData.username },
        { name: 'password', placeholder: 'password', type: `${showPassword ? 'password' : 'text'}`, value: FormData.password }
    ]

    // handle form input fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...FormData,
            [name]: value,
        });
    }

    // handle form submit
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setActive(true);

        // Make a POST request using the fetch method
        await fetch('https://stg.dhunjam.in/account/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(FormData),
        })
            .then(response => response.json())
            .then(res => {
                if (res.status === 200) {
                    navigate('/dashboard');
                }
            })
            .catch(error => {
                console.error(error);
            });

        setFormData({
            "username": "",
            "password": ""
        });
    }

    return (
        <>
            <div className="login-component">
                <div className="page">
                    <div className="form-container">
                        <form className="contents" onSubmit={handleFormSubmit}>
                            <h1 className='heading'>Venue Admin Login</h1>
                            <div className="input-fields">
                                {
                                    input_data.map((val, ind) => {
                                        return <div key={ind} className="input-field">
                                            <input
                                                type={val.type}
                                                name={val.name}
                                                value={val.value}
                                                className='input bg-input-true'
                                                placeholder={val.placeholder}
                                                onChange={handleInputChange}
                                            />
                                            {showPassword && val.name === 'password' && <div className='eye'>
                                                <IoMdEye onClick={() => setShowPassword(!showPassword)} />
                                            </div>}
                                            {!showPassword && val.name === 'password' && <div className='eye'>
                                                <IoEyeOff onClick={() => setShowPassword(!showPassword)} />
                                            </div>}
                                        </div>
                                    })
                                }
                            </div>
                            <div className="button-main">
                                <button type='submit' className={`${isActive ? 'button active button-true' : 'button button-true'}`}>Sign in</button>
                            </div>
                            <p className='registration'>New Registration ?</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login