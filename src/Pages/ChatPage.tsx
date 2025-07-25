import React, { useRef } from 'react';
import Layout from '@/components/ui/Layout';
import ChatBot, { ChatBotRefs } from '@/components/ui/Chatbot';

const ChatPage = () => {
  const chatBotRef = useRef<ChatBotRefs>(null);

  const handleSuggestionClick = (suggestion: string) => {
    const input = chatBotRef.current?.inputRef.current;
    const button = chatBotRef.current?.buttonRef.current;

    if (input && button) {
      // ✅ Use input event to update React state binding
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )?.set;

      nativeInputValueSetter?.call(input, suggestion);

      const event = new Event('input', { bubbles: true });
      input.dispatchEvent(event);

      // ✅ Wait a bit to allow React state update, then click
      setTimeout(() => button.click(), 100);
    }
  };

  return (
    <Layout>
      <div className="container max-w-6xl py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Travel Assistant</h1>
          <p className="text-muted-foreground">
            Get personalized recommendations and answers to all your travel questions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">How Can I Help You?</h2>
              <ul className="space-y-3">
                <li className="text-sm">• Find the best destinations based on your interests</li>
                <li className="text-sm">• Get information about specific places</li>
                <li className="text-sm">• Learn about local customs and traditions</li>
                <li className="text-sm">• Discover the best time to visit destinations</li>
                <li className="text-sm">• Find out about ticket prices and booking options</li>
              </ul>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Popular Questions</h2>
              <div className="space-y-3">
                {[
                  "What's the best time to visit Kerala?",
                  'Tell me about the Taj Mahal',
                  'What should I pack for a trip to Ladakh?',
                  'How much do tickets cost for Jaipur City Palace?',
                  'Tell me about Indian cuisine',
                  'What are the best destinations to visit in India?',
                  'Is it safe to travel in India?',
                ].map((q) => (
                  <div
                    key={q}
                    className="bg-background p-3 rounded-md text-sm cursor-pointer hover:bg-india-orange/5 transition-colors"
                    onClick={() => handleSuggestionClick(q)}
                  >
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <ChatBot ref={chatBotRef} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatPage;
