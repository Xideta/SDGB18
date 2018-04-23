import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Message: '',
            buttonStatus: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }



    updateName(newText) {
        this.setState({ Name: newText })
        this.checkFill();
    }

    updateEmail(newText) {
        this.setState({ Email: newText })
        this.checkFill();
    }

    updateMessage(newText) {
        this.setState({ Message: newText });
        this.checkFill();
    }

    checkFill() {
        const regex = /(\w*\+*\.*@\w*\.[\w.]*)/g;
        if (this.state.Name.length && this.state.Email.match(regex) != null && this.state.Message.length) {
            this.setState({
                buttonStatus: true
            })
        } else {
            this.setState({
                buttonStatus: false
            })
        }
    }

    handleSubmit(event) {
        alert('Greetings ' +
            this.state.Name +
            ', thank you for your message, wherein you wrote:\n ' +
            this.state.Message + "\n" +
            "We'll respond to your question by mailing " +
            this.state.Email + " ASAP.");
        this.setState({
            Name: '',
            Email: '',
            Message: '',
            buttonStatus: false
        })
        event.preventDefault();

    }

    render() {
        const buttonStatus = this.state.buttonStatus;

        return (
            <div>
                <p>
                    Please enter your contact information.
                </p>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="nameInput">Name: </label>
                        <br />
                        <input type="text" value={this.state.Name} placeholder="Name" autoComplete="name" required="required" onChange={event => this.updateName(event.target.value)} />
                    </p>
                    <br />
                    <p>
                        <label htmlFor="emailInput">Email: </label>
                        <br />
                        <input type="text" value={this.state.Email} placeholder="Email" autoComplete="email" required="required" onChange={event => this.updateEmail(event.target.value)} />
                    </p>
                    <br />
                    <p>
                        <label htmlFor="messageInput">Message: </label>
                        <br />
                        <textarea value={this.state.Message} rows="5" cols="40" name="comment" form="mailForm" placeholder="Enter text here..." required="required" onChange={event => this.updateMessage(event.target.value)} />
                    </p>
                    <br />
                    <input type="submit" id="send" value="Send" disabled={!buttonStatus} />
                    <br />
                </form>
            </div>
        )
    }
}



export default Contact