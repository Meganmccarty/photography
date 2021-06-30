import React from 'react';

function ContactForm() {
    return (

        <div className="contact-form">
            <h1>Contact the Photographer</h1>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control"></input>
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <input type="submit"></input>
                </div>

            </form>
        </div>

    )
}

export default ContactForm;