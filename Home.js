import React from "react";
import '../Home/Home.css';
import homeimg from '../../Images/SVGIE.jpg';

class Home extends React.Component {
    render(props) {
        return (
            <div className="homeDivMain">
                <div className="homeDiv mt-5 pt-5">
                    <div className="col-md-6 col-sm-6 col-lg-6 text-center">
                        <a className="" href="#"><img src={homeimg} className="homeImage" ></img></a>
                    </div>
                    <div className="textDiv col-md-6 col-sm-6 col-lg-5 mt-5 pt-5">
                        <h3 className="text-bold">Swami Vivekananda</h3>
                       <p className="paratext">Learn... Pratice... Win...</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;