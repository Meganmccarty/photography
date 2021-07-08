import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        "name": "",
        "email": "",
        "message": ""
    })
    const [thanks, setThanks] = useState("")

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        fetch('https://www.meganmccartyphotography.com/api/messages/', configObj)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
        setFormData({
            "name": "",
            "email": "",
            "message": ""
        })
        return setThanks("Thank you! Your message has been received!")
    }

    return (
        <div className="contact-form">
            {!thanks ?
                <>
                    <h1>Contact the Photographer</h1>
                    <form onSubmit={handleSubmit}>
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
                </>
                :
                <h1>{thanks}</h1>
            }
        </div>
    )
}

export default ContactForm;