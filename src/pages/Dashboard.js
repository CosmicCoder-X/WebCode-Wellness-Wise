import React from 'react';
import ActivityLog from '../components/ActivityLog/ActivityLog';
import MoodTracker from '../components/MoodTracker/MoodTracker';
import HealthContent from '../components/HealthContent/HealthContent';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <ActivityLog />
      <MoodTracker />
      <HealthContent />
    </div>
  );
}

export default Dashboard;