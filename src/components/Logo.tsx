
import React from "react";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
      <div className="relative">
        <Brain className="w-8 h-8" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-foreground rounded-full border-2 border-primary"></div>
      </div>
      <span className="font-bold text-xl tracking-tight">MigraineCare</span>
    </Link>
  );
};

export default Logo;
