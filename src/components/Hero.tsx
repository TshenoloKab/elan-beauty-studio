import './Hero.css';

const pexels = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-bg">
      <img src={pexels(31788961)} alt="Elegant African woman with professional makeup" loading="eager" />
    </div>
    <div className="hero-overlay" />
    <div className="hero-weave" />
    <div className="hero-deco" />
    <div className="container hero-content">
      <span className="hero-eyebrow">Gaborone, Botswana</span>
      <h1 className="hero-title">Where Beauty<br />Meets Artistry.</h1>
      <p className="hero-text">
        Discover a beauty experience inspired by elegance, creativity and the confidence of every woman.
        From flawless makeup to beautifully crafted nails, let your individuality shine.
      </p>
      <div className="hero-cta">
        <a href="#services" className="btn btn-primary">Explore Our Services</a>
        <a href="#contact" className="btn btn-secondary">Book Your Appointment</a>
      </div>
    </div>
  </section>
);

export default Hero;