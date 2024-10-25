import React from 'react';
import { FaithPage } from './FaithPage';

const christianData = {
  religion: 'christian' as const,
  title: 'Christian Community Center',
  backgroundImage: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80',
  schedule: [
    'Sunday Service: 10:00 AM',
    'Wednesday Bible Study: 7:00 PM',
    'Youth Group: Friday 6:30 PM',
    'Morning Prayer: Daily 6:00 AM'
  ],
  location: {
    address: '123 Faith Street, Cityville, ST 12345',
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  events: [
    {
      title: 'Easter Service',
      date: 'April 9, 2024',
      time: '10:00 AM'
    },
    {
      title: 'Community Outreach',
      date: 'March 15, 2024',
      time: '9:00 AM'
    }
  ],
  contact: {
    phone: '(555) 123-4567',
    email: 'info@christiancenter.org'
  }
};

function ChristianPage() {
  return <FaithPage {...christianData} />;
}

export default ChristianPage;