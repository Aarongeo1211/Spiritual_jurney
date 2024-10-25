import React from 'react';
import { FaithPage } from './FaithPage';

const hinduData = {
  religion: 'hindu' as const,
  title: 'Hindu Temple & Cultural Center',
  backgroundImage: 'https://images.unsplash.com/photo-1555394692-f34f6ad3d54a?auto=format&fit=crop&q=80',
  schedule: [
    'Morning Aarti: 7:00 AM',
    'Evening Aarti: 7:00 PM',
    'Bhajan Session: Saturday 6:00 PM',
    'Meditation: Daily 6:30 AM'
  ],
  location: {
    address: '456 Temple Road, Cityville, ST 12345',
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  events: [
    {
      title: 'Diwali Celebration',
      date: 'November 1, 2024',
      time: '6:00 PM'
    },
    {
      title: 'Yoga Workshop',
      date: 'March 20, 2024',
      time: '9:00 AM'
    }
  ],
  contact: {
    phone: '(555) 234-5678',
    email: 'info@hindutemple.org'
  }
};

function HinduPage() {
  return <FaithPage {...hinduData} />;
}

export default HinduPage;