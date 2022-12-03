import React, { Component } from "react";
class Lunar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-1">
          <img src="images/lunar.jpg" width="100%" height="100vh"></img>
        </div>
        <div
          className="container"
          style={{ marginTop: "6rem", marginBottom: "3rem" }}
        >
          <span style={{ color: "#ccc" }}>DEC 03, 2022</span>
          <br></br>
          <div className="col-10 col-sm-7">
            <h3 className="l1">NASA SELECTS LUNAR OPTIMIZED STARSHIP</h3>
          </div>
          <div className="col-12 align-self-center">
            <p className="l2">
              NASA selected SpaceX to develop a lunar optimized Starship to
              transport crew between lunar orbit and the surface of the Moon as
              part of NASA’s Artemis program.
            </p>
          </div>
          <div className="col-12 align-self-center">
            <p className="l2">
              A lunar optimized Starship can fly many times between the surface
              of the Moon and lunar orbit without flaps or heat shielding
              required for Earth return. With large habitable and storage
              volume, Starship is capable of delivering significant amounts of
              cargo for research and to support robust operations on the lunar
              surface to enable a sustainable Moon base.
            </p>
          </div>
          <div className="col-12 ">
            <p className="l2">
              Last year, NASA announced Starship as eligible for the Commercial
              Lunar Payload Services (CLPS) initiative – to deliver payloads
              between Earth and the Moon, and to enable humans to return to the
              Moon.
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Lunar;
