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

  const handleNameClicked = () =>{
    setNameClicked(true);
  }

  const handleGoBack = () =>{
    setNameClicked(false);
  }

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

              <div className="message-list" >
                <div className="message-info">
                  <button onClick={handleNameClicked}>
                  <div className="message-icon"></div>
                  <div id="wasss" >
                    <h1 className="message-name">Pranav Ray</h1>
                    <h2 className="message-content">
                      Okay please hold on while i confirm
                    </h2>
                  </div>
                   <div>
                  <h3 className="time-message">5 min</h3>
                </div>
                  </button>
                </div>
               
              </div>
            </div>

            {nameClicked ? (
              <div className="chat-popup">
                <div id="messa" className="message-list message-converse">
                 
                  <div className="message-info">
                  <FontAwesomeIcon icon={faAngleLeft} className="messages-back" onClick={handleGoBack}/>
                    <div className="message-icon-converse"></div>
                    <div className="name-message mx-3">
                      <h1 className="message-name">Pranav Ray</h1>
                      <h2 className="message-person-status">Online</h2>
                    </div>
                  </div>
                  <div id="down-down" className="message-icon-utils cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M5 15.4902C3.48 15.4902 2.25 14.2774 2.25 12.7788C2.25 11.2801 3.48 10.0674 5 10.0674C6.52 10.0674 7.75 11.2801 7.75 12.7788C7.75 14.2774 6.52 15.4902 5 15.4902ZM5 11.5463C4.31 11.5463 3.75 12.0985 3.75 12.7788C3.75 13.4591 4.31 14.0112 5 14.0112C5.69 14.0112 6.25 13.4591 6.25 12.7788C6.25 12.0985 5.69 11.5463 5 11.5463Z"
                        fill="black"
                      />
                      <path
                        d="M19 15.4902C17.48 15.4902 16.25 14.2774 16.25 12.7788C16.25 11.2801 17.48 10.0674 19 10.0674C20.52 10.0674 21.75 11.2801 21.75 12.7788C21.75 14.2774 20.52 15.4902 19 15.4902ZM19 11.5463C18.31 11.5463 17.75 12.0985 17.75 12.7788C17.75 13.4591 18.31 14.0112 19 14.0112C19.69 14.0112 20.25 13.4591 20.25 12.7788C20.25 12.0985 19.69 11.5463 19 11.5463Z"
                        fill="black"
                      />
                      <path
                        d="M12 15.4902C10.48 15.4902 9.25 14.2774 9.25 12.7788C9.25 11.2801 10.48 10.0674 12 10.0674C13.52 10.0674 14.75 11.2801 14.75 12.7788C14.75 14.2774 13.52 15.4902 12 15.4902ZM12 11.5463C11.31 11.5463 10.75 12.0985 10.75 12.7788C10.75 13.4591 11.31 14.0112 12 14.0112C12.69 14.0112 13.25 13.4591 13.25 12.7788C13.25 12.0985 12.69 11.5463 12 11.5463Z"
                        fill="black"
                      />
                    </svg>
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
