import React, {Component} from 'react';


class Message extends Component {




  render() {

        //If no username (or just spaces), show as Anonymous
            let username;
              if (!this.props.messageContent.username || !this.props.messageContent.username.replace(/\s+/g, '')) {
                username = "Anonymous";
              } else {
                username = this.props.messageContent.username;
              }


    return (


  <div className="message" id={this.props.index}>
 <span className="message-username" style={{color: this.props.messageContent.color}}>{username}</span>
 <span className="message-content">{this.props.messageContent.content}</span>
 </div>



    );


  }
}
export default Message;
