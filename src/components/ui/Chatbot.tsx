import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send } from 'lucide-react';
import { destinations } from '@/Data/destinations';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatBotRefs {
  inputRef: React.RefObject<HTMLInputElement>;
  buttonRef: React.RefObject<HTMLButtonElement>;
}

const ChatBot = forwardRef<ChatBotRefs>((_, ref) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content:
        "Hello! I'm your India Travel Assistant. Ask me anything about Indian tourist destinations!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { toast } = useToast();

  useImperativeHandle(ref, () => ({
    inputRef,
    buttonRef,
  }));

  const generateResponse = (query: string): string => {
    const lowercaseQuery = query.toLowerCase();

    if (
      lowercaseQuery.includes('hello') ||
      lowercaseQuery.includes('hi') ||
      lowercaseQuery.includes('hey')
    ) {
      return 'Hello! How can I help you plan your trip to India today?';
    }

    for (const destination of destinations) {
      const destinationName = destination.name.toLowerCase();

      if (lowercaseQuery.includes(destinationName)) {
        if (
          lowercaseQuery.includes('best time') ||
          lowercaseQuery.includes('when to visit') ||
          lowercaseQuery.includes('weather')
        ) {
          return `The best time to visit ${destination.name} is during ${destination.bestTimeToVisit}.`;
        }

        if (
          lowercaseQuery.includes('things to do') ||
          lowercaseQuery.includes('activities') ||
          lowercaseQuery.includes('attractions') ||
          lowercaseQuery.includes('what to see') ||
          lowercaseQuery.includes('see') ||
          lowercaseQuery.includes('visit')
        ) {
          return `At ${destination.name}, you can explore: ${destination.thingsToSee.join(', ')}.`;
        }

        if (
          lowercaseQuery.includes('cost') ||
          lowercaseQuery.includes('price') ||
          lowercaseQuery.includes('ticket') ||
          lowercaseQuery.includes('fee') ||
          lowercaseQuery.includes('how much')
        ) {
          return `The entry fees for ${destination.name} range from ${destination.bookingInfo.priceRange}.`;
        }

        if (
          lowercaseQuery.includes('video') ||
          lowercaseQuery.includes('watch') ||
          lowercaseQuery.includes('youtube') ||
          lowercaseQuery.includes('tour')
        ) {
          return `You can watch a video tour of ${destination.name} on our destination page. Just navigate to /destination/${destination.id} or click on the destination card from the home page and go to the Video Tour tab!`;
        }

        return `${destination.description} The best time to visit is ${destination.bestTimeToVisit}. Popular attractions include ${destination.thingsToSee.join(
          ', '
        )}.`;
      }
    }

    if (
      lowercaseQuery.includes('food') ||
      lowercaseQuery.includes('cuisine') ||
      lowercaseQuery.includes('eat')
    ) {
      return 'Indian cuisine is diverse and varies by region. Popular dishes include Butter Chicken, Biryani, Dosa, Chole Bhature, and many more. Each state has its own specialties worth trying!';
    }

    if (
      lowercaseQuery.includes('transport') ||
      lowercaseQuery.includes('travel') ||
      lowercaseQuery.includes('getting around') ||
      lowercaseQuery.includes('how to travel')
    ) {
      return 'India has various transportation options including flights, trains, buses, taxis, and auto-rickshaws. Ride-sharing apps like Uber and Ola are popular in cities.';
    }

    if (
      lowercaseQuery.includes('weather') ||
      lowercaseQuery.includes('climate') ||
      lowercaseQuery.includes('temperature') ||
      lowercaseQuery.includes('season')
    ) {
      return 'India has diverse climates. Northern India gets cold winters (Nov–Feb), southern India stays moderate year-round. Summer (Apr–Jun) can be hot, and monsoon (Jul–Sep) is rainy. Best time to visit: Oct–Mar.';
    }

    if (
      lowercaseQuery.includes('destination') ||
      lowercaseQuery.includes('place') ||
      lowercaseQuery.includes('location') ||
      lowercaseQuery.includes('where') ||
      lowercaseQuery.includes('recommend') ||
      lowercaseQuery.includes('best')
    ) {
      return 'Popular Indian destinations include: Taj Mahal, Jaipur, Varanasi, Goa, Kerala Backwaters, and Ladakh. Which one are you curious about?';
    }

    if (
      lowercaseQuery.includes('safe') ||
      lowercaseQuery.includes('safety') ||
      lowercaseQuery.includes('precaution') ||
      lowercaseQuery.includes('danger')
    ) {
      return 'India is generally safe for tourists. Standard precautions are advised. Stick to tourist-friendly zones and keep belongings secure.';
    }

    return "I can help you with info about destinations, travel tips, cuisine, or safety in India. Just ask anything!";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botContent = generateResponse(userMessage.content);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botContent,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);

      if (Math.random() > 0.9) {
        const suggestions = [
          'Try asking about the best time to visit a destination!',
          'Curious about attractions? Just ask!',
          'Want a video tour? Mention it!',
          'Ask about Indian cuisine!',
        ];
        const tip = suggestions[Math.floor(Math.random() * suggestions.length)];
        toast({ title: 'Travel Assistant Tip', description: tip });
      }
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Card className="w-full h-[600px] max-w-2xl mx-auto flex flex-col">
      <CardHeader className="border-b bg-muted/50">
        <CardTitle className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-india-orange flex items-center justify-center">
            <Send className="h-4 w-4 text-white" />
          </div>
          India Travel Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden p-0">
        <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${m.sender === 'user' ? 'bg-india-orange text-white' : 'bg-muted'}`}>
                  {m.sender === 'bot' && (
                    <div className="flex items-center gap-2 mb-1">
                      <Avatar className="h-6 w-6">
                        <div className="h-full w-full rounded-full bg-india-orange flex items-center justify-center">
                          <span className="text-xs font-bold text-white">AI</span>
                        </div>
                      </Avatar>
                      <span className="text-xs font-medium">Travel Assistant</span>
                    </div>
                  )}
                  <p className="text-sm">{m.content}</p>
                  <p className="text-xs opacity-70 mt-1 text-right">
                    {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                  <p className="text-sm">
                    <span className="inline-flex gap-1">
                      <span className="animate-bounce">.</span>
                      <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
                      <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
                    </span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t p-2">
        <div className="flex w-full items-center gap-2">
          <Input
            placeholder="Ask about tourist places in India..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
            ref={inputRef}
          />
          <Button size="icon" onClick={handleSendMessage} ref={buttonRef}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
});

ChatBot.displayName = 'ChatBot';

export default ChatBot;
