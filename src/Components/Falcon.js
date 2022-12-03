import React, { Component } from "react";


class Falcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0,
    };
  }
  update = () => {

    if (this.state.counter1 < 92) {
      this.setState({ counter1: this.state.counter1 + 1 });
    } else {
      this.setState({ counter1: 92 });
    }
    if (this.state.counter2 < 53) {
      this.setState({ counter2: this.state.counter2 + 1 });
    } else {
      this.setState({ counter2: 53 });
    }
    if (this.state.counter3 < 38) {
      this.setState({ counter3: this.state.counter3 + 1 });
    } else {
      this.setState({ counter3: 38 });
    }
    setTimeout(this.update, 40);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-1" onLoad={this.update}>
          <img src="images/falcon.jpg" alt='falcon'></img>
          
          <div className="falcon-center" >
            <h1 >FALCON 9</h1>
            <p >
              FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT
            </p>
          </div>
         
        </div>
        <div className="container-2">
          <div className="counters">
            <div className="counter1">
              <span>{this.state.counter1}</span>
              <br></br>
              <p>TOTAL LAUNCHES</p>
            </div>
            <div className="counter2">
              <span>{this.state.counter2}</span>
              <br></br>
              <p>TOTAL LANDINGS</p>
            </div>
            <div className="counter3">
              <span>{this.state.counter3}</span> <br></br>
              <p>REFLOWN ROCKETS</p>
            </div>
          </div>
        </div>
        <div className='container' >
          <div className="row">
            <div className="col-12 col-sm-5"  >
             
              <p className="text-left"  >
                Falcon 9 is a reusable, two-stage rocket designed and
                manufactured by SpaceX for the reliable and safe transport of
                people and payloads into Earth orbit and beyond. Falcon 9 is the
                world’s first orbital class reusable rocket. Reusability allows
                SpaceX to refly the most expensive parts of the rocket, which in
                turn drives down the cost of space access.
              </p>
             
            </div>
            <div className="col-12 col-sm-5  align-self-center offset-sm-1"    >
              <img
                src="images/f9.gif"
                className='firstimg'
                alt="falcon"
              ></img>
            </div>
          </div>
          <div className="row " style={{ marginTop: '6rem' }}>
            <div className="col-12 col-sm-5 ">
              <table
                className="table text-white  "

              >
                <tbody>
                  <tr>
                    <td>HEIGHT</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      70 m /<i style={{ color: "#ccc" }}>229.6 ft</i>
                    </td>
                  </tr>
                  <tr>
                    <td>DIAMETER</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      3.7 m /<i style={{ color: "#ccc" }}>12 ft</i>
                    </td>
                  </tr>
                  <tr>
                    <td>MASS</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      549,054 Kg /
                      <i style={{ color: "#ccc" }}>
                        1,207,920 lb

                      </i>
                    </td>
                  </tr>
                  <tr>
                    <td>PAYLOAD TO LEO</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      22,800 Kg /
                      <i style={{ color: "#ccc" }}>
                        50,265 lb
                      </i>
                    </td>
                  </tr>
                  <tr>
                    <td>PAYLOAD TO GTO</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      8,300 Kg/<i style={{ color: "#ccc" }}>18,300 lb</i>
                    </td>
                  </tr>
                  <tr>
                    <td>PAYLOAD TO MARS</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      4,020 Kg /<i style={{ color: "#ccc" }}>8,860 lb</i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-12 col-sm-5 offset-sm-2">
              <img
                src="images/falcon.png"
                className='logoimg'
                alt="falcon"
              ></img>
            </div>
            <div className='col-12 col-sm-11  offset-sm-1  ' >
              <h1 className='fheading'>FALCON 9 IN FLIGHT</h1>
              <iframe width='820' height='445'
                src="https://www.youtube.com/embed/sj9IJcETQT0?autoplay=1&mute=1"></iframe>
            </div>
          </div>

        </div>
        <div className="container" style={{ minHeight: "600px", marginTop: '1rem' }}>
          <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
              <li data-target="#demo" data-slide-to="3"></li>
              <li data-target="#demo" data-slide-to="4"></li>
            </ul>
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <img src="images/f1.jpg" style={{ height: "70vh" }} alt="falcon"></img>
                <span

                >
                  Falcon 9 lifts off with its Iridium-5 payload
                </span>
              </div>
              <div className="carousel-item">
                <img src="images/fheavy1.jpg" style={{ height: "70vh" }} alt="falcon"></img>
                <span

                >
                  Close-up on Merlin engines of Falcon 9 during Lift off
                </span>
              </div>
              <div className="carousel-item ">
                <img src="images/f3.jpg" style={{ height: "70vh" }} alt="falcon"></img>
                <span

                >
                  Falcon 9 with its Radarsat payload at sunset before Launch
                </span>
              </div>
              <div className="carousel-item">
                <img src="images/f4.jpg" style={{ height: "70vh" }} alt="falcon"></img>
                <span

                >
                  Falcon 9 Lands at Cape Canaveral
                </span>
              </div>
              <div className="carousel-item">
                <img src="images/f5.gif" style={{ height: "70vh" }} alt="falcon"></img>
                <span

                >
                  Falcon 9 Proves Reusability of Rockets
                </span>
              </div>
            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>



      </React.Fragment>
    );
  }
}
export default Falcon;
