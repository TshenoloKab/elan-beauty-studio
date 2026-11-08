import './Services.css';

const pexels = (id: number, w = 700) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const services = [
  {
    title: 'Professional Makeup',
    img: '/makeup.jpg',
    alt: 'Makeup brushes and cosmetics',
    items: ['Soft glam', 'Full glam', 'Special occasion makeup', 'Photoshoot makeup'],
  },
  {
    title: 'Nail Artistry',
    img: '/nail-artistry.jpg',
    alt: 'Artistic nail manicure',
    items: ['Gel nails', 'Acrylic extensions', 'Manicures', 'Pedicures', 'Custom nail designs'],
  },
  {
    title: 'Bridal Beauty',
    img: '/bridal.jpg',
    alt: 'African bride makeup preparation',
    items: ['Bridal makeup', 'Wedding-day nail styling', 'Bridal party packages'],
  },
  {
    title: 'Lashes & Brows',
    img: '/lashes.jpg',
    alt: 'Close-up beauty portrait',
    items: ['Lash enhancements', 'Brow shaping', 'Brow styling'],
  },
];

const Icon = ({ type }: { type: string }) => {
  const common = { width: 44, height: 44, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.2 };
  switch (type) {
    case 'makeup': return <svg {...common}><path d="M12 2v20M5 6l7-4 7 4M7 12h10" /></svg>;
    case 'nails': return <svg {...common}><rect x="7" y="4" width="10" height="16" rx="3" /><path d="M7 9h10" /></svg>;
    case 'bridal': return <svg {...common}><path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.6L12 15.8 7.1 18.3l.9-5.6-4-3.9L9.5 8z" /></svg>;
    default: return <svg {...common}><path d="M4 12c2-4 6-6 8-6s6 2 8 6c-2 4-6 6-8 6s-6-2-8-6z" /><circle cx="12" cy="12" r="2" /></svg>;
  }
};

const Services = () => (
  <section id="services" className="section bw-pattern">
    <div className="container">
      <div className="section-header">
        <span className="section-label">Our Services</span>
        <h2 className="section-title">Your Beauty, Our Artistry.</h2>
        <p className="section-subtitle">A curated menu of beauty services crafted to celebrate your individuality.</p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <article className="service-card" key={s.title}>
            <div className="service-card-img">
              <img src={s.img} alt={s.alt} loading="lazy" />
            </div>
            <Icon type={['makeup','nails','bridal','lashes'][i]} />
            <h3>{s.title}</h3>
            <ul className="service-list">
              {s.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
            <a href="#contact" className="service-cta">Enquire for Pricing →</a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;