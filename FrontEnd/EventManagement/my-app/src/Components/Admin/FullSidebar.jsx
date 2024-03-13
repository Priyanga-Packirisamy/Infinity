import React, { useState } from 'react';
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from './Sidebar';
import { Link } from 'react-router-dom';

export default function FullSidebar() {
  const [activeItem, setActiveItem] = useState('');

  return (
    <div className="flex">
      <Sidebar>
        <Link to="/home">
          <SidebarItem
            icon={<Home size={20} />}
            text="Home"
            active
            isActive={activeItem === 'home'}
            onClick={() => setActiveItem('home')}
          />
        </Link>
        <Link to="/dashboard">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
            isActive={activeItem === 'dashboard'}
            onClick={() => setActiveItem('dashboard')}
          />
        </Link>
        <Link to="/events">
          <SidebarItem
            icon={<Layers size={20} />}
            text="Events"
            isActive={activeItem === 'events'}
            onClick={() => setActiveItem('events')}
          />
        </Link>

        <Link to="/eventform">
          <SidebarItem
            icon={<LifeBuoy size={20} />}
            text="Add Events"
            isActive={activeItem === 'addevents'}
            onClick={() => setActiveItem('addevents')}
          />
        </Link>

        <Link to="/booked">
          <SidebarItem
            icon={<Calendar size={20} />}
            text="Booking"
            isActive={activeItem === 'booked'}
            onClick={() => setActiveItem('booked')}
          />
        </Link>

        <Link to="/payhistory">
          <SidebarItem
            icon={<Flag size={20} />}
            text="Payment History"
            isActive={activeItem === 'payhistory'}
            onClick={() => setActiveItem('payhistory')}
          />
        </Link>
        <hr className="my-3"/>
      </Sidebar>
    </div>
  );
}
