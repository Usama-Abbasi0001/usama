import React, { useState } from 'react'
import {  Paper} from '../Utils/Icons';
import ChatBot from '../images/chatbot.jpg';
function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
  
    const toggleChat = () => {
      setIsOpen(!isOpen);
    };
  
    const sendMessage = () => {
      if (input.trim() !== "") {
        setMessages([...messages, { text: input, sender: "user" }]);
        setInput("");
  
        // Simulated bot response
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { text: "Hello! How can I help?", sender: "bot" },
          ]);
        }, 1000);
      }
    };
  return (
    <>
     <div className='flex justify-end items-start z-10 pe-10'>
     <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* Chat Icon */}
      <button
        onClick={toggleChat}
        className="bg-teal-500 text-white flex items-center px-4 py-2 rounded-full shadow-lg"
      >
        <span className="ml-2 font-bold">Chat </span>
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-lg shadow-xl mt-2 flex flex-col overflow-hidden">
          <div className="bg-teal-500 ps-3 text-white text-center py-2  flex items-center space-x-4">
            <div><img src={ChatBot} alt="" className='w-[50px] rounded-[50px]' /></div>
          <div>
          <p className='font-bold'>Hello! How can I help?</p>
          <div className='flex items-center space-x-2'>
            <p className='w-[10px] h-[10px] rounded-[50px] bg-green-400'></p>
            <p>We Reply immediately</p>
          </div>
            </div>
          </div>
          <div className="flex-1 p-2 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 my-1 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-300 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 flex border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 border rounded-lg outline-none text-black "
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="ml-2 text-teal-500">
              <Paper/>
            </button>
          </div>
        </div>
      )}
    </div>
    </div> 
    </>
  )
}

export default Chatbot;
