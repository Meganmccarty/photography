import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        "name": "",
        "email": "",
        "message": ""
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    
    return (
        <div className="contact-form">
            <h1>Contact the Photographer</h1>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        required
                    >
                    </input>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        required
                    >    
                    </input>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        required
                    >
                    </textarea>
                </div>
                <div className="form-group">
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;