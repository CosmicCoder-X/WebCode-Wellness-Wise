import React from 'react';

function ActivityLog() {
  return (
    <div>
      <h3>Log Activity</h3>
      <form>
        <label>Sleep Hours:</label>
        <input type="number" min="0" max="24" placeholder="Hours" />
        <label>Meals:</label>
        <input type="text" placeholder="Meals" />
        <label>Exercise:</label>
        <input type="text" placeholder="Exercise Type" />
        <button type="submit">Save Log</button>
      </form>
    </div>
  );
}

export default ActivityLog;