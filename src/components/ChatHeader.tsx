import { MessageSquare } from "lucide-react";

const ChatHeader = () => {
  return (
    <header className="border-b border-border bg-card px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/83374843-e276-467b-82d8-6cf217179543.png" 
            alt="Mingo Logo" 
            className="h-8 w-8 rounded-lg shadow-glow-primary"
          />
          <div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Mingo
            </h1>
            <p className="text-xs text-muted-foreground">AI Assistant</p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            Online
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;