import React, {useRef, useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import BACKEND_URL from '../../config';

const Result = () => {
    return (
        <Alert variant="success" className="success-msg">
        Your Message has been successfully sent.
        </Alert>
    )
}

const Error = () => {
    return (
        <Alert variant="danger" className="success-msg">
        Our Server is having Issues Right now , Try again Later.
        </Alert>
    )
}

const FormThree = () => {
    const form = useRef();

    const [ result, showresult ] = useState(false);
    const [ error, showerror ] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
    
        // Collect form data
        const formData = new FormData(form.current);
        const formJson = {
            Name: formData.get('contact-name'),
            Email: formData.get('contact-email'),
            subject: formData.get('contact-message')
        };
    
        try {
            // Post form data to backend server using fetch
            const response = await fetch(`${BACKEND_URL}/form_message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formJson)
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Success response handling
                console.log('Backend response:', data);
                showresult(true); // Show result message after successful post
                showerror(false);
            } else {
                // Error response handling
                console.error('Error posting form data:', data);
                showerror(true); // Show error message if the response is not OK
                showresult(false);
            }
        } catch (error) {
            // Exception handling
            console.error('Error posting form data:', error);
            showerror(true); // Show error message if an exception occurs
            showresult(false);
        }
    
        // Reset form and hide messages after 5 seconds
        form.current.reset();
        setTimeout(() => {
            showresult(false);
            showerror(false);
        }, 5000);
    };


    return (
        <form ref={form} onSubmit={sendEmail} className="axil-contact-form">
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="contact-name" placeholder="John Smith" required />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" name="contact-email" placeholder="example@mail.com" required />
        </div>
        <div className="form-group mb--40">
            <label>How can we help you?</label>
            <textarea name="contact-message" id="contact-message" className="form-control textarea" cols="30" rows="6"></textarea>
        </div>
        <div className="form-group text-end">
            <button type="submit" className="axil-btn btn-fill-primary w-auto btn-primary" name="submit-btn">SEND</button>
        </div>
        <div className="form-group">
            {result ? <Result /> : null}
            {error ? <Error /> : null}
        </div>

    </form>
    )
}

export default FormThree;