import React,{Component} from 'react';
import Editor1 from './edit'
import Auth from '../auth'

export default class Editor extends Component{
    constructor(props){
        super()
        this.state={
            authShow:true,
            page:'edit'
        }
    }
    
    render(){
        return(<>{this.state.authShow?<Auth {...this.state}/>:""}<Editor1/></>)
    }
}