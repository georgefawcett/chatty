import React, {Component} from 'react';


class Username extends Component {




  render() {

          //If no old or new name (or just spaces), show as Anonymous
            let oldname;
            let newname;
              if (!this.props.oldname || !this.props.oldname.replace(/\s+/g, '')) {
                oldname = "Anonymous";
              } else {
                oldname = this.props.oldname;
              }

              if (!this.props.newname || !this.props.newname.replace(/\s+/g, '')) {
                newname = "Anonymous";
              } else {
                newname = this.props.newname;
              }
    return (

          <div className="message system">

            {oldname} changed their name to {newname}

          </div>


    );


  }
}
export default Username;
