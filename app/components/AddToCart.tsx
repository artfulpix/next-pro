"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="tw-btn tw-btn-primary"
        onClick={() => console.log("clicked")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
