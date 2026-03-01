import React, { useState, useEffect } from "react";
import axios from "axios";
import SkeletonCard from "../UI/SkeletonCard";
import NftCard from "../home/NftCard";
import AOS from "aos";

const ExploreItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const url = filter
          ? `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`
          : `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore`;
        const response = await axios.get(url);
        setItems(response.data);
        setVisibleCount(8);
      } catch (error) {
        console.error("Error fetching explore items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [filter]);

  useEffect(() => {
    if (items.length > 0) {
      setTimeout(() => {
        AOS.refreshHard();
      }, 100);
    }
  }, [items]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <>
      <div className="col-lg-12 mb-4">
        <select id="filter-items" defaultValue="" onChange={handleFilter}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>

      <div className="row">
        {loading
          ? new Array(8).fill(0).map((_, index) => (
              <div
                key={index}
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
              >
                <SkeletonCard type="nft" />
              </div>
            ))
          : items.slice(0, visibleCount).map((item, index) => (
              <div
                key={item.id}
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 nft-fade-up"
                style={{
                  display: "block",
                  backgroundSize: "cover",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <NftCard item={item} />
              </div>
            ))}
      </div>

      {!loading && visibleCount < items.length && (
        <div className="col-md-12 text-center">
          <button onClick={loadMore} className="btn-main lead">
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default ExploreItems;