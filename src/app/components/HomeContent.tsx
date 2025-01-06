import React from 'react';

export const HomeContent = () => {
  return (
    <div>
      <section
        className="hero"
        style={{
          backgroundImage: "url(rambo.jpg)", // Correct path for the public folder
        }}
      >
        <div>
          <h1 className='fade-in'>Welcome to The World of Shoes</h1>
          <p>Your one-stop for the best shoes</p>

          <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
};
export default HomeContent;
