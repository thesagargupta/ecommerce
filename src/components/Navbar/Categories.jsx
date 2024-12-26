// Categories.jsx
import "./Categories.css";

const Categories = () => {
  const categories = [
    { name: "Phones", icon: "📱" },
    { name: "Computers", icon: "💻" },
    { name: "SmartWatch", icon: "⌚" },
    { name: "Camera", icon: "📷" },
    { name: "HeadPhones", icon: "🎧" },
    { name: "Gaming", icon: "🎮" },
  ];

  return (
    <div className="categories-section">
      <h3 className="section-title">Categories</h3>
      <h2 className="section-subtitle">Browse By Category</h2>
      <div className="categories-list">
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
            <span className="category-icon">{category.icon}</span>
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
