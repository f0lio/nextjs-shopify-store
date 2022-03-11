import React from "react";
import { Button } from "@components/common";

const AddToCartButton = (props) => {
  return (
    <Button
      size="normal"
      className="rounded-md px-10 py-4"
      type="submit"
      // disabled={!product.selectedSize || !product.selectedColor}
    >
      {props.name || "Add to cart"}
    </Button>
  );
};

export default AddToCartButton;
