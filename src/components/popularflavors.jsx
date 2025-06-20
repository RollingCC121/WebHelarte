import FlavorCard from './flavorcard';
import '../styles/popularflavors.css';

export default function PopularFlavors() {
  const flavors = [
    { name: "Vanilla Bean", description: "Classic and creamy" },
    { name: "Strawberry", description: "Sweet and fruity" },
    { name: "Chocolate", description: "Rich and bold" }
  ];

  return (
    <section className="popular-flavors">
      <h2 className="section-title">Popular Flavors</h2>
      <div className="flavor-list">
        {flavors.map((flavor, i) => (
          <FlavorCard key={i} {...flavor} />
        ))}
      </div>
    </section>
  );
}
