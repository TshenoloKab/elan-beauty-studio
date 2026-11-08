import './About.css';

const pexels = (id: number, w = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const About = () => (
  <section id="about" className="section">
    <div className="container about-grid">
      <div className="about-img">
        <img src="/about-image.jpg" alt="Elegant African woman beauty portrait" loading="lazy" />
      </div>
      <div className="about-text">
        <span className="section-label">About Us</span>
        <h2>Beauty Rooted in Confidence. Inspired by Elegance.</h2>
        <p>
          Élan Beauty Studio brings together professional beauty artistry and contemporary African elegance.
          We celebrate individual beauty, attention to detail and personalised experiences that make every
          client feel seen, radiant and confident.
        </p>
        <p>
          From soft, natural looks to bold editorial glam, our work is guided by quality, creativity and a
          deep respect for the uniqueness of every woman who sits in our chair.
        </p>
        <div className="about-points">
          <div className="about-point"><strong>Individual Beauty</strong><span>Looks tailored to you, never one-size-fits-all.</span></div>
          <div className="about-point"><strong>Attention to Detail</strong><span>Precision in every brushstroke and finish.</span></div>
          <div className="about-point"><strong>Personalised Experience</strong><span>A calm, welcoming beauty journey.</span></div>
          <div className="about-point"><strong>Quality & Creativity</strong><span>Premium products, artistic vision.</span></div>
        </div>
      </div>
    </div>
  </section>
);

export default About;