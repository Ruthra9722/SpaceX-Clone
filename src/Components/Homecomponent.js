import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container1">
          <img
            src="images/gps.jpg"
            width="100%"
            height="660px"
            alt="falcon9"
          ></img>
          <div className="bottom-right">
            <p>UPCOMING LAUNCH</p>
            <p className="c1" style={{ fontWeight: "bold" }}>
              GPS III SPACE VEHICLE 04 MISSION
            </p>{" "}
            <br></br>
            <Link to="/update">
              {" "}
              <button className="btn btn-outline-light btn-lg">UPDATE</button>
            </Link>
          </div>
        </div>

        <div className="container2">
          <img
            src="images/flight.jpg"
            alt="human space flight"
            width="100%"
            height="650px"
          ></img>
          <div className="bottom-left">
            <h4>RETURNING HUMAN</h4>
            <h4>SPACEFLIGHTS TO THE</h4>

            <h4>TO THE UNITED STATES</h4>
            <Link to="/learn">
              {" "}
              <a type="button" href="#" className="btn btn-outline-dark btn-lg">
                LEARN MORE
              </a>
            </Link>
          </div>
        </div>

        <div className="container3" style={{ marginBottom: "2rem" }}>
          <img src="images/lunar.jpg" width="100%" height="570px"></img>
          <div className="text-right">
            <p style={{ fontSize: "20px" }}>DEC 03 2022</p>
            <h4>NASA SELECTS LUNAR</h4>
            <h4>OPTIMIZED STARSHIP</h4>
            <p style={{ marginRight: "18px", fontSize: "15px" }}>
              NASA selected SpaceX to develop a lunar optimized Starship to{" "}
              <br></br>
              transport crew between lunar orbit and the surface of the Moon
              <br></br>
              as part of NASA’s Artemis program.
            </p>
            <Link to="/lunar">
              {" "}
              <a type="button" className="btn btn-outline-light btn-lg">
                LEARN MORE
              </a>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
