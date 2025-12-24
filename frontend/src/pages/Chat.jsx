import { useState } from "react";
import { sendQuestion } from "../services/api.js";
import ChatBox from "../components/ChatBox";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSend() {
    if (!input.trim() || isLoading) return;

    const studentMessage = {
      role: "student",
      text: input
    };

    // 1️⃣ Show student message immediately
    setMessages(prev => [...prev, studentMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      // 2️⃣ Ask backend
      const answer = await sendQuestion(studentMessage.text);

      const teacherMessage = {
        role: "teacher",
        text: answer
      };

      // 3️⃣ Show teacher response
      setMessages(prev => [...prev, teacherMessage]);
    } catch (err) {
      // 4️⃣ Show error as teacher message
      setMessages(prev => [
        ...prev,
        {
          role: "teacher",
          text: "Sorry, something went wrong. Please try again."
        }
      ]);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ChatBox
      messages={messages}
      input={input}
      setInput={setInput}
      onSend={handleSend}
      isLoading={isLoading}
    />
  );
}
