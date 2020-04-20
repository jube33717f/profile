import React, { Component } from "react";
import './home.scss';
import Email from '../../assets/email.png';
import Github from '../../assets/github.png';
import Jianshu from '../../assets/blog.png';
import Weibo from '../../assets/weibo.png';
import { Link } from "react-router-dom";
export default class Home extends Component{
    handleMouseOver(event){
        // console.log(event.target.textContent)
        const a = event.target;
        // setTimeout(setInterval(function(){ 
        //     if(a.textContent === 'Web Designer'){
        //         a.textContent = 'Frontend Developer';
        //     }else{
        //         a.textContent = 'Web Designer';
        //     }
        //  }, 3000),1500);
        setInterval(function(){ 
                if(a.textContent === 'Web Designer'){
                    a.textContent = 'Fullstack Developer';
                }else{
                    a.textContent = 'Web Designer';
                }
             }, 3000);
        
    }
    render(){
        return(
            <div className="pf__card">
            <div className="pf__card--fp" >
                <div className="pf__card--fp-photo">
                    <img src="https://i.pinimg.com/474x/0b/fb/9f/0bfb9f58ed5515dc1ff9bdd04d0f4541.jpg" className="pf-photo"/>
                </div>
                <div className="pf__card--fp-others">
                    <h1>Jubi Chen</h1>
                    <p onMouseOver={this.handleMouseOver.bind(this)}>Web Designer</p>
                    <div className="pf__card--fp-others-imgbox">
                      <Link to='/contact'> <img src={Email}/></Link>
                      <a href="https://github.com/jubi33717f"> <img src={Github}/></a>
                      <a href="https://www.jianshu.com/u/35128dcebf56"> <img src={Jianshu}/></a>
                    </div>
                </div>
            </div>
            <div className="pf__card--sp">
                <div className="pf__card--sp-profile1">
                    <h1>About <span>Me</span></h1>
                    <p>Hello! I'm Jubi, like staying at home, cat, and coffee.</p>
                    <h3 style={{paddingTop:'30px',color:'#000'}}>Follow <span  style={{color:'#33717f'}}>Me</span></h3>
                    <div className="pf__card--fp-others-imgbox" >
                    <a href="https://www.weibo.com/u/5199832980/home?wvr=5&c=spr_sinamkt_buy_lhykj_weibo_t105"> <img src={Weibo} style={{backgroundColor:'#FFC1C2'}}/></a>
                    <a href="https://github.com/jubi33717f"> <img src={Github} style={{backgroundColor:'#FFC1C2'}}/></a>
                    <a href="https://www.jianshu.com/u/35128dcebf56"> <img src={Jianshu}  style={{backgroundColor:'#FFC1C2'}}/></a>
                    </div>
                </div>
                <div className="pf__card--sp-profile2">
                    <table>
                        <tr>
                            <td >Age</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>Residence</td>
                            <td>Australia</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>unit 610, 14-18 Darling St, kensington, NSW</td>
                        </tr>
                        <tr>
                            <td>e-mail</td>
                            <td>jubi33717f@gmail.com</td>
                        </tr>
                        <tr>
                            <td>Phone</td>
                            <td>0413066822</td>
                        </tr>
                    </table>

                </div>


        </div>
    
            </div>
     )}
}
