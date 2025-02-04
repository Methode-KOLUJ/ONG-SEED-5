import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md rounded-lg border-2 border-teal-700 dark:border-blue-600 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
  />
);

const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 ${className}`}
  >
    {children}
  </button>
);

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Bonjour ! Comment puis-je vous aider aujourd'hui ?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { type: "user", text: input },
      { type: "bot", text: "Merci pour votre message ! Je serais bientôt capable de répondre aux questions sur l'ONG SEED." },
    ]);

    setInput("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-tl from-blue-950 via-transparent to-red-950 dark:bg-black p-4">
      <Card className="w-full max-w-6xl h-[90vh] max-h-[800px] shadow-2xl rounded-2xl dark:bg-gray-900 dark:text-white">
        <CardContent className="flex flex-col space-y-4 p-4 h-full">
          <div className="flex items-center space-x-2 border-b pb-2">
            <FaComments className="text-teal-600 dark:text-blue-600" size={24} />
            <h1 className="text-xl font-bold">SEED Chatbot</h1>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 scrollbar-thin scrollbar-thumb-gray-300">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex ${message.type === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`${
                    message.type === "bot" ? "bg-gray-100 text-gray-800" : "bg-blue-600 text-white"
                  } p-3 rounded-2xl max-w-xs shadow-md`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center space-x-2 dark:text-black">
            <Input
              className="flex-1"
              placeholder="Écrivez un message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <Button onClick={handleSendMessage} className="bg-teal-600">
              <FaPaperPlane className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;