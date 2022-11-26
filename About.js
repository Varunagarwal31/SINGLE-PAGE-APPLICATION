import React from "react";
import '../About/About.css';

class About extends React.Component {
    render(props) {
        return (
            <div className="aboutDivMain col-md-12 col-sm-12 col-lg-12 pt-5 ps-5 ms-5 mt-5">
                <div className="aboutHeading">
                    <h2>About</h2>
                </div>
                <div className="aboutDiv">
                    <ul className="">
                        <li>Your on about page</li>
                        <li>Just explore</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default About;