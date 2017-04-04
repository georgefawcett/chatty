import React, {Component} from 'react';


class Message extends Component {

  render() {






    return (


  <div className="message" id={this.props.index}>
 <span className="message-username">{this.props.messageText.username}</span>
 <span className="message-content">{this.props.messageText.content}</span>
 </div>


    );
  }
}
export default Message;
