import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SkeletonCard from "../UI/SkeletonCard";

const HotCollections = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
        );
        setCollections(response.data);
      } catch (error) {
        console.error("Error fetching hot collections:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return (
    <section id="section-collections" className="no-bottom" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <div className="col-lg-12">
            {loading ? (
            <div style={{ display: "flex", gap: "10px" }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ flex: "0 0 25%", padding: "0 10px" }}>
                  <SkeletonCard type="collection" />
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
              {collections.map((collection) => (
                <div className="item" key={collection.id}>
                  <div className="nft_coll" style={{ overflow: "hidden", borderRadius: "10px" }}>
                    <div className="nft_wrap" style={{ overflow: "hidden", marginTop: "-60px", borderRadius: "10px" }}>
                      <Link to={`/item-details/${collection.nftId}`}>
                        <img
                          src={collection.nftImage}
                          className="lazy img-fluid"
                          alt=""
                          style={{ marginTop: "60px" }}
                          draggable="false"
                        />
                      </Link>
                    </div>
                    <div className="nft_coll_pp">
                      <Link to={`/author/${collection.authorId}`}>
                        <img
                          className="lazy pp-coll"
                          src={collection.authorImage}
                          alt=""
                          draggable="false"
                        />
                      </Link>
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="nft_coll_info">
                      <Link to="/explore">
                        <h4>{collection.title}</h4>
                      </Link>
                      <span>ERC-{collection.code}</span>
                    </div>
                  </div>
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

export default HotCollections;