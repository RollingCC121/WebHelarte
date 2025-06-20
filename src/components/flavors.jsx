import '../styles/flavors.css';

export default function Flavors() {
  const categories = ["All", "Vegan", "Classics", "Seasonal"];

  return (
    <section className="flavors">
      <h2 className="section-title">Flavors</h2>
      <div className="categories">
        {categories.map((cat) => (
          <button key={cat} className="category-button">{cat}</button>
        ))}
      </div>

      <div className="flavors-grid">
        {[1, 2, 3, 4].map((i) => (
          <div className="flavor-box" key={i}>
            <div className="flavor-img"></div>
            <div className="flavor-info">
              <p className="flavor-name">Flavor Name</p>
              <p className="flavor-price">$</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
