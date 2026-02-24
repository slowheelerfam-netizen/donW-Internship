import React, { useState, useEffect } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Skeleton from "../UI/Skeleton";
import NftCard from "./NftCard";

const NewItems = () => {
  const [newItems, setNewItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewItems = async () => {
      try {
        const response = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems"
        );
        setNewItems(response.data);
      } catch (error) {
        console.error("Error fetching new items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewItems();
  }, []);

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <div className="col-lg-12">
            {loading ? (
              <div style={{ display: "flex", gap: "10px" }}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} style={{ flex: "0 0 25%", padding: "0 10px" }}>
                    <div className="nft__item">
                      <div className="author_list_pp">
                        <Skeleton width="50px" height="50px" borderRadius="50%" />
                      </div>
                      <div className="nft__item_wrap" style={{ marginTop: "10px" }}>
                        <Skeleton width="100%" height="200px" borderRadius="10px" />
                      </div>
                      <div className="nft__item_info" style={{ marginTop: "10px" }}>
                        <Skeleton width="80%" height="18px" borderRadius="4px" />
                        <div style={{ marginTop: "8px" }}>
                          <Skeleton width="50%" height="14px" borderRadius="4px" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
                dots={false}
                items={4}
                dragEndSpeed={300}
                smartSpeed={400}
                responsive={{
                  0: { items: 1 },
                  600: { items: 2 },
                  900: { items: 3 },
                  1200: { items: 4 },
                }}
              >
                {newItems.map((item) => (
                  <div className="item" key={item.id}>
                    <NftCard item={item} />
                  </div>
                ))}
              </OwlCarousel>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;