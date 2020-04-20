import React from 'react';
// import MyEmail from './email'
// import { renderEmail } from 'react-html-email'
import emailjs from 'emailjs-com';
import './contact.scss'
// const messageHtml =  renderEmail(<MyEmail name={this.state.name} />); 
export default class Form extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: '', name: '', email: '' };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
        // const messageHtml =  renderEmail(<MyEmail name={this.state.name} />);     
  	<form className="test-mailing">
        {/* renderEmail(<MyEmail name={this.state.name} />);  */}
    	{/* <h1>Let's see if it works</h1> */}
    	<div>
            <div className="mailing-box">
                <i>👤</i>
                <input onChange={this.handleChange1} placeholder="Full Name" value={this.state.name}></input>
            </div>
            <div className="mailing-box">
                <i>📧</i>
                <input onChange={this.handleChange2} placeholder="Email Address" value={this.state.email}></input>
            </div>
            <div className="mailing-box">
                <i>🗨</i>
                <textarea onChange={this.handleChange3} placeholder="Message for Me" value={this.state.feedback}></textarea>
            </div>
      	{/* <textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder="Post some lorem ipsum here"
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/> */}
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }
  handleChange1(event) {
    this.setState({name: event.target.value})
  }
  handleChange2(event) {
    this.setState({email: event.target.value})
  }
  handleChange3(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
	const templateId = 'template_SuPmdfBi';
    const name = this.state.name+'(Email:'+this.state.email+")";
    
	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: name, from_email:this.state.email, reply_to: "jubi33717f@gmail.com"})
  }

  sendFeedback (templateId, variables) {
    const userID= "user_pMiF80loZQBp2KIqs9Qe9";

	emailjs.send(
  	'gmail', templateId,variables,
  	userID
  	).then(res => {
        console.log('Email successfully sent!')
        alert("Email successfully sent!")
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}