import React,{Component} from 'react'
import './resume.scss'
export default class Resume extends Component{
    render(){
        return(
            <div className="pf__resume">
            <div className="pf__resume--fp" >
                <h1>Resume</h1>
            </div>
            <div className="pf__resume--sp" >
            <div className="pf__resume--sp-left">
                <h2>Education</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <h3>Master of IT</h3>
                        <p>Feb 2019 – Dec 2020 | <span>UNSW</span></p>
                        <p>E-commerce Stream</p>
                        <p>Database System Stream</p>
                    </div>
                    <div className="timeline-item">
                        <h3>Bachelor of Internet Of Things</h3>
                        <p>Sep 2014 – Jun 2018 | <span>Anq University</span></p>
                        <p>The Second Prize Scholarship</p>
                        <p>Annual Individual Scholarship</p>

                    </div>
                </div>
            </div>
            <div className="pf__resume--sp-right">
                <h2>Experience</h2>
                <div className="pf__resume--sp-left1">
                    <div className="left1-edu1-round"></div>
                    <div className="left1-edu1-line"></div>
                    <div className="left1-edu2-round"></div>
                    <div className="left1-edu2-line"></div>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <h3>Full-end Developer</h3>
                        <p>2020 <span>Jiangren</span></p>

                        <p>Start at the end of May </p>
                        <p></p>
                    </div>
                    <div className="timeline-item">
                        <h3>Personalized Education R&D Department  Resource engineer</h3>
                        <p> Jun 2018 – Mar 2012 | <span>Hefei IFLYTEK CO.,LTD.</span></p>

                        <p>Collaborated in building question database.</p>
                        <p>Developed tool optimization.</p>
                    </div>
                </div>
                
            </div>
            <div className="pf__resume--tp">
                <div className="pf__resume--tp-design">
                    <h3>Design <span>Skills</span></h3>
                    <p>Web Design</p>
                    <div className="pf__resume--tp-design-wd">
                        <div className="pf__resume--tp-design-wd-fill"></div>
                    </div>
                    <p>Photo Shop</p>
                    <div className="pf__resume--tp-design-ps">
                        <div className="pf__resume--tp-design-ps-fill"></div>
                    </div>
                    
                </div>
                <div className="pf__resume--tp-coding">
                    <h3>Coding <span>Skills</span></h3>
                    <p>HTML5/CSS/JavaScript/React</p>
                    <div className="pf__resume--tp-coding-html">
                        <div className="pf__resume--tp-coding-html-fill"></div>
                    </div>
                    

                    <p> Python/Nodejs/MogoDB </p>
                   <div className="pf__resume--tp-coding-python">
                    <div className="pf__resume--tp-coding-python-fill"></div>
                   </div>
                    

                </div>
                </div>
            
            
        </div>
            </div>
        )
    }
}