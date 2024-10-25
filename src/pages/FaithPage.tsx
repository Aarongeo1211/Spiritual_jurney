import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { ChatBot } from '../components/ChatBot';
import { InfoPanel } from '../components/InfoPanel';

interface FaithPageProps {
  religion: 'christian' | 'hindu' | 'islamic';
  title: string;
  backgroundImage: string;
  schedule: string[];
  location: {
    address: string;
    coordinates: { lat: number; lng: number };
  };
  events: Array<{
    title: string;
    date: string;
    time: string;
  }>;
  contact: {
    phone: string;
    email: string;
  };
}

export function FaithPage({
  religion,
  title,
  backgroundImage,
  schedule,
  location,
  events,
  contact,
}: FaithPageProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <nav className="relative z-10 flex items-center justify-between p-6">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition"
          >
            <Home className="inline-block mr-2" size={20} />
            Home
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Chatbot */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Ask Questions</h2>
            <ChatBot religion={religion} />
          </div>

          {/* Right Column - Info Panel */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Information</h2>
            <InfoPanel
              religion={religion}
              schedule={schedule}
              location={location}
              events={events}
              contact={contact}
            />
          </div>
        </div>
      </div>
    </div>
  );
}