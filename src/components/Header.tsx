
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/book-appointment")}
            >
              Book Appointment
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/profile")}
            >
              Profile
            </Button>
            <Button onClick={() => navigate("/book-appointment")}>
              Get Started
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
