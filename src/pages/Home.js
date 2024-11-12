import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to Your Health & Wellness Tracker</h1>
      <p>Track your sleep, meals, exercise, and mood to improve your well-being.</p>
      
      <div style={styles.buttonContainer}>
        <Link to="/login" style={styles.button}>
          Log In
        </Link>
        <Link to="/signup" style={styles.button}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '50px',
    padding: '20px',
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default Home;