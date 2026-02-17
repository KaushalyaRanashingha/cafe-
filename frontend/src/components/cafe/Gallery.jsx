import React from "react";
import '../../style/LandingPage.css';

const galleryImages = [
  "https://i.pinimg.com/originals/32/9e/86/329e8602ca1bb2ce06cac1af1a435820.jpg",
  "https://tse2.mm.bing.net/th/id/OIP.2oaOjleyyTi86QYta6UdZwHaGI?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse1.mm.bing.net/th/id/OIP.SEP9IN9aYGHK4XUpvSViYAHaE8?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse3.mm.bing.net/th/id/OIP.nWLgfQViVCyrJeJ04FuaxAHaFc?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse2.mm.bing.net/th/id/OIP.RW7wTr-m3o7UNerQGr6yigHaEp?cb=defcachec2&rs=1&pid=ImgDetMain&o=7&rm=3",
];

const Gallery = () => {
  return (
    <section className="gallery-section" id="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, idx) => (
          <div className="gallery-item" key={idx}>
            <img src={img} alt={`Gallery ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
