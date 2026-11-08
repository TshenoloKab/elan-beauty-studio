import './Work.css';

const pexels = (id: number, w = 700) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const items = [
  { id: 31788961, label: 'Soft Glam' },
  { id: 38256840, label: 'Bold Glam' },
  { id: 34049570, label: 'Bridal Beauty', img: '/bridal.jpg' },
  { id: 38006264, label: 'Bridal Prep', img: '/bridal.jpg' },
  { id: 34885849, label: 'Nail Artistry', img: '/nail-artistry.jpg' },
  { id: 7664093, label: 'Nude Nails', img: '/lashes.jpg' },
  { id: 18730147, label: 'Custom Nails', img: '/about-image.jpg' },
  { id: 38256838, label: 'Editorial', img: '/makeup.jpg' },
];

const Work = () => (
  <section id="work" className="section">
    <div className="container">
      <div className="section-header">
        <span className="section-label">Our Work</span>
        <h2 className="section-title">A Glimpse of Our Artistry.</h2>
        <p className="section-subtitle">Real beauty, real women. A curated showcase of our craft.</p>
      </div>
      <div className="work-grid">
        {items.map((it, i) => (
          <figure className={`work-item ${i === 0 ? 'tall' : ''}`} key={it.id}>
            <img src={it.img ?? pexels(it.id)} alt={it.label} loading="lazy" />
            <figcaption className="work-label">{it.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Work;