import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';

import MessageList from './MessageList.jsx';




const messageData = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
}





class App extends Component {




 constructor(props) {
    super(props);
    this.state = {};
  }







  render() {
    return (
    <div>
      <nav className="navbar">
  <a href="/" className="navbar-brand">Chatty</a>
</nav>

<MessageList messages = {messageData.messages} />



<ChatBar currentUser={messageData.currentUser.name} />
</div>
    );
  }
}
export default App;
