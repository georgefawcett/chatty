import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';

import MessageList from './MessageList.jsx';




class App extends Component {


 constructor(props) {
    super(props);
    this.state = {


       currentUser: {name: "",
                      color: ""}, // optional. if currentUser is not defined, it means the user is Anonymous
        messages: [],

        userCount: ""

                }



    this.handleSubmit = this.handleSubmit.bind(this);

  }

componentDidMount() {
    // Opens Websocket connection
// var ws = new WebSocket("ws://localhost:3001");
// Use a publicly available IP to accept connections from other people!
// var ws = new WebSocket("ws://172.46.3.30:5000");
  this.ws = new WebSocket("ws://localhost:3001");

  this.ws.onopen = function (event) {
    console.log("Connected to server");
  }

  this.ws.onmessage = function (event) {
    var incoming = JSON.parse(event.data);


    // If incoming message is update in user count, a new message, or a changed username

    if (incoming.type === "usercount") {
      this.setState({
        currentUser: this.state.currentUser,
        messages: this.state.messages,
        userCount: incoming.number
      })

    } else if (incoming.type === "newmessage") {
      this.setState({
        currentUser: this.state.currentUser,
        messages: this.state.messages.concat(incoming)
      })

    } else if (incoming.type === "newusername") {
       this.setState({
        currentUser: {name: incoming.username,
                      oldname: incoming.oldname,
                      color: incoming.color},
        messages: this.state.messages.concat(incoming)
       })
    }

  }.bind(this);

  // this.ws.onmessage = (event) => {

  // }

}





handleSubmit(data, type) {

    // Function to generate random colour (copied from web)
    function getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        }


      if (type === "content") {
        let content;
        // Check to see if user wants to change their colour
        // If so, change and display message
        let color;
        if (data.content === "/color" && this.state.currentUser.name) {
          content = this.state.currentUser.name + " changed colors!";
          color = getRandomColor();
        } else {
          content = data.content;
          color = this.state.currentUser.color;
        }


        var serverMessage = {
          type: "newmessage",
          username: this.state.currentUser.name,
          color: color,
          content: content
        };

      if (!data.content || !data.content.replace(/\s+/g, '')) {
        var blank = true;
      }

      } else if (type === "username") {

        console.log(this.state.currentUser)
        // Allow random colour only on change from initial Anonymous
        // User keeps same colour when changing name, unless back to Anonymous (in which case, black)
        let color;

        if (data.username && !this.state.currentUser.name) {
          color = getRandomColor();
        } else if (!data.username) {
          color = "#000000";
        } else {
          color = this.state.currentUser.color;
        }
        var serverMessage = {
          type: "newusername",
          username: data.username,
          oldname: this.state.currentUser.name,
          color: color
        }

      }

      // Ensure message is not blank or just spaces before sending to server
      if (!blank) {
        this.ws.send(JSON.stringify(serverMessage));
      }
  }



  render() {


    return (
    <div>
      <nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
  <div className="usersonline">
    {this.state.userCount} user(s) online
  </div>
</nav>

<MessageList messages = {this.state.messages} />



<ChatBar currentUser={this.state.currentUser.name} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
</div>
    );
  }










}


export default App;
