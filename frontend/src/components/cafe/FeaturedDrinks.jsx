import React from "react";
import '../../style/LandingPage.css';

const drinks = [
  { name: "Cappuccino", img: "https://tse1.mm.bing.net/th/id/OIP.ntpW06Tbe4MxkXYDfUocyQHaHa?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Latte", img: "https://img.freepik.com/premium-photo/photo-steaming-latte-with-creamy-froth_1207718-104358.jpg" },
  { name: "Espresso", img: "https://tse3.mm.bing.net/th/id/OIP.qNeiGkPFREfKpMYI2EzPtgHaE8?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Mocha", img: "https://img.freepik.com/premium-photo/decadent-mocha-with-espresso-steamed-almond-milk-coconut-cream-topped-with-whipped-cream_344451-4077.jpg" },
];

const FeaturedDrinks = () => {
  return (
    <section className="featured-drinks" id="featured">
      <h2>Featured Drinks</h2>
      <div className="drinks-grid">
        {drinks.map((drink, idx) => (
          <div className="drink-card" key={idx}>
            <div className="drink-img">
              <img src={drink.img} alt={drink.name} />
            </div>
            <div className="drink-info">
              <h3>{drink.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDrinks;
