import React, { Component } from "react";
import './navbar.scss'
import { Link, withRouter } from "react-router-dom";
import menuIcon from '../assets/menu_icon.png';
// import { connect } from "react-redux";
// import { logoutUser } from "../../redux/actions";
export default class Navbar extends Component{
    constructor(props){
        super();
        this.state={
            onShow:[false,false,false,false,true],
            sticky:false,
            munu:false,
        };
    }
    
    componentDidMount() {
        setTimeout(
        window.addEventListener("scroll", () => {
            // console.log(window.pageYOffset)
          if (window.pageYOffset > 6) {
            this.setState({ sticky: true });
          } else {
            this.setState({ sticky: false});
          }
        //   console.log(this.state.sticky);
          this.forceUpdate();
        }),1000);
        
        
      }
    ClickHandle(prop,e){
        // console.log(prop);
        let arr = this.state.onShow;
        arr[0]=false;
        arr[1]=false;
        arr[2]=false;
        arr[3]=false;
        arr[4]=false;
        arr[prop] = true;
        // console.log(arr);
        this.setState({onshow:arr});
        this.forceUpdate();
            
        // console.log(this.state.onShow);
        // console.log("a");
        
    }
    popMenu(){
      if(this.state.menu === false){
        this.setState({menu:true})
      }else{
        this.setState({menu:false})
      }
    }
    render(){
        //let arr=this.state.onShow;
        return(
        <div className={this.state.sticky?"sticked pf__title":"pf__title"}>
            <div className="pf__title--name">
                <p>Jubi  </p> 
                <p>  Chen</p>
            </div>
            
            <ul className="pf__title--menubar">
            {/* style="color:#86858A" */}    
                <li ><Link to="/contact" className={this.state.onShow[0]?"pf__title--link-active":"pf__title--link"} onClick={this.ClickHandle.bind(this,0)}>Contact</Link></li>
                <li ><Link to="/blog" className={this.state.onShow[1]?"pf__title--link-active":"pf__title--link"} onClick={this.ClickHandle.bind(this,1)}>Blog</Link></li>
                <li ><Link to="/services"className={this.state.onShow[2]?"pf__title--link-active":"pf__title--link"} onClick={this.ClickHandle.bind(this,2)}>Services</Link></li>
                <li ><Link to="/resume" className={this.state.onShow[3]?"pf__title--link-active":"pf__title--link"} onClick={this.ClickHandle.bind(this,3)}>Resume</Link></li>
                <li ><Link to="/home" className={this.state.onShow[4]?"pf__title--link-active":"pf__title--link"} onClick={this.ClickHandle.bind(this,4)}>Home</Link></li>
            </ul>
            <div className="pf__title--menu" onClick={this.popMenu.bind(this)}>
            <img src="https://img.icons8.com/clouds/100/000000/menu.png"/>
                
            </div>
            {this.state.menu && <ul className="pf__title--menuli">
            {/* style="color:#86858A" */}    

                <li ><Link to="/home"  >Home</Link></li>
                <li ><Link to="/resume"  >Resume</Link></li>
                <li ><Link to="/services" >Services</Link></li>
                <li ><Link to="/blog"  >Blog</Link></li>
                <li ><Link to="/contact"  >Contact</Link></li>
            </ul>}
     </div>)
        
    }
}
