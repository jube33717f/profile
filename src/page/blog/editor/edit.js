import React,{Component} from 'react';
import ReactMde from "react-mde";
import { Link , Redirect} from "react-router-dom";
// import ReactDOM from "react-dom";
import * as Showdown from "showdown";
// import Auth from '../../../component/auth'
import "react-mde/lib/styles/css/react-mde-all.css";
import './editor.scss'
function loadSuggestions(text) {
    return new Promise((accept, reject) => {
      setTimeout(() => {
        const suggestions = [
          {
            preview: "Andre",
            value: "@andre"
          },
          {
            preview: "Angela",
            value: "@angela"
          },
          {
            preview: "David",
            value: "@david"
          },
          {
            preview: "Louise",
            value: "@louise"
          }
        ].filter(i => i.preview.toLowerCase().includes(text.toLowerCase()));
        accept(suggestions);
      }, 250);
    });
}
  
const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});


function Editor1(){
    
    // render() {
        const [value, setValue] = React.useState("");
        const [selectedTab, setSelectedTab] = React.useState("write");
        // let show = false;
        return(
            
            <div className="editor">
            <div className="editor-header">
                {/* <span>Title</span> */}
                <input placeholder="Title" id='title'></input>
                <input placeholder="Categories(split by comma)" id='tag'></input>
                <Link to="/blog"><button style={{background:'#FFC2C2'}}>Cancel</button></Link>
                <button onClick={()=>{
                    // show = true;
                    // console("1");
                    console.log(value)
                    const title = document.getElementById('title').value
                    const tag = document.getElementById('tag').value
                    console.log(title)
                    const apiUrl='https://profile-article-api.herokuapp.com';
                    const link = `${apiUrl}/article`
                    const tags=tag.split(',')
                    console.log(tags)
                    const agr = {
                        method: 'POST',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({'title': title, 'content': value,"category":tags})
                    }
                    const res = fetch(link,agr);
                    res.then(res=>res.json()).then(data=>{
                        if(data.message === 'Created'){
                            alert('posted')
                            
                        }
                    })

                }}>Post</button>
            </div>
            <div className="container">
                <ReactMde
                    value={value}
                    onChange={setValue}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={markdown =>
                    Promise.resolve(converter.makeHtml(markdown))
                    }
                    loadSuggestions={loadSuggestions}
                    childProps={{
                    writeButton: {
                        tabIndex: -1
                    }
                    }}
                />
        </div>
        </div>
        // }</>
        )
    // }
}
export default Editor1;