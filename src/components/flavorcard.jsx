import '../styles/FlavorCard.css';

export default function FlavorCard({ name, description }) {
  return (
    <div className="flavor-card">
      <div className="flavor-img"></div>
      <h3 className="flavor-name">{name}</h3>
      <p className="flavor-desc">{description}</p>
      <button className="flavor-button">VIEW MORE</button>
    </div>
  );
}
