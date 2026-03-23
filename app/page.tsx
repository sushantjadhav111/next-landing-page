import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#fafafa' }}>
      <h1>Welcome to Henzo Coffee</h1>
      <p>Your favorite spot for freshly brewed coffee!</p>
      <img src="/images/coffee-shop.jpg" alt="Coffee Shop" style={{ width: '60%', borderRadius: '8px' }} />
      <h2>Why Choose Us?</h2>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        <li>☕ Freshly Roasted Coffee</li>
        <li>🍰 Delicious Baked Goods</li>
        <li>🛋️ Cozy Atmosphere</li>
        <li>📍 Convenient Location</li>
      </ul>
      <button style={{ padding: '10px 20px', backgroundColor: '#6f4c3e', color: 'white', border: 'none', borderRadius: '5px' }}>
        Visit Us Today!
      </button>
    </div>
  );
};

export default Home;