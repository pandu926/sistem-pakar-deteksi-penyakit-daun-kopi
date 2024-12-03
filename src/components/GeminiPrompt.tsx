"use client";
import { useState } from "react";
import axios from "axios";

const GeminiChat: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [conversation, setConversation] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isChatVisible, setIsChatVisible] = useState<boolean>(true); // Untuk toggle chat

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    setConversation([...conversation, `You: ${message}`]);
    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/chat", {
        message,
      });
      const formattedResponse = formatGeminiResponse(response.data.response);
      setConversation((prev) => [...prev, `Gemini: ${formattedResponse}`]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setConversation((prev) => [...prev, "Gemini: Error occurred."]);
    } finally {
      setLoading(false);
    }
  };

  const formatGeminiResponse = (response: string): string => {
    return response
      .replace(/1\./g, "<span class='font-semibold text-lg'>1.</span>")
      .replace(/2\./g, "<span class='font-semibold text-lg'>2.</span>")
      .replace(/3\./g, "<span class='font-semibold text-lg'>3.</span>")
      .replace(/•/g, "<ul class='list-disc pl-6'>•</ul>")
      .replace(/\*\*(.*?)\*\*/g, "<p class='font-semibold'>$1</p>")
      .replace(/^\* (.*?)$/gm, "<ul class='list-disc pl-6'><li>$1</li></ul>");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md mx-4 sm:mx-10 md:mx-20 lg:mx-32">
      {/* Toggle Button */}
      <button
        onClick={() => setIsChatVisible(!isChatVisible)}
        className="sm:hidden mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
      >
        {isChatVisible ? "Hide Chat" : "Show Chat"}
      </button>

      {/* Chat Section */}
      {isChatVisible && (
        <div className="w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-800 text-center">
            Tanyakan Pada Agent AI kami
          </h2>

          {/* Percakapan */}
          <div className="w-full max-h-[50vh] sm:max-h-[600px] overflow-y-auto p-4 bg-gray-100 rounded-lg mb-4 text-sm sm:text-base">
            {conversation.length === 0 ? (
              <p className="text-center text-gray-500">Mulai Percakapan</p>
            ) : (
              conversation.map((msg, index) => (
                <div key={index} className="mb-4">
                  {msg.startsWith("You") ? (
                    <div className="text-right">
                      <p className="font-semibold text-sm sm:text-base">You</p>
                      <p className="bg-gray-300 p-2 rounded-lg inline-block text-sm sm:text-base">
                        {msg.replace("You: ", "")}
                      </p>
                    </div>
                  ) : (
                    <div className="text-left">
                      <p className="font-semibold text-base sm:text-lg">
                        KopiBot
                      </p>
                      <div
                        className="bg-white p-2 rounded-lg shadow-md text-sm sm:text-base"
                        dangerouslySetInnerHTML={{
                          __html: msg.replace("Gemini: ", ""),
                        }}
                      />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Input Pesan */}
          <div className="flex flex-col sm:flex-row items-center w-full">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none text-sm sm:text-base mb-4 sm:mb-0"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg sm:rounded-r-lg hover:bg-blue-600 disabled:opacity-50 text-sm sm:text-base"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
