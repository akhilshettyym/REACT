import ChatbotIcon from "./components/ChatbotIcon";

const App = () => {
  return <div className="container">
    <div className="chatbot-popup">
      {/* Chatbot Header */}
      <div className="chat-header">
        <div className="header-info">
          <ChatbotIcon />
          <h2 className="logo-text">Chatbot</h2>
        </div>
        <button className="material-symbols-rounded">keyboard_arrow_down</button>
      </div>

      {/* Chatbot Body */}
      <div className="chat-body">
        <div className="message bot-message">

        </div>
      </div>
    </div>
  </div>

};
export default App
