import React from "react";
import '../Contact/Contact.css';

class contact extends React.Component {
    render(props) {
        return (
            <div className="contactMain text-center pt-5 mt-5">
                <div className="contactHeading pb-3">
                    <h3>For more information contact below</h3>
                </div>
                    <div className="contactdiv">
                        <span>call now at<a className="ms-2" href="#!">9999999999</a></span>
                    </div>
                    <div className="ordiv">
                        <span className="orSpan">or</span>
                    </div>
                    <div className="emaildiv">
                        <span>Email at<a className="ms-2" href="#!">abc@support.com</a></span>
                    </div>
            </div>
        )
    }
}

export default contact;