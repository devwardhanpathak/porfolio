import React from 'react';
import emailjs from 'emailjs-com';
import '../css/contact.css';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('my_portfolio', 'template_pn9gwh3', e.target, 'user_TrJhFQroBtQiDIYUz9Edf')
            .then((result) => {
                alert("Message Sent");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <>
            <div className="container-fluid">
                <div className='row'>
                    <h1 className="contact-heading">Contact</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="contact-form-div mt-4">
                            <form onSubmit={sendEmail}>
                                <input className="input-tag " name="name" required type="text" placeholder="Name"></input>
                                <input className="input-tag" name="email" required type="email" placeholder="Email"></input>
                                <textarea className="input-tag text-area-tag" name="message" required cols="30" rows="3" placeholder="Message"></textarea>
                                <input className="btn-class" type="submit" value="Send"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;