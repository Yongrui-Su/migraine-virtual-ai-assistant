
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface MedicalRecord {
  date: string;
  condition: string;
  notes: string;
}

interface UserData {
  name: string;
  email: string;
  medicalHistory: MedicalRecord[];
}

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    navigate("/login");
  };

  if (!userData) return null;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Patient Profile</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <div className="grid gap-6">
          <Card className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Personal Information</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> {userData.name}</p>
              <p><span className="font-medium">Email:</span> {userData.email}</p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Medical History</h2>
            <div className="space-y-4">
              {userData.medicalHistory.map((record, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 p-4"
                >
                  <p className="mb-2 text-sm text-gray-500">{record.date}</p>
                  <p className="mb-1 font-medium">{record.condition}</p>
                  <p className="text-gray-600">{record.notes}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
