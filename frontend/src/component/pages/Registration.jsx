import React, { useState } from 'react';
import registration from '../../../public/images/registration.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import "../../style/Registration.css";

const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm();

    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

    const [societies, setSocieties] = useState([
        "Shantigram residency",
        "Russett House Park",
        "Saurya residency",
        "Shamruddh Avenyu",
        "Utsav society",
        "Murlidhar",
        "Shree Sharanam",
        "vasantnagar township"
    ]);

    const [newSociety, setNewSociety] = useState({
        name: '',
        address: '',
        country: '',
        state: '',
        city: '',
        zip: ''
    });

    // Handle form submission
    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        // Process registration logic
        alert(JSON.stringify(data));
    };

    // Handle input change in the new society form
    const handleNewSocietyChange = (e) => {
        setNewSociety({ ...newSociety, [e.target.name]: e.target.value });
    };

    // Handle adding new society to dropdown
    const handleAddSociety = () => {
        if (newSociety.name.trim() !== "") {
            setSocieties([...societies, newSociety.name]);
            setNewSociety({ name: '', address: '', country: '', state: '', city: '', zip: '' });
        }
    };

    return (
        <div className="Logn_bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 pt-5 ps-4 Login_col_bg">
                        <h1 className='bg-logotext-custom'>Dash<span className='text-dark'>Stack</span></h1>
                        <div className="text-center mt-5 pt-5">
                            <img className='Loginimg mt-5' src={registration} alt="Loginimg" />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center p-4">
                        <div className="registration-form bg-white shadow-sm rounded p-4">
                            <h2 className="text-center mb-4">Registration</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* Name Row */}
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>First Name<span className="required">*</span></label>
                                            <input
                                                {...register("firstName", { required: true })}
                                                className="form-control"
                                                placeholder="Enter First Name"
                                            />
                                            {errors.firstName && <p className="text-danger">First name is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Last Name<span className="required">*</span></label>
                                            <input
                                                {...register("lastName", { required: true })}
                                                className="form-control"
                                                placeholder="Enter Last Name"
                                            />
                                            {errors.lastName && <p className="text-danger">Last name is required.</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Row */}
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email Address<span className="required">*</span></label>
                                            <input
                                                type="email"
                                                {...register("email", { required: true })}
                                                className="form-control"
                                                placeholder="Enter Email Address"
                                            />
                                            {errors.email && <p className="text-danger">Email is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone Number<span className="required">*</span></label>
                                            <input
                                                type="tel"
                                                {...register("phone", {
                                                    required: true,
                                                    pattern: {
                                                        value: /^(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|^\d{10,15}$)$/i,
                                                    }
                                                })}

                                                className="form-control"
                                                placeholder="91+"
                                            />
                                            {errors.phone && <p className="text-danger">Phone number is required.</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Location Row */}
                                <div className="row mb-3">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Country<span className="required">*</span></label>
                                            <input
                                                {...register("country", { required: true })}
                                                className="form-control"
                                                placeholder="Enter Country"
                                            />
                                            {errors.country && <p className="text-danger">Country is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>State<span className="required">*</span></label>
                                            <input
                                                {...register("state", { required: true })}
                                                className="form-control"
                                                placeholder="Enter State"
                                            />
                                            {errors.state && <p className="text-danger">State is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>City<span className="required">*</span></label>
                                            <input
                                                {...register("city", { required: true })}
                                                className="form-control"
                                                placeholder="Enter City"
                                            />
                                            {errors.city && <p className="text-danger">City is required.</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Society Selection */}
                                <div className="form-group mb-3">
                                    <label htmlFor="societySelect" className="form-label">Select Society<span className="text-danger">*</span></label>
                                    <select
                                        {...register("society", { required: true })}
                                        className="form-select"
                                        id="societySelect"
                                    >
                                        <option value="">Select Society</option>
                                        {societies.map((society, index) => (
                                            <option key={index} value={society}>{society}</option>
                                        ))}
                                    </select>
                                    {errors.society && <p className="text-danger">Society is required.</p>}
                                    <button
                                        type="button"
                                        className="btn Login_button fw-medium mt-3 w-100"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                    >
                                        Create Society
                                    </button>
                                </div>

                                {/* Modal for creating new society */}
                                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Create New Society</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                {/* No form here, just inputs */}
                                                <div className="mb-3">
                                                    <label className="form-label">Society Name*</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="name"
                                                        value={newSociety.name}
                                                        onChange={handleNewSocietyChange}
                                                        placeholder="Enter Name"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Society Address*</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="address"
                                                        value={newSociety.address}
                                                        onChange={handleNewSocietyChange}
                                                        placeholder="Enter Address"
                                                    />
                                                </div>
                                                <div className="row">
                                                    <div className="mb-3 col-6">
                                                        <label className="form-label">Country*</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="country"
                                                            value={newSociety.country}
                                                            onChange={handleNewSocietyChange}
                                                            placeholder="Enter Country"
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-6">
                                                        <label className="form-label">State*</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="state"
                                                            value={newSociety.state}
                                                            onChange={handleNewSocietyChange}
                                                            placeholder="Enter State"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="mb-3 col-6">
                                                        <label className="form-label">City*</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="city"
                                                            value={newSociety.city}
                                                            onChange={handleNewSocietyChange}
                                                            placeholder="Enter City"
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-6">
                                                        <label className="form-label">Zip Code*</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="zip"
                                                            value={newSociety.zip}
                                                            onChange={handleNewSocietyChange}
                                                            placeholder="Enter Zip Code"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn Login_button" data-bs-dismiss="modal" onClick={handleAddSociety}>Add Society</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Password Row */}
                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Password<span className="required">*</span></label>
                                            <div className="input-group">
                                                <input
                                                    type={passwordShown ? "text" : "password"}
                                                    {...register("password", { required: true })}
                                                    className="form-control"
                                                    placeholder="Enter Password"
                                                    autoComplete="new-password"  // Fixed this
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => setPasswordShown(!passwordShown)}
                                                >
                                                    {passwordShown ? "🙈" : "👁️"}
                                                </button>
                                            </div>
                                            {errors.password && <p className="text-danger">Password is required.</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Confirm Password<span className="required">*</span></label>
                                            <div className="input-group">
                                                <input
                                                    type={confirmPasswordShown ? "text" : "password"}
                                                    {...register("confirmPassword", { required: true })}
                                                    className="form-control"
                                                    placeholder="Confirm Password"
                                                    autoComplete="new-password"  // Fixed this
                                                />
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
                                                >
                                                    {confirmPasswordShown ? "🙈" : "👁️"}
                                                </button>
                                            </div>
                                            {errors.confirmPassword && <p className="text-danger">Please confirm your password.</p>}
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center">
                                    <button type="submit" className="btn Login_button fw-medium mt-3 w-100">Register</button>
                                </div>
                            </form>
                            <div className="text-center mt-3">
                                <span>Already have an account? <Link className='text-decoration-none m_bg-logotext-custom' to="/">Sign In</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
