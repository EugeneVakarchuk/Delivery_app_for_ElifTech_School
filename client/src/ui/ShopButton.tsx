import React from "react";

type props = {
  shopTitle: string;
};

const ShopButton: React.FC<props> = (props) => {
  return (
    <div>
      <h3>{props.shopTitle}</h3>
    </div>
  );
};

export default ShopButton;
