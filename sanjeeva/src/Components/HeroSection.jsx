function Hero() {
  return (
    <section className="hero">

      <p className="hero-small">
        Real-time blood availability
      </p>

      <h1 className="hero-title">
        Every drop.
        <br />
        Every second.
      </h1>

      <p className="hero-text">
        Sanjeeva connects patients with nearby blood banks and hospitals during emergencies.
      </p>

      <div className="hero-buttons">

        <button className="red-btn">
          Find Blood
        </button>

        <button className="dark-btn">
          Emergency Request
        </button>

      </div>

      <div className="hero-stats">

        <div>
          <h2>12K+</h2>
          <p>Donors</p>
        </div>

        <div>
          <h2>340+</h2>
          <p>Hospitals</p>
        </div>

        <div>
          <h2>99%</h2>
          <p>Success</p>
        </div>

      </div>

    </section>
  );
}

export default Hero;