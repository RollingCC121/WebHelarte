import { useEffect, useState } from 'react';
import '../styles/bannerCombos.css';

const banners = [
  {
    image: '/images/banner2.jpeg',
    title: 'Vanilla Bean',
    description: 'Classic and creamy',
  },
  {
    image: '/images/banner3.jpeg',
    title: 'Arequipe',
    description: 'Sweet and caramelized',
  },
  {
    image: '/images/banner1.jpeg',
    title: 'Chocolate',
    description: 'Rich and bold',
  },
];

export default function PopularFlavors() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const banner = banners[current];

  return (
    <section className="popular-flavors">
      <div
        className="banner-image"
        onClick={handleClick}
        title="Haz clic para ver el siguiente sabor"
        style={{
          backgroundImage: `url(${banner.image})`,
        }}
      >
        <div className="banner-text">
          <h2 className="banner-title">{banner.title}</h2>
          <p className="banner-description">{banner.description}</p>
        </div>
      </div>
    </section>
  );
}
