import React, { Component } from "react";
class Dragon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter1: 0,
      counter2: 0,
      counter3: 0,
    };
  }
  update = () => {
    if (this.state.counter1 < 23) {
      this.setState({ counter1: this.state.counter1 + 1 });
    } else {
      this.setState({ counter1: 23 });
    }
    if (this.state.counter2 < 22) {
      this.setState({ counter2: this.state.counter2 + 1 });
    } else {
      this.setState({ counter2: 22 });
    }
    if (this.state.counter3 < 9) {
      this.setState({ counter3: this.state.counter3 + 1 });
    } else {
      this.setState({ counter3: 9 });
    }
    setTimeout(this.update, 100);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-1" onLoad={this.update}>
          <img src="images/dragon.jpg"  alt='dragon'></img>
          <div className="falcon-center">
            <h1 >DRAGON</h1>
            <p >
              SENDING CARGOS AND HUMANS INTO SPACE
            </p>
          </div>
        </div>
        <div className="container-2" >
          <div className="counters">
            <div className="counter1">
              <span>{this.state.counter1}</span>
              <br></br>
              <p>TOTAL LAUNCHES</p>
            </div>
            <div className="counter2">
              <span>{this.state.counter2}</span>
              <br></br>
              <p>VISITS TO THE ISS</p>
            </div>
            <div className="counter3">
              <span>{this.state.counter3}</span> <br></br>
              <p >REFLOWN MISSIONS</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-5">
              <p className="text-left">
                The Dragon spacecraft is capable of carrying up to 7 passengers
                to and from Earth orbit, and beyond. It is the only spacecraft
                currently flying that is capable of returning significant
                amounts of cargo to Earth, and is the first private spacecraft
                to take humans to the space station.
              </p>
            </div>
            <div className="col-12 col-sm-5 offset-sm-1 align-self-center">
              <img
                src="images/d1.png"
                className='firstimg'
                alt="DRAGON"
              ></img>
            </div>
          </div>
          <div className="row " style={{marginTop:'5rem'}}>
            <div className="col-12 col-sm-5 ">
            <table className="table text-white " style={{marginTop:'3rem'}}  >
                <tbody>
                  <tr>
                    <td>HEIGHT</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      8.1 m /<i style={{color:'#ccc'}}>26.7 ft</i>
                    </td>
                  </tr>
                  <tr>
                    <td>DIAMETER</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      4 m /<i  style={{color:'#ccc'}}>13 ft</i>
                    </td>
                  </tr>
                  <tr>
                    <td>CAPSULE VOLUME</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                     9.3 m<sup>3</sup> /<i  style={{color:'#ccc'}}> 328 ft<sup>3</sup></i>
                    </td>
                  </tr>
                  <tr>
                    <td>TRUNK VOLUME</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      37 m<sup>3</sup> /<i  style={{color:'#ccc'}}>1300 ft<sup>3</sup></i>
                    </td>
                  </tr>
                  <tr>
                    <td>LAUNCH PAYLOAD MASS</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      6,000 Kg/<i  style={{color:'#ccc'}}>13,228 lbs</i>
                    </td>
                  </tr>
                  <tr>
                    <td>RETURN PAYLOAD MASS</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      3,000 Kg /<i  style={{color:'#ccc'}}>6,614 lbs</i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='col-12 col-sm-5 offset-sm-2 ' >
              <img src='images/dr1.gif' className='logoimg1' alt='dragon'></img>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container  text-center" style={{ marginTop: "4rem" }}>
          <h1 className='fheading'>
            CREW DRAGON INTERIOR
          </h1>
          <iframe
            width="820"
            height="445"
           
            src="https://www.youtube.com/embed/xjSb_b4TtxI?autoplay=1&mute=1"  title='spacex'
          ></iframe>
          <hr></hr>
        </div>
        <div className="container" style={{ minHeight: "600px", marginTop: '1rem'  }}>
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
                <img src="images/c1.jpg" style={{ height: "500px" }}  alt='dragon'></img>
                <span
                  
                >
                  Cargo Dragon Approaching The ISS
                </span>
              </div>
              <div className="carousel-item">
                <img src="images/c2.jpg" style={{ height: "500px" }}  alt='dragon'></img>
                <span
                 
                >
                  Dragon Approaching The ISS
                </span>
              </div>
              <div className="carousel-item ">
                <img src="images/c3.jpg" style={{ height: "500px" }}  alt='dragon'></img>
                <span
                 
                >
                  Docking Process Going On
                </span>
              </div>
              <div className="carousel-item">
                <img src="images/c4.jpg" style={{ height: "500px" }}  alt='dragon'></img>
                <span
                  
                >
                  Doug Hurley's and Bob Behnken On Their Way to ISS
                </span>
              </div>
              <div className="carousel-item">
                <img src="images/c5.jpg" style={{ height: "500px" }}  alt='dragon'></img>
                <span
                
                >
                  INTERIOR Of DRAGON CAPSULE
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
export default Dragon;
