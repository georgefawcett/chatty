import React, {Component} from 'react';


class MessageList extends Component {
  render() {
    return (
     <main className="messages" id ="messagelist">
         <div id="message">
         </div>
     <div className="message system">
    Anonymous1 changed their name to nomnom.
  </div>
  </main>
    );
  }
}
export default MessageList;