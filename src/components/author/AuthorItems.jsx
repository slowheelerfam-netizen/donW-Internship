import React from "react";
import NftCard from "../home/NftCard";
import SkeletonCard from "../UI/SkeletonCard";

const AuthorItems = ({ nftCollection }) => {
  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {!nftCollection
            ? new Array(8).fill(0).map((_, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
                  <SkeletonCard type="nft" />
                </div>
              ))
            : nftCollection.map((item, index) => (
                <div
                  className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <NftCard item={item} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorItems;