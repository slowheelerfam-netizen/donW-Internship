import React from "react";
import Skeleton from "./Skeleton";

const SkeletonCard = ({ type = "nft" }) => {
  if (type === "collection") {
    return (
      <div className="nft_coll" style={{ overflow: "hidden", borderRadius: "10px" }}>
        <Skeleton width="100%" height="200px" borderRadius="10px 10px 0 0" />
        <div style={{ position: "relative", marginTop: "-20px", paddingLeft: "15px" }}>
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

  return (
    <div className="nft__item">
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", gap: "10px" }}>
        <Skeleton width="40px" height="40px" borderRadius="50%" />
        <Skeleton width="60%" height="14px" borderRadius="4px" />
      </div>
      <Skeleton width="100%" height="200px" borderRadius="10px" />
      <div style={{ padding: "10px 0" }}>
        <Skeleton width="70%" height="18px" borderRadius="4px" />
        <div style={{ marginTop: "8px" }}>
          <Skeleton width="40%" height="14px" borderRadius="4px" />
        </div>
        <div style={{ marginTop: "8px" }}>
          <Skeleton width="50%" height="14px" borderRadius="4px" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;