import React from 'react';
import { MapPin, Calendar, Phone, Mail } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

interface Event {
  title: string;
  date: string;
  time: string;
}

interface InfoPanelProps {
  religion: 'christian' | 'hindu' | 'islamic';
  schedule: string[];
  location: {
    address: string;
    coordinates: { lat: number; lng: number };
  };
  events: Event[];
  contact: {
    phone: string;
    email: string;
  };
}

export function InfoPanel({
  religion,
  schedule,
  location,
  events,
  contact,
}: InfoPanelProps) {
  return (
    <Tabs.Root defaultValue="schedule" className="bg-white rounded-lg shadow-lg p-6">
      <Tabs.List className="flex space-x-4 border-b mb-6">
        <Tabs.Trigger
          value="schedule"
          className="pb-2 px-2 text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-gray-900"
        >
          Schedule
        </Tabs.Trigger>
        <Tabs.Trigger
          value="location"
          className="pb-2 px-2 text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-gray-900"
        >
          Location
        </Tabs.Trigger>
        <Tabs.Trigger
          value="events"
          className="pb-2 px-2 text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-gray-900"
        >
          Events
        </Tabs.Trigger>
        <Tabs.Trigger
          value="contact"
          className="pb-2 px-2 text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-gray-900"
        >
          Contact
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="schedule" className="space-y-4">
        <h3 className="text-lg font-semibold">Service Schedule</h3>
        <ul className="space-y-2">
          {schedule.map((time, index) => (
            <li key={index} className="flex items-center gap-2">
              <Calendar size={16} className="text-gray-500" />
              <span>{time}</span>
            </li>
          ))}
        </ul>
      </Tabs.Content>

      <Tabs.Content value="location" className="space-y-4">
        <h3 className="text-lg font-semibold">Location</h3>
        <div className="flex items-start gap-2">
          <MapPin size={16} className="text-gray-500 mt-1" />
          <span>{location.address}</span>
        </div>
        <div className="h-48 bg-gray-100 rounded-lg">
          {/* Map implementation would go here */}
          <div className="h-full flex items-center justify-center text-gray-500">
            Map View
          </div>
        </div>
      </Tabs.Content>

      <Tabs.Content value="events" className="space-y-4">
        <h3 className="text-lg font-semibold">Upcoming Events</h3>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="border-b pb-4">
              <h4 className="font-medium">{event.title}</h4>
              <p className="text-sm text-gray-600">
                {event.date} at {event.time}
              </p>
            </div>
          ))}
        </div>
      </Tabs.Content>

      <Tabs.Content value="contact" className="space-y-4">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-gray-500" />
            <span>{contact.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-gray-500" />
            <span>{contact.email}</span>
          </div>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}