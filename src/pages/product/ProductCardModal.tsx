import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { ProductProps } from "./ProductCard";

interface ProductCardModalProps {
  product: ProductProps;
  onClose: () => void;
  setDisplayedProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
  productCards: ProductProps[];
}

const boxModalStyle = {
  position: "relative",
  border: "1px solid #ccc",
  borderRadius: 2,
  padding: 3,
  boxShadow: 3,
  bgcolor: "background.paper",
  width: "100%",
  maxWidth: "400px",
  height: "250px",
};

const ProductCardModal: React.FC<ProductCardModalProps> = ({
  product,
  onClose,
  setDisplayedProducts,
  productCards,
}) => {
  return (
    <Box sx={boxModalStyle}>
      <Typography variant="h6" component="h2">
        {product.id}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Description:</strong> {product.description}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Type:</strong> {product.type}
      </Typography>

      <Button
        sx={{ position: "absolute", left: "0", bottom: "0", margin: "16px" }}
        onClick={() =>
          productCards.length !== 1
            ? setDisplayedProducts((prev) =>
                prev.filter((ref) => ref.id !== product.id)
              )
            : onClose()
        }
      >
        Close
      </Button>
    </Box>
  );
};

export default ProductCardModal;
