import React from 'react';
import { FaithPage } from './FaithPage';

const islamicData = {
  religion: 'islamic' as const,
  title: 'Islamic Center',
  backgroundImage: 'https://images.unsplash.com/photo-1564769625392-651b04498841?auto=format&fit=crop&q=80',
  schedule: [
    'Fajr: 5:30 AM',
    'Zuhr: 1:30 PM',
    'Asr: 4:45 PM',
    'Maghrib: 7:30 PM',
    'Isha: 9:00 PM',
    'Jummah: Friday 1:30 PM'
  ],
  location: {
    address: '789 Peace Avenue, Cityville, ST 12345',
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  events: [
    {
      title: 'Ramadan Iftar',
      date: 'March 10, 2024',
      time: '6:30 PM'
    },
    {
      title: 'Islamic Studies Class',
      date: 'March 16, 2024',
      time: '11:00 AM'
    }
  ],
  contact: {
    phone: '(555) 345-6789',
    email: 'info@islamiccenter.org'
  }
};

function IslamicPage() {
  return <FaithPage {...islamicData} />;
}

export default IslamicPage;