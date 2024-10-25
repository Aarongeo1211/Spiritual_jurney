import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cross } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Spiritual Journey
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 max-w-6xl mx-auto">
          {/* Christian Symbol */}
          <div 
            onClick={() => navigate('/christian')}
            className="group relative flex flex-col items-center transform hover:scale-105 transition-all cursor-pointer"
          >
            <div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full shadow-lg group-hover:shadow-blue-500/50 transition-all">
              <Cross size={64} className="text-white" />
            </div>
            <p className="mt-4 text-xl font-semibold text-blue-400">Christianity</p>
          </div>

          {/* Hindu Symbol */}
          <div 
            onClick={() => navigate('/hindu')}
            className="group relative flex flex-col items-center transform hover:scale-105 transition-all cursor-pointer"
          >
            <div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-700 rounded-full shadow-lg group-hover:shadow-orange-500/50 transition-all">
              <span className="text-5xl text-white">ॐ</span>
            </div>
            <p className="mt-4 text-xl font-semibold text-orange-400">Hinduism</p>
          </div>

          {/* Islamic Symbol */}
          <div 
            onClick={() => navigate('/islamic')}
            className="group relative flex flex-col items-center transform hover:scale-105 transition-all cursor-pointer"
          >
            <div className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700 rounded-full shadow-lg group-hover:shadow-green-500/50 transition-all">
              <span className="text-5xl text-white">☪</span>
            </div>
            <p className="mt-4 text-xl font-semibold text-green-400">Islam</p>
          </div>
        </div>

        <p className="mt-16 text-gray-400 text-center max-w-2xl">
          Explore the divine through different paths of spirituality. Each symbol represents a gateway to understanding and appreciation.
        </p>
      </div>
    </div>
  );
}

export default HomePage;