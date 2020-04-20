import React,{Component} from 'react'
import { GoogleApiWrapper, Marker  } from 'google-maps-react';
import CurrentLocation from './map';
import Form from './form';
import './contact.scss'
class Contact extends Component{
    render(){
        return(
            
             <div className="pf__contact">
                <section className="pf__contact--fp" >
                    <h1>Contact</h1>
                </section>
                <section className="pf__contact--sp" >
                    <div className="pf__contact--sp-lp">
                        <h3>Get in <span>Touch</span></h3>
                        <div className="map">
                        <CurrentLocation

                            centerAroundCurrentLocation
                            google={this.props.google}
                        >
                            {/* /33.911563699999995 151.22370469999998*/}
                        <Marker name={'my location'} style={{height:'20px'}}position={{ lat: -33.911563699999995, lng:  151.22370469999998 }}/>
                        <Marker name={'my location'} style={{height:'20px'}}position={{ lat: -33.911563699999995, lng:  151.22370469999998 }}/>
                        </CurrentLocation>
                        </div>
                        <div>
                            <div className="pf__contact--sp-lp-icon">📍</div><h5>  Sydney,Australia</h5>
                            <div className="pf__contact--sp-lp-icon">📩</div><h5>  jubi33717f@gmail.com</h5>
                            <div className="pf__contact--sp-lp-icon">☎</div><h5>  0413066822</h5>
                            <div className="pf__contact--sp-lp-icon">✔</div><h5>  Freelance Avaliable</h5>
                        </div>
                    </div>  
                    <div className="pf__contact--sp-rp">
                        <h3>Contact <span>Form</span></h3>
                        <Form/>
                    </div>
                </section>
            </div>
            
        )
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyDy7fG8VcN_upR7UZ7lC63h7cVbVwYu558'
})(Contact);