import React, { Component } from "react";
import Auth from './auth'
//import { Link, withRouter } from "react-router-dom";
import './blog.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faAngleLeft,faAngleRight,faCog } from '@fortawesome/fontawesome-free-solid'
import { faProductHunt } from '@fortawesome/fontawesome-free-brands'
export default class Blog extends Component{
    constructor(props){
        super();
        this.state={
            page:1,
            size:4,
            articles:[],
            // currentPage:1,
            totalPage:1,
            searchTitle:'',
            isLoading: true,
            // authShow:false
        }
    }
    async componentDidMount(){
        const apiUrl='https://profile-article-api.herokuapp.com';
        const link = `${apiUrl}/article/${this.state.page}/${this.state.size}`;
        // console.log(link)
        const res = fetch(link,{ 
            method:'get',
        })
        res.then(res=>res.json()).then(data=>{
            this.setState({articles:data})
        });
        const link2 = `${apiUrl}/article`;
        const res2 = fetch(link2,{method:'get'})
        res2.then(res2=>res2.json()).then(data=>{    
            this.setState({totalPage:Math.ceil(data/this.state.size)})
            console.log(this.state.totalPage)
            this.setState({isLoading:false})
                    // this.forceUpdate();
        })
        
        
    }
    PrevPage(){
        if(this.state.page === 1) return;
        this.state.page--;
        const apiUrl='https://profile-article-api.herokuapp.com';
        const link = `${apiUrl}/article/${this.state.page}/${this.state.size}`;
        // console.log(link)
        const res = fetch(link,{ 
            method:'get',
        })
        res.then(res=>res.json()).then(data=>{
            this.setState({articles:data})
        });
        this.forceUpdate();
        // console.log(this.state.currentPage)
    }
    NextPage(){
        if(this.state.page === this.state.totalPage) return;
        this.state.page++;
        const apiUrl='https://profile-article-api.herokuapp.com';
        const link = `${apiUrl}/article/${this.state.page}/${this.state.size}`;
        // console.log(link)
        const res = fetch(link,{ 
            method:'get',
        })
        res.then(res=>res.json()).then(data=>{
            this.setState({articles:data})
        });
        this.forceUpdate();
        // console.log(this.state.currentPage)
    }
    searchArticle(e){
        this.setState({searchTitle:e.target.value})
        console.log(this.state.searchTitle)     
    }
    handleAuth(){
        // this.setState({authShow:true})
        this.props.history.push('/edit');
    }
    returnSearchResult(e){
        if(e.charCode===13){
            const apiUrl='https://profile-article-api.herokuapp.com';
            if(this.state.searchTitle != ''){
                
                const link = `${apiUrl}/search/article/${this.state.searchTitle}`;
                const res = fetch(link,{ 
                    method:'get',
                })
                res.then(res=>res.json()).then(data=>{
                    this.setState({articles:data})
                });
                this.forceUpdate();
            }else{
                const link = `${apiUrl}/article/${this.state.page}/${this.state.size}`;
        // console.log(link)
                const res = fetch(link,{ 
                    method:'get',
                })
                res.then(res=>res.json()).then(data=>{
                    this.setState({articles:data})
                    
                });
            }
            
        }
    }
    render(){
        // console.log(this.state.articles)
        const img=["https://www.edwardhopper.net/images/paintings/rooms-by-the-sea.jpg",'https://www.edwardhopper.net/images/paintings/nighthawks.jpg','https://pic.allhistory.com/T1plhyBXdT1RCvBVdK.jpg?w=2048&h=1080','https://pic.allhistory.com/T1G6YvBXVT1RCvBVdK.jpg?w=2048&h=708']
        return(
            <>
            {/* {this.state.authShow?<Auth {...this.props}/>:""} */}
            <div className="pf__blog">
            <section className="pf__blog--fp" >
                <h1>` Blog <FontAwesomeIcon style={{fontSize:'40px',color:'#02C9B1'}} icon={faProductHunt} onClick={this.handleAuth.bind(this)}/></h1>
                <div className="pf__blog--fp-search">
                    <input onChange={ this.searchArticle.bind(this)} onKeyPress={this.returnSearchResult.bind(this)}></input>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </section>
            <section className="pf__blog--sp" >
                {this.state.isLoading?<div className='loading'><li><FontAwesomeIcon icon={faCog} style={{color:'#33717f'}}/></li>Loading...</div>:''}
                {this.state.articles.length>0?this.state.articles.map((item,index)=>
                    
                    (<div className="pf__blog--sp--article" key={index}>
                        <div className="pf__blog--sp--article-bg"> 
                            <div className="pf__blog--sp--article-bg-date"><h3>{item.post_date.split(' ')[0].split('-')[2]}</h3><span>{(new Date(item.post_date)).toDateString().split(' ')[1]}</span></div>
                            <a onClick={()=>{
                                this.props.history.push(`/article/${item._id}`);
                            }}>
                                <img src={`${img[index]}`}></img> 
                                <div className="mask">📄</div>
                            </a>

                        </div>
                        <div className="pf__blog--sp--article-info">
                            <p>{item.category}</p>
                            <h4>{item.title}</h4>
                        </div>
                    </div>)
                ):''}
          
                {/* <div className="pf__blog--sp--article">
                    <div className="pf__blog--sp--article-bg"> 
                        <div className="pf__blog--sp--article-bg-date"><h3>6 <span>Dec</span></h3></div>
                        <a onClick={()=>{
                            this.props.history.push('/article/'+'1');
                        }}>
                            <img src="https://www.edwardhopper.net/images/paintings/rooms-by-the-sea.jpg"></img> 
                            <div className="mask">📄</div>
                        </a>

                    </div>
                    <div className="pf__blog--sp--article-info">
                        <p>categroy</p>
                        <h4>Bootstrap is the Most Popular Framework</h4>
                    </div>
                </div> */}

               
            </section>
            <section className="pf__blog--tp">
            <FontAwesomeIcon icon={faAngleLeft} style={{cursor:'default'}} onClick={this.PrevPage.bind(this)} /><div className="pf__blog--tp-page"><p>Page{this.state.page}</p></div> <FontAwesomeIcon icon={faAngleRight} onClick={this.NextPage.bind(this)}/>
            </section>
        </div></>)
    }
}