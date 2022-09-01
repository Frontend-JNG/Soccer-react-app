import React, { useState } from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";
// import { api } from "../services/api";
import axios from "axios";
import Leagues from "./components/Leagues";


const  ContactForm =()=>{

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [message, setMessage] = React.useState('');

    const displayMessage = jsonMessage => {
        if (jsonMessage.error) {
            let message = '';
            // Need to catch multiple errors if they exist
            for (let error in jsonMessage.error) {
                message += error + ' ' + jsonMessage.error[error] + ' '
            }
            setMessage(message)
        } else {
            setMessage('Post created successfully!')
        }
    }

    const handleChange = ev => {
      setTitle(ev.target.value);
        // if (ev.target.name === 'title') {
        //     setTitle(ev.target.value)
        // } else if (ev.target.name === 'content') {
        //     setContent(ev.target.value)
        // }
    }

    const handleSubmit = ev => {
 if (title) {
   setContent(content.concat(title));
 }

 setTitle("");

 ev.preventDefault();
    }

    // We want to clear out the message after 4 seconds when a post is submitted
    React.useEffect(() => {
        let timer = setTimeout(() => setMessage(''), 4000);
        return () => clearTimeout(timer);
    }, [message]);


// class ContactForm extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  // render() {
    return (
      <div id="formContainer">
        <Form id="form" action="#" onSubmit={handleSubmit}>
          
            <h1 className="text-2">Subscription </h1>
            <div id="fullName">
              <input
                onChange={handleChange}
                type="text"
                name="fName"
                id="fName"
                placeholder="First Name"
                required
              />
              <input
                onChange={handleChange}
                type="text"
                name="lName"
                id="lName"
                placeholder="Last Name"
                required
              />
            {/* </div> */}
          
              <input
                onChange={handleChange}
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              />
            
            <br />
            <br />
            <input type="submit" name="submit" id="submit" />
            </div>
         
          
        </Form>
      </div>
      
    );
  }
// }
export default ContactForm;

