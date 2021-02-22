import React from 'react';
import SockJsClient from 'react-stomp';

class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage = (msg) => {
    this.clientRef.sendMessage('/app/hello', 'hi kasama');
  }

  render() {
    return (
      <div>
        <SockJsClient url='http://localhost:8080/school/scool-socket' topics={['/topic/message']}
            onMessage={(msg) => { console.log(msg); }}
            ref={ (client) => { this.clientRef = client }} />
        <label onClick={()=>{this.sendMessage('message from react')}}>send message</label>
      </div>
    );
  }
}
export default SampleComponent