
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Card } from "@/components/ui/card";

type AppointmentFormData = {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  concerns: string;
};

const BookAppointment = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AppointmentFormData>();
  const { toast } = useToast();

  const onSubmit = (data: AppointmentFormData) => {
    console.log("Appointment data:", data);
    toast({
      title: "Appointment Request Received",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    reset();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl animate-fadeIn">
      <h1 className="text-3xl font-bold text-center mb-8">Book an Appointment</h1>
      <Card className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              {...register("phone", { required: "Phone number is required" })}
              placeholder="(555) 555-5555"
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredDate">Preferred Date</Label>
            <Input
              id="preferredDate"
              type="date"
              {...register("preferredDate", { required: "Please select a date" })}
              min={new Date().toISOString().split("T")[0]}
            />
            {errors.preferredDate && (
              <p className="text-sm text-destructive">
                {errors.preferredDate.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="concerns">Your Concerns</Label>
            <Input
              id="concerns"
              {...register("concerns")}
              placeholder="Please describe your symptoms or concerns"
            />
          </div>

          <Button type="submit" className="w-full">
            Request Appointment
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default BookAppointment;
