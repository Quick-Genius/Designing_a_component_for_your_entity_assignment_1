// write the component code here
// components/card/usercard.jsx
import React from 'react';

const Usercard = () => {
  // Static user details
  const profilePhoto = "./assets/download.png"; // Placeholder image URL
  const name = "Alukk Ricchi Rich";
  const mail = "Alukk.Ricchi@gmail.com";
  const phoneNumber = "+91 9382938742";
  const address = "11/236, Billa Nagar, Near Jhumri Talaiya, Jharkhand, India";

  return (
    <div style={styles.card}>
      <img src={profilePhoto} alt="Profile" style={styles.profilePhoto} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.detail}><strong>Email:</strong> {mail}</p>
      <p style={styles.detail}><strong>Phone:</strong> {phoneNumber}</p>
      <p style={styles.detail}><strong>Address:</strong> {address}</p>
    </div>
  );
};

// Styles for the card component
const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  profilePhoto: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '16px',
  },
  name: {
    fontSize: '24px',
    margin: '8px 0',
    color: '#333',
  },
  detail: {
    fontSize: '14px',
    margin: '8px 0',
    color: '#666',
  },
};

export default Usercard;