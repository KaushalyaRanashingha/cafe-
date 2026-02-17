import React, { useEffect, useState } from "react";
import axios from "axios";
import '../style/Item.css';

const Item = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:5001/items");
        setItems(res.data);
      } catch (err) {
        console.error("Error fetching items:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div className="item-page"><p>Loading items...</p></div>;
  }

  return (
    <div className="item-page">
      <h1>Our Menu</h1>
      <div className="items-grid">
        {items.length > 0 ? (
          items.map(item => (
            <div key={item._id} className="item-card">
              {item.image && (
                <img 
                  src={`http://localhost:5001/uploads/${item.image}`} 
                  alt={item.name} 
                  className="item-image"
                />
              )}
              <div className="item-info">
                <h3>{item.name}</h3>
                <p className="item-price">Price: Rs {item.price}</p>
                <p className="item-desc">{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
};

export default Item;
