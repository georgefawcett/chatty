import React, {Component} from 'react';


class ChatBar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username:  props.currentUser || '',
      content: ''
    };
  }

  handleKeyPress(ev, type) {
    if (ev.key === "Enter") {
      this.props.handleSubmit(this.state, type);
      this.setState({content: ''})
    } else {
      this.setState({
        [type]: ev.target.value
      })
    }
  }



  render() {
    return (

      <footer className="chatbar">
      <input className="chatbar-username"
      placeholder="[Your Name (Optional)]"
      value={this.state.username}
      onChange={(ev) => this.handleKeyPress(ev, 'username')}
      onKeyPress={(ev) => this.handleKeyPress(ev, 'username')}
      />
      <input className="chatbar-message"
      placeholder="Type a message and hit ENTER"

      onChange={ (ev) => this.handleKeyPress(ev, 'content')}
      onKeyPress={(ev) => this.handleKeyPress(ev, 'content')}
      value={this.state.content}
      />
      </footer>
    );
  }
}
export default ChatBar;
