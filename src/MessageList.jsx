import React, {Component} from 'react';

import Message from './Message.jsx';
import Username from './Username.jsx';


class MessageList extends Component {
  render() {
    return (
      <main className="main">
     <div style={{"marginLeft": "20px"}}>Welcome to Chatty.
     <br />
     Enter /color to change your name color (named users only)
     </div>
        {
          this.props.messages.map((message) => {

            if (message.type === "newmessage") {
              return <Message messageContent={message} key={message.id}/>
            } else if (message.type === "newusername") {

              return <Username oldname={message.oldname} newname={message.username} key={message.id}/>
            }
          })
        }

      </main>
    );
  }
}
export default MessageList;