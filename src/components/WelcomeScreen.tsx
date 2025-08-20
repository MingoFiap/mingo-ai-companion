import mingoLogo from "@/assets/mingo-flamingo-logo.png";

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 animate-fade-in">
      {/* Logo with glow effect */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full scale-150 animate-pulse"></div>
        <img 
          src={mingoLogo} 
          alt="MinGo Logo" 
          className="relative h-24 w-24 object-contain shadow-glow-primary transition-smooth hover:scale-110"
        />
      </div>
      
      {/* Welcome message */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          MinGo
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-md mx-auto leading-relaxed">
          Olá. O que podemos te ajudar?
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="flex space-x-2 opacity-60">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default WelcomeScreen;