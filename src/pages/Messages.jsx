import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MessageList from "../components/MessageList";
import MessageBox from "../components/MessageBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Messages = () => {
  const [message, setMessage] = useState("");
  const [nameClicked, setNameClicked] = useState(false);

  const handleNameClicked = () => {
    setNameClicked(true);
  };

  const handleGoBack = () => {
    setNameClicked(false);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ovrl">
        <div className="ovrl-sub">
          <div className="messages">
            <div className="message-records">
              <div>
                <h1 className="settings-header">Messages</h1>
              </div>

              
                <button className="bass" onClick={handleNameClicked}>
                <div className="message-info">
                  <div className="message-icon"></div>
                  <div id="wasss">
                    <h1 className="message-name">Pranav Ray</h1>
                    <h2 className="message-content">
                      Okay please hold on while i confirm
                    </h2>
                  </div>
                  <div>
                    <h3 className="time-message">5 min</h3>
                  </div>
                </div>
                </button>
             
            </div>

            {nameClicked ? (
              <div className="chat-popup">
               
                  <div className="message-info">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="messages-back"
                      onClick={handleGoBack}
                    />
                    <div className="message-icon-converse"></div>
                    <div className="name-message mx-3">
                      <h1 className="message-name">Pranav Ray</h1>
                      <h2 className="message-person-status">Online</h2>
                    </div>
                  </div>
                  
                   

                <div className="message-chat">
                  <div className="receiver-message">
                    <h2>Hi</h2>
                    <h2>Can you please check my bid details</h2>
                    <h3 className="message-time">1:24pm</h3>
                  </div>
                  <div className="sender-message">
                    <h2>Hey</h2>
                    <h2>Hey boss how you doing?</h2>
                    <h3 className="message-time">1:45pm</h3>
                  </div>
                </div>

                <div id="down-down" className="messaging-box px-12">
                  <MessageBox message={message} setMessage={setMessage} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
