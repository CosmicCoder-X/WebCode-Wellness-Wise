import React, { useState } from 'react';

function MoodTracker() {
  const [mood, setMood] = useState('');

  const handleMoodChange = (e) => {
    setMood(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mood logged:', mood);
  };

  return (
    <div>
      <h3>Track Mood</h3>
      <form onSubmit={handleSubmit}>
        <select value={mood} onChange={handleMoodChange}>
          <option value="">Select Mood</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="stressed">Stressed</option>
          <option value="relaxed">Relaxed</option>
        </select>
        <button type="submit">Log Mood</button>
      </form>
    </div>
  );
}

export default MoodTracker;