
import React from "react";

function MessageList() {
  return (
    <div>
      <div className='message-list'>
        <div className='message-info'>
          <div className='message-icon'></div>
          <div className='name-message mx-3'>
            <h1 className='message-name'>Pranav Ray</h1>
            <h2 className='message-content'>
              Okay please hold on while i confirm
            </h2>
          </div>
        </div>
        <div>
          <h3 className='time-message'>5 min</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageList;