import React from "react";
import '../../style/LandingPage.css';

const specials = [
  { name: "Pumpkin Spice Latte", img: "https://tse1.explicit.bing.net/th/id/OIP.Qt5Sg66yjr9GVwcos8ssagHaJ4?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Caramel Frappe", img: "https://tse3.mm.bing.net/th/id/OIP.g-jH94U0k6ael4PC7l9e2gHaHa?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Vanilla Macchiato", img: "https://tse1.explicit.bing.net/th/id/OIP.TI_Ih6Bu4rnhUIQut8j2cgHaI0?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3" },
];

const SpecialsSection = () => {
  return (
    <section className="specials-section" id="specials">
      <h2>Specials</h2>
      <div className="specials-grid">
        {specials.map((item, idx) => (
          <div className="special-card" key={idx}>
            <div className="special-img">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="special-info">
              <h3>{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialsSection;
