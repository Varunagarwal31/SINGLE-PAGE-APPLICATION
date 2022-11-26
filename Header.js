import React from "react";
import '../Header/Header.css';

class Header extends React.Component {
    render(props) {
        return (
            <div className="headerDivMain">
                <nav className="navbar navbar-nav">
                    <div className="headerDiv container">
                        <span>Plan</span>
                        <span>Learn...</span>
                        <span>Pratice...</span>
                        <span>Win...</span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;