import React from "react";
import '../About/About.css';

class courses extends React.Component {
    render(props) {
        return (
            <div className="coursesDivMain col-md-12 col-sm-12 col-lg-12 pt-5 ps-5 ms-5 mt-5">
                <div className="coursesHeading">
                    <h2>Courses List</h2>
                </div>
                <div className="coursesDiv">
                    <ul className="courses">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstarp</li>
                        <li>React JS</li>
                        <li>Redux</li>
                        <li>TypeScript</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                        <li>Express JS</li>
                        <li>And many more other</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default courses;