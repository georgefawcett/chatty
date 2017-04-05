import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';

import MessageList from './MessageList.jsx';









class App extends Component {




 constructor(props) {
    super(props);
    this.state = {


       currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
        messages: [
                    {
                      id: 1,
                      username: "Bob",
                      content: "Has anyone seen my marbles?",
                    },
                    {
                      id: 2,
                      username: "Anonymous",
                      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
                    }
                  ],
                  id: 3
                }


    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

componentDidMount() {
    // Opens Websocket connection
// var ws = new WebSocket("ws://localhost:3001");
// Use a publicly available IP to accept connections from other people!
// var ws = new WebSocket("ws://172.46.3.30:5000");
var ws = new WebSocket("ws://localhost:3001");

  ws.onopen = function (event) {
    console.log("Connected to server");
  };

}




// in App.jsx
// addMessage() {
//     console.log("hello");
//     alert("pressed");
//     if (event.key == 13) {
//       console.log("Enter!");
//     }
//     // Add a new message to the list of messages in the data store
//     // const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
//     // const messages = this.state.messages.concat(newMessage)
//     // // Update the state of the app component.
//     // // Calling setState will trigger a call to render() in App and all child components.
//     // this.setState({messages: messages})
//   };




  handleSubmit(data, type) {

      const newMessage = {id: this.state.id++, username: data.username, content: data.content };
      console.log(newMessage)
      const messages = this.state.messages.concat(newMessage);
      this.setState({messages: messages});

  }

  handleUserChange(event) {
    alert('changed user');
    // this.setState({username: event.target.value});
  }

  handleMessageChange(event) {
     alert('changed content');
    // this.setState({content: event.target.value});
  }





  render() {
    return (
    <div>
      <nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
</nav>

<MessageList messages = {this.state.messages} />



<ChatBar currentUser={this.state.currentUser.name} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
</div>
    );
  }










}
export default App;
