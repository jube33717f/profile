import React,{ Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import Auth from '../auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser, faComment, faCommentAlt, faUserCircle } from '@fortawesome/fontawesome-free-solid'
// import { ReactMarkdown } from 'react-markdown';
import './article.scss'
const ReactMarkdown = require('react-markdown');
const datetime = require('silly-datetime')

export default class Article extends Component{
    
    constructor(props){
        super();
        this.state={
            article:{},
            tags:[],
            comments:[],
            auth:false,
            page:'delete',
            new_comment_name:'',
            new_comment_cotent:''
        }
    }
    async componentDidMount(){
        const apiUrl='https://profile-article-api.herokuapp.com';
        const link = `${apiUrl}/article/${this.props.match.params.id}`;
        const res = fetch(link,{method:'get'});
        res.then(res=>res.json()).then(data=>{
            // console.log(data.title);
            // this.setState({article,data});
            this.setState({article:data});
            this.setState({tags:data.category});
            this.setState({comments:data.comments});
            // console.log(this.state.article.category.length)
        });
        
    }
    // componentDidUpdate(preProp, prevState) {
    //     console.log(this.state)
    //     console.log(prevState)
    //     if(this.state.)
    //     // Typical usage (don't forget to compare props):
    //     // if (this.props.userID !== prevProps.userID) {
    //     //   this.fetchData(this.props.userID);
    //     // }
    //   }
    handleDelete(){
        this.setState({auth:true})
        this.forceUpdate();
        
    }
    postComment(){
        console.log(this.state.new_comment_name)
        console.log(this.state.new_comment_content)
        if(this.state.new_comment_name === ''|| this.state.new_comment_content==='') return;
        const apiUrl='https://profile-article-api.herokuapp.com';
        const link = `${apiUrl}/comments/article/${this.props.match.params.id}`;
        const agr = {
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'name': this.state.new_comment_name, 'comment': this.state.new_comment_content})
        }
        const res = fetch(link,agr);
        res.then(res=>res.json()).then(data=>{
            if(data.message === 'Updated'){
                alert('posted')
                let cm=this.state.comments
                const p_time = datetime.format(new Date,'YYYY-MM-DD HH:mm');
                cm.push({'name': this.state.new_comment_name, 'comment': this.state.new_comment_content,'post_date':p_time})
                this.setState({comments:cm});
                this.setState({new_comment_content:''})
                this.setState({new_comment_name:''})
                //this.forceUpdate();
            }
        })
    }
    render(){
        const apiUrl='https://profile-article-api.herokuapp.com/openapi.json'
        // console.log(this.props.match.params.id)
        return(
            <>
            {this.state.auth?<Auth {...this.state} {...this.props}/>:""}
            <div className="article">
                <div className="article__bg">
                    <img src="https://www.edwardhopper.net/images/paintings/rooms-by-the-sea.jpg"/>
                </div>
                <div className="article__content">
                    <h1>{this.state.article.title}</h1>
                    <div className="article__content-meta">
                        <span>
                            <FontAwesomeIcon icon={faClock} /> {this.state.article.post_date}
                        </span>
                        <span> | </span>
                        <span>
                            <FontAwesomeIcon icon={faUser} /> Jubi
                        </span>
                        <span> | </span>
                        <button onClick={this.handleDelete.bind(this)}>Delete</button>
                    </div> 
                    
                        {/* <button onClick={this.handleEdit.bind(this)}>Edit</button> */}
                        
                    
                    <div className="article__content-content">
                    
                    <ReactMarkdown source={this.state.article.content}/>
                    </div>
                    <div className="article__content-footer">
                        <ul>
                            {/* {this.state.article.category} */}
                            {/* {console.log(this.state.tags.length)} */}

                            {this.state.tags.length>0?this.state.tags.map((item,index)=>
                                (<li key={index}><a>{item}</a></li>)
                            ):''}
                            
                        </ul>
                    </div>
                </div>
                <div className="article__comments">
                    <h3>Comments</h3>
                    <div className="article__comments--body">
                        <div className="article__comments--body-heading">
                           <p><FontAwesomeIcon icon={faComment} /> Jone | <span>12-12-12</span></p>
                        </div>
                        <div className="article__comments--body-c">
                            <p>Nam pellentesque laoreet augue sed facilisis. Suspendisse nec sollicitudin mauris. Integer fringilla a odio sit amet fermentum. Nunc nibh mauris, pretium eu risus et, finibus facilisis lorem.</p>    
                        </div>
                    </div>
                    {this.state.comments.length>0?this.state.comments.map((item,index)=>(
                        <div className="article__comments--body">
                            <div className="article__comments--body-heading">
                            <p><FontAwesomeIcon icon={faComment} /> {item.name} | <span>{item.post_date}</span></p>
                            </div>
                            <div className="article__comments--body-c">
                                <p>{item.comment}</p>    
                            </div>
                      </div>
                    )):''}
                </div>
                <div className="article__leaveComments">
                    <h3>Leave a Comment</h3>
                    <form>
                        <FontAwesomeIcon className="comment_icon comment_icon1" icon={faUserCircle} />
                        <input placeholder="Your Name" onChange={(e)=>{
                            this.setState({new_comment_name:e.target.value}
                            )}} value={this.state.new_comment_name}></input>
                        
                        <FontAwesomeIcon className="comment_icon comment_icon2" icon={faCommentAlt} />
                        <textarea placeholder="Message"  onChange={(e)=>{
                            this.setState({new_comment_content:e.target.value}
                            )}} value={this.state.new_comment_content}></textarea>
                        
                    </form>
                    <button onClick={this.postComment.bind(this)}>ADD Comment</button>
                    
                </div>
            </div>
        </>
        )
    }
}