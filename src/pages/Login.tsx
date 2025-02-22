
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { mockUserData } from "@/data/mockUser";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userData", JSON.stringify(mockUserData));
      toast({
        title: "Welcome back!",
        description: `Logged in as ${mockUserData.name}`,
      });
      setIsLoading(false);
      navigate("/profile");
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md p-6">
        <div className="text-center">
          <h1 className="mb-6 text-2xl font-bold text-gray-900">
            Virtual Login Demo
          </h1>
          <p className="mb-4 text-gray-600">
            Click the button below to simulate logging in as {mockUserData.name}
          </p>
          <Button
            className="w-full"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Login;
