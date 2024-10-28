import React from 'react';
import EventList from './EventList';
import Header from './Header';
import { events } from '../mockData'; // Import events from mockData or define it here

const MainPage = () => {
  return (
    <div>
      <Header/>      
      <EventList />   
    </div>
  );
};

export default MainPage;
