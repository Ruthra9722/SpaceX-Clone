import React,{Component} from'react'
import {Link} from 'react-router-dom'
class Update extends Component
{
    render()
    {
        return(
            <React.Fragment>
                <div className='container-1'>
                    <img src='images/gps3.jpg' width='100%' height='100vh'></img>
                <div className='bottom-left1'>
                <p >
            UPCOMING LAUNCH

            </p>
            <h2 className='c1' style={{fontWeight: 'bold' }}>
            GPS III SPACE VEHICLE 04 MISSION
            </h2>
            <br></br>
          <a href='#space'>  <button className="btn btn-outline-light btn-lg">UPDATE</button></a>

                </div>
                </div>
                <div className='container' id='space'>
                    <div className='col-12  '>
<p  className='u2'>SpaceX is standing down from Falcon 9’s launch attempt of GPS III Space Vehicle 04 from Space Launch Complex 40 (SLC-40) at Cape Canaveral Air Force Station on Friday, October 2. The team is evaluating the next earliest launch opportunity and we will provide an update as soon as a date is confirmed.</p>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
export default Update;