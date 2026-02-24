import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "../UI/Skeleton";
import NftCard from "../home/NftCard";

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
            ))
          : items.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                style={{ display: "block", backgroundSize: "cover" }}
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