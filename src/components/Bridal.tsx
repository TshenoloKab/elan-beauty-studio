import './Bridal.css';

const pexels = (id: number, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const Bridal = () => (
  <section id="bridal" className="section bridal">
    <div className="container bridal-grid">
      <div className="bridal-img">
        <img src="/bridal.jpg" alt="African bride wedding makeup" loading="lazy" />
      </div>
      <div>
        <span className="section-label">Bridal Experience</span>
        <h2 className="section-title">Your Special Day Deserves Extraordinary Beauty.</h2>
        <p className="section-subtitle">
          From the first brushstroke to the finishing touches, we create beauty experiences that make your
          special moments unforgettable.
        </p>
        <ul className="bridal-list">
          <li>Bridal makeup</li>
          <li>Bridal party makeup</li>
          <li>Wedding-day nail styling</li>
          <li>Personalised bridal consultations</li>
        </ul>
        <a href="#contact" className="btn btn-gold">Enquire About Bridal Packages</a>
      </div>
    </div>
  </section>
);

export default Bridal;