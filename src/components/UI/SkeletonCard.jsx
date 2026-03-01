import React from "react";
import Skeleton from "./Skeleton";

/**
 * Unified skeleton card — one component, every loading state.
 *
 * Types:
 *  "nft"        — NftCard shape  (NewItems, ExploreItems, AuthorItems)
 *  "collection" — HotCollections carousel card
 *  "seller"     — TopSellers list row
 *  "item-details" — ItemDetails full page
 */
const SkeletonCard = ({ type = "nft" }) => {
  if (type === "collection") {
    return (
      <div
        className="nft_coll"
        style={{ overflow: "hidden", borderRadius: "10px" }}
      >
        <Skeleton width="100%" height="200px" borderRadius="10px 10px 0 0" />
        <div
          style={{
            position: "relative",
            marginTop: "-20px",
            paddingLeft: "15px",
          }}
        >
          <Skeleton width="50px" height="50px" borderRadius="50%" />
        </div>
        <div style={{ padding: "10px 15px 15px" }}>
          <Skeleton width="80%" height="18px" borderRadius="4px" />
          <div style={{ marginTop: "8px" }}>
            <Skeleton width="50%" height="14px" borderRadius="4px" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "seller") {
    return (
      <li>
        <div className="author_list_pp">
          <Skeleton width="50px" height="50px" borderRadius="50%" />
        </div>
        <div className="author_list_info">
          <Skeleton width="120px" height="16px" borderRadius="4px" />
          <div style={{ marginTop: "6px" }}>
            <Skeleton width="80px" height="14px" borderRadius="4px" />
          </div>
        </div>
      </li>
    );
  }

  if (type === "item-details") {
    return (
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>
          <section aria-label="section" className="mt90 sm-mt-0">
            <div className="container">
              <div className="row">
                {/* Left: image */}
                <div className="col-md-6 text-center">
                  <Skeleton
                    width="100%"
                    height="400px"
                    borderRadius="12px"
                  />
                </div>

                {/* Right: info */}
                <div className="col-md-6">
                  <div className="item_info">
                    {/* Title */}
                    <Skeleton
                      width="70%"
                      height="32px"
                      borderRadius="6px"
                    />
                    <div style={{ marginTop: "12px", display: "flex", gap: "16px" }}>
                      <Skeleton width="80px" height="20px" borderRadius="4px" />
                      <Skeleton width="80px" height="20px" borderRadius="4px" />
                    </div>

                    {/* Description */}
                    <div style={{ marginTop: "20px" }}>
                      <Skeleton width="100%" height="14px" borderRadius="4px" />
                      <div style={{ marginTop: "6px" }}>
                        <Skeleton width="90%" height="14px" borderRadius="4px" />
                      </div>
                      <div style={{ marginTop: "6px" }}>
                        <Skeleton width="75%" height="14px" borderRadius="4px" />
                      </div>
                    </div>

                    {/* Owner */}
                    <div style={{ marginTop: "24px" }}>
                      <Skeleton width="60px" height="16px" borderRadius="4px" />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          marginTop: "10px",
                        }}
                      >
                        <Skeleton width="50px" height="50px" borderRadius="50%" />
                        <Skeleton width="120px" height="16px" borderRadius="4px" />
                      </div>
                    </div>

                    {/* Creator */}
                    <div style={{ marginTop: "20px" }}>
                      <Skeleton width="60px" height="16px" borderRadius="4px" />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          marginTop: "10px",
                        }}
                      >
                        <Skeleton width="50px" height="50px" borderRadius="50%" />
                        <Skeleton width="120px" height="16px" borderRadius="4px" />
                      </div>
                    </div>

                    {/* Price */}
                    <div style={{ marginTop: "28px" }}>
                      <Skeleton width="50px" height="16px" borderRadius="4px" />
                      <div style={{ marginTop: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                        <Skeleton width="24px" height="24px" borderRadius="50%" />
                        <Skeleton width="80px" height="24px" borderRadius="4px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  // Default: "nft"
  return (
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
        <div style={{ marginTop: "8px" }}>
          <Skeleton width="40%" height="14px" borderRadius="4px" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;