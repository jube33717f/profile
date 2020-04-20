import React, { Component } from "react";
import './services.scss';
import Weatherapp from '../../assets/3-weatherapp.jpg';
import Sedditapp from '../../assets/2-seddit.jpg';
import Airtasker from '../../assets/4-airtasker.jpg';
import Gamepredict from '../../assets/1-game.jpg';
export default class Services extends Component{
    render(){
        return(
        <div className="pf__service">
            <section className="pf__service--fp" >
                <h1>Service</h1>
            </section>
            <section className="pf__service--sp" >
                <div><img src='https://community.fornobravo.com/filedata/fetch?id=317907&d=1453847201'></img></div>
                <h2>Move bricks</h2>
            </section>
            <div className="line"></div>
            <section className="pf__service--tp" >
                <h1>Works  </h1>
                <div className="pf__service--tp-box">
                    <div className='imgbox'><img src={Weatherapp}></img></div>
                    <h3>Weather app</h3>
                </div>
                <div className="pf__service--tp-box">
                    <div className='imgbox'><img src={Sedditapp}></img></div>
                    <h3>Seddit(reddit)</h3>
                </div>
                <div className="pf__service--tp-box">
                    <div className='imgbox'><img src={Gamepredict}></img></div>
                    <h3>Game Predict</h3>
                </div>
                <div className="pf__service--tp-box">
                    <div className='imgbox'><img src={Airtasker}></img></div>
                    <h3>Airtasker</h3>
                </div>
                
            </section>
            
        </div>)
    }
}
