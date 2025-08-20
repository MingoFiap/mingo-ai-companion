import { MessageSquare } from "lucide-react";
import mingoLogo from "@/assets/mingo-flamingo-logo.png";

const ChatHeader = () => {
  return (
    <header className="border-b border-border bg-card px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img 
            src={mingoLogo} 
            alt="MinGo Logo" 
            className="h-8 w-8 rounded-lg shadow-glow-primary object-contain"
          />
          <div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MinGo
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