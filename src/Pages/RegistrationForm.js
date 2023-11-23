import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        phone: '',
        websiteUrl: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form className={styles.registrationForm} onSubmit={handleSubmit}>
            <div><h2>Register and get 14 days FREE Trial!!</h2></div>
            <label>
                First Name:
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </label>

            <label>
                Last Name:
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </label>

            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>

            <label>
                Company Name:
                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
            </label>

            <label>
                Phone:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>

            <label>
                Website URL:
                <input type="url" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} required />
            </label>

            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>

            <button type="submit">Continue</button>
        </form>
    );
};

export default RegistrationForm;
