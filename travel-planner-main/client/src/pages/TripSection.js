import React, { useState } from "react";
import "../style/tripsection.css";
import { Heart } from "lucide-react"; // for favourite icon

const tripsData = [
  {
    id: 1,
    name: "Bali Getaway",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    location: "Bali, Indonesia",
    description: "Enjoy 5 nights in a private villa surrounded by nature, beaches, and culture.",
    charges: "$899",
  },
  {
    id: 2,
    name: "Swiss Alps Adventure",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    location: "Interlaken, Switzerland",
    description: "Experience the majestic Alps with guided hiking, cable cars, and cozy lodges.",
    charges: "$1299",
  },
  {
    id: 3,
    name: "Santorini Escape",
    image: "https://static.wixstatic.com/media/81b99f_df5e9da19f464d0bb96bc15670b9d4b1~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/81b99f_df5e9da19f464d0bb96bc15670b9d4b1~mv2.jpg",
    location: "Santorini, Greece",
    description: "Relax with blue domes, sunsets, and luxury cliffside stays.",
    charges: "$999",
  },
  {
    id: 4,
    name: "Tokyo Explorer",
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80",
    location: "Tokyo, Japan",
    description: "Dive into Japan’s culture, food, and city lights with a 6-day urban adventure.",
    charges: "$1150",
  },
  {
    id: 5,
    name: "Maldives Paradise",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
    location: "Malé, Maldives",
    description: "Crystal waters, water villas, and sunsets — perfect tropical escape.",
    charges: "$1499",
  },
  {
    id: 6,
    name: "Dubai Desert Safari",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYaWKDA_2g1rho_X_6pjWoPIW7ZGmVGTfHQ&s",
    location: "Dubai, UAE",
    description: "Thrilling sand dunes, camel rides, and Arabian nights under the stars.",
    charges: "$799",
  },
  {
    id: 7,
    name: "New York Highlights",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoyzCoRiO6f2p4yLIxd3z63eRHNeSbhhGggg&s",
    location: "New York, USA",
    description: "Explore Times Square, Central Park, and the Statue of Liberty in a 5-day city tour.",
    charges: "$1099",
  },
  {
    id: 8,
    name: "Paris ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUWisax0zu7kRPSCarWakgaBsf5LPOE8K8rQ&s",
    location: "Paris, France",
    description: "The city of love awaits — Eiffel Tower, Seine cruises, and fine dining.",
    charges: "$1199",
  },
];

const TripsSection = () => {
  const [expanded, setExpanded] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const toggleShowMore = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="trips-section">
      <h2 className="section-title">🌍 Explore Our Trips</h2>
      <div className="trips-grid">
        {tripsData.map((trip) => (
          <div key={trip.id} className="trip-card">
            <img src={trip.image} alt={trip.name} className="trip-image" />
            <div className="trip-info">
              <h3>{trip.name}</h3>
              <p className="location">📍 {trip.location}</p>

              {expanded === trip.id && (
                <div className="trip-details">
                  <p>{trip.description}</p>
                  <p className="charges">💰 {trip.charges}</p>
                </div>
              )}

              <div className="trip-actions">
                <button
                  className="show-more"
                  onClick={() => toggleShowMore(trip.id)}
                >
                  {expanded === trip.id ? "Show Less" : "Show More"}
                </button>
                <Heart
                  size={26}
                  className={`fav-icon ${
                    favorites.includes(trip.id) ? "active" : ""
                  }`}
                  onClick={() => toggleFavorite(trip.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TripsSection;
