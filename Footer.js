import React from "react";
import '../Footer/Footer.css';

class Footer extends React.Component {
    render(props) {
        return (
            <div className="footerdiv ">
                <div className="row pt-3 footerMain ">
                    <div className="footerDiv col-md-6 col-sm-6 col-lg-7 ">
                        <h6 className="fw-bold pb-2">Connect with Us</h6>
                        <div>
                        <p>
                            <a className="" href="#!">Facebook</a>
                        </p>
                        <p>
                            <a className="" href="#!">Twitter</a>
                        </p>
                        <p>
                            <a className="" href="#!">Instagram</a>
                        </p>
                        <p>
                            <a className="" href="#!">Linked in</a>
                        </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-5 ">
                        <h6 className="fw-bold pb-2">Let Us Help You</h6>
                        <div>
                        <p>
                            <a className="hoverStyle" href="#!">Search</a>
                        </p>
                        <p>
                            <a className="hoverStyle" href="#!">Your Account</a>
                        </p>
                        <p>
                            <a className="hoverStyle" href="#!">Talk to expert</a>
                        </p>
                        <p>
                            <a className="hoverStyle" href="#!">Help</a>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;