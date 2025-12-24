import Message from "./Message";

export default function ChatBox({
  messages,
  input,
  setInput,
  onSend,
  isLoading,
}) {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">Chat with your AI Tutor</div>
        <div className="card-body" style={{ height: "500px", overflowY: "auto" }}>
          {messages.length === 0 && (
            <p className="text-muted text-center">
              Ask a question to start learning 📘
            </p>
          )}

          {messages.map((msg, index) => (
            <Message key={index} role={msg.role} text={msg.text} />
          ))}

          {isLoading && (
            <p className="text-muted mt-2">
              Teacher is thinking…
            </p>
          )}
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSend()}
              placeholder="Ask your question..."
              className="form-control"
              disabled={isLoading}
            />
            <button
              onClick={onSend}
              disabled={isLoading}
              className="btn btn-primary"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
