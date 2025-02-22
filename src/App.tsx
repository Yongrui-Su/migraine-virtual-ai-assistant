
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import BookAppointment from "./pages/BookAppointment";
import Profile from "./pages/Profile";
import Privacy from "./pages/Privacy";
import { HelmetProvider, Helmet } from 'react-helmet-async';

const queryClient = new QueryClient();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  console.log("RootLayout");
  return (
    <>
      {children}
      <script
        src="https://www.chat-data.com/embed.min.js?chatbotId=67ba1d0df986e3dc071a4cd5"
        async
        defer
      />
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <script
            src="https://www.chat-data.com/embed.min.js?chatbotId=67ba1d0df986e3dc071a4cd5"
            async
            defer
          />
        </Helmet>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
