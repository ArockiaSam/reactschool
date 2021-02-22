import React from 'react';
import SockJsClient from 'react-stomp';

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        showingAlert: false,
        alertMsg : ''
      };
      this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert(msg) {
    console.log(msg);
    this.setState({
        alertMsg : msg,
        showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        alertMsg : "",
        showingAlert: false
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <SockJsClient url='http://localhost:8080/school/scool-socket' topics={['/topic/notifications']}
            onMessage={(msg) => { this.handleAlert(msg)}}
            ref={ (client) => { this.clientRef = client }} />
        {/* <label onClick={()=>{this.sendMessage('sdf')}}>sdfsd</label> */}
        <div className={`alert alert-success ${this.state.showingAlert ? '' : 'hide'}`}>
          <strong>{this.state.alertMsg}!</strong>
        </div>
        {/* <button onClick={this.handleClickShowAlert.bind(this)}>
          Show alert
        </button> */}
      </div>
    );
  }
}
export default Notification