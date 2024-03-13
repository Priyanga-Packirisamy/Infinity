import React, { useState } from 'react';
import { LayoutDashboard, Home, StickyNote, Layers, Flag, Calendar, LifeBuoy, Settings } from "lucide-react";
import OrgSidebar, { SidebarItem } from './OrgSidebar';
import { Link } from 'react-router-dom';

export default function OrgFullSidebar() {

  const [activeItem, setActiveItem] = useState('');

  return (
    <div className="flex">
      <OrgSidebar>
        <Link to="/orghome">
          <SidebarItem
            icon={<Home size={20} />}
            text="Home"
            active
            isActive={activeItem === 'home'}
            onClick={() => setActiveItem('home')}
          />
        </Link>
        <Link to="/profile">
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
            isActive={activeItem === 'dashboard'}
            onClick={() => setActiveItem('dashboard')}
          />
        </Link>
        <Link to="/orgevents">
          <SidebarItem
            icon={<Layers size={20} />}
            text="Events"
            isActive={activeItem === 'events'}
            onClick={() => setActiveItem('events')}
          />
        </Link>
        <Link to="/orgbooked">
          <SidebarItem
            icon={<Calendar size={20} />}
            text="Booked"
            isActive={activeItem === 'booked'}
            onClick={() => setActiveItem('booked')}
          />
        </Link>
        <Link to="/orgpayhis">
          <SidebarItem
            icon={<Flag size={20} />}
            text="Payment History"
            isActive={activeItem === 'payhistory'}
            onClick={() => setActiveItem('payhistory')}
          />
        </Link>
        <hr className="my-3"/>
      </OrgSidebar>
    </div>
  );
}
