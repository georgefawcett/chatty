import React, {Component} from 'react';

import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <main>
        {
          this.props.messages.map((message, index) => {
            return <Message messageText={message} key={index} />
          })
        }
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
      </main>
    );
  }
}
export default MessageList;