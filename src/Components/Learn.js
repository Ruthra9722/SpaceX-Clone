import React, { Component } from 'react'
import { Button } from 'reactstrap'
class Learn extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container' style={{ marginTop: '6rem' }}>
                    <div className='col-12 col-sm-12 align-self-center'>
                        <iframe id='video' width='1090' height='480' src='https://www.youtube.com/embed/xY96v0OIcK4?autoplay=0&mute=1'></iframe>
                    </div>
                    <span style={{ color: '#ccc' }}>MAY 30,2020</span><br></br>
                    <div className='col-10 col-sm-7'>
                        <h3 className='l1'>CREW DEMO-2 LAUNCH AND DOCKING</h3>
                    </div>
                    <div className='col-12 align-self-center'>
                        <p className='l2'>On Saturday, May 30 at 3:22 p.m. EDT, SpaceX’s Falcon 9 launched Crew Dragon’s second demonstration (Demo-2) mission from Launch Complex 39A (LC-39A) at NASA’s Kennedy Space Center in Florida, and the next day Crew Dragon autonomously docked to the International Space Station. This test flight with NASA astronauts Bob Behnken and Doug Hurley on board the Dragon spacecraft returned human spaceflight to the United States.</p>

                    </div>
                    <div className='col-12 align-self-center'>
                        <p className='l2'>Demo-2 is the final major test for SpaceX’s human spaceflight system to be certified by NASA for operational crew missions to and from the International Space Station. SpaceX is returning human spaceflight to the United States with one of the safest, most advanced systems ever built, and NASA’s Commercial Crew Program is a turning point for America’s future in space exploration that lays the groundwork for future missions to the Moon, Mars, and beyond.</p>

                    </div>
                    <div className='col-12 '>
                        <p className='l2'>You can watch a replay of the launch above.</p>
                        <a className='btn btn-outline-secondary  btn-lg' href='#video'>WATCH NOW</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Learn;