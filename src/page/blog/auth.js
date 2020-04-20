import React,{Component} from 'react';
import{  Redirect } from "react-router-dom";
import './auth.scss'
export default class Auth extends Component{
    constructor(props){
        super();
        this.state={
            account:'',
            password:'',
            show:true
        }
    }

    render(){
        return(
            <>
            {this.state.show&&<div className="auth">
                <div className="auth-inner">
                    <h2>Authorization</h2>
                    <p>Account:</p><input onChange={(e)=>{this.setState({account:e.target.value})}}></input>
                    <p>Password:</p><input onChange={(e)=>{this.setState({password:e.target.value})}}></input>
                    <div><button onClick={()=>{
                        // console.log(this.props)
                            if(this.state.account === '#33717f' && this.state.password ==='51113127'){
                                if(this.props.page === 'delete'){
                                    const apiUrl='https://profile-article-api.herokuapp.com';
                                    const link = `${apiUrl}/article/${this.props.match.params.id}`;
                                    const res = fetch(link,{method:'delete'});
                                    res.then(res=>{
                                        if(res.status === 200){
                                            alert('deleted')
                                            this.props.history.push('/blog')
                                        }
                                    });
                                }
                                this.setState({show:false})
                            }else{
                                this.props.history.push('/blog')
                                // <Redirect to="/blog" />
                            }
                            // : ""
                            
                            
                    }}>Submit</button></div>
                </div>
                    
            </div>}
                </>
            
            )
    } 
}