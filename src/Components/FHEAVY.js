import React, { Component } from "react";
class Falconheavy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0,
    };
  }
  update = () => {
    if (this.state.counter1 < 3) {
      this.setState({ counter1: this.state.counter1 + 1 });
    } else {
      this.setState({ counter1: 3 });
    }
    if (this.state.counter2 < 7) {
      this.setState({ counter2: this.state.counter2 + 1 });
    } else {
      this.setState({ counter2: 7 });
    }
    if (this.state.counter3 < 4) {
      this.setState({ counter3: this.state.counter3 + 1 });
    } else {
      this.setState({ counter3: 4 });
    }
    setTimeout(this.update, 300);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-1" onLoad={this.update}>
          <img src="images/fheavy1.jpg"  alt='falheavy'></img>
          <div className="falcon-center">
            <h1 >FALCON HEAVY</h1>
            <p >
              THE WORLD'S MOST POWERFUL ROCKET
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
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-5">
              <p className="text-left">
                Falcon Heavy is the most powerful operational rocket in the
                world by a factor of two. With the ability to lift into orbit
                nearly 64 metric tons (141,000 lb) Falcon Heavy can lift more
                than twice the payload of the next closest operational vehicle,
                the Delta IV Heavy. Falcon Heavy is composed of three Falcon 9
                nine-engine cores whose 27 Merlin engines together generate more
                than 5 million pounds of thrust at liftoff, equal to
                approximately eighteen 747 aircraft.
              </p>
            </div>
            <div className="col-12 col-sm-5 offset-sm-1 align-self-center">
              <img
                src="images/fh1.gif"
                className='firstimg'
                alt='FalconHeavy'
              ></img>
            </div>
          </div>
          <div className="row " style={{marginTop:'5rem'}}>
            <div className="col-12 col-sm-5 ">
              <table
                className="table text-white "
                style={{ marginTop: "3rem" }}
              >
                <tbody>
                  <tr>
                    <td>HEIGHT</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      8.1 m /<i style={{ color: "#ccc" }}>26.7 ft</i>
                    </td>
                  </tr>
                  <tr>
                    <td>DIAMETER</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      4 m /<i style={{ color: "#ccc" }}>13 ft</i>
                    </td>
                  </tr>
                  <tr>
                    <td>CAPSULE VOLUME</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      9.3 m<sup>3</sup> /
                      <i style={{ color: "#ccc" }}>
                        {" "}
                        328 ft<sup>3</sup>
                      </i>
                    </td>
                  </tr>
                  <tr>
                    <td>TRUNK VOLUME</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      37 m<sup>3</sup> /
                      <i style={{ color: "#ccc" }}>
                        1300 ft<sup>3</sup>
                      </i>
                    </td>
                  </tr>
                  <tr>
                    <td>LAUNCH PAYLOAD MASS</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      6,000 Kg/<i style={{ color: "#ccc" }}>13,228 lbs</i>
                    </td>
                  </tr>
                  <tr>
                    <td>RETURN PAYLOAD MASS</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      3,000 Kg /<i style={{ color: "#ccc" }}>6,614 lbs</i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-12 col-sm-5 offset-sm-2 ">
              <img 
                src="images/fhlogo.jpg"
                  className='logoimg1'

                alt="falconheavy"
              ></img>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container  text-center" style={{ marginTop: "4rem" }}>
          <h1 className='fheading'>
          FALCON HEAVY FIRST FLIGHT
          </h1>
          <iframe
            width="820"
            height="445"
           
            title='falconheavy'
            src="https://www.youtube.com/embed/A0FZIwabctw?autoplay=1&mute=1"
          ></iframe>
          <hr></hr>
        </div>
        <div className="container" style={{ minHeight: "600px", marginTop: '1rem' }}>
          <div id="demo" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
              <li data-target="#demo" data-slide-to="3"></li>
            
            </ul>
            <div className="carousel-inner">
              <div className="carousel-item active ">
                <img src="images/fheavy.jpg" style={{ height: "70vh" }} alt='FalconHeavy'></img>
                <span
                  
                >
                  Falcon Heavy lifts off from pad 39A at Kennedy Space Center 
                </span>
              </div>
              <div className="carousel-item">
                <img src="images/fh2.jpg" style={{ height: "70vh" }}  alt='FalconHeavy'></img>
                <span
                  
                >
                  Starman in Space
                </span>
              </div>
              <div className="carousel-item ">
                <img src="images/fheavy1.jpg" style={{ height: "70vh" }}  alt='FalconHeavy'></img>
                <span
                
                >
                  All 27 Merlin Engines lit on Falcon Heavy
                </span>
              </div>
              <div className="carousel-item">
                <img src="images/fh4.gif" style={{ height: "70vh" }}  alt='FalconHeavy'></img>
                <span 
                  
                >
                 Falcon Heavy's side boosters land at LZ-1 and LZ-2 at Cape Canaveral
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
export default Falconheavy;
