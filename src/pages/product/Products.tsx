import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Helmet } from "react-helmet-async";
import { products } from "../../fixtures/productList";
import { ProductCard, ProductProps } from "./ProductCard";
import { CONFIG } from "../../config-global";
import ProductModal from "./ProductModal";
import { ProductType } from "../../models/ProductType";
export const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<string>("ALL");
  const [selectedProduct, setSelectedProduct] = useState<ProductProps>();
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProducts = products.filter((product: ProductProps) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const matchesId = product.id.toLowerCase().includes(lowerCaseQuery);
    const matchesDescription = product.description
      .toLowerCase()
      .includes(lowerCaseQuery);
    const matchesType = filter === "ALL" || product.type === filter;

    return (matchesId || matchesDescription) && matchesType;
  });

  const handleOpenModal = (product: ProductProps) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>{`Products - ${CONFIG.appName}`}</title>
      </Helmet>
      <Container maxWidth="md">
        <Box paddingX="1rem" paddingBottom="3rem">
          <Box display="flex" justifyContent="flex-start" mb={2}>
            <Typography variant="h5" component="h1">
              Products
            </Typography>
          </Box>
          <TextField
            variant="outlined"
            placeholder="Search by ID or description"
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="body2">
              {`${filteredProducts.length} item${
                filteredProducts.length !== 1 ? "s" : ""
              } found`}
            </Typography>
            <Box>
              {Object.values(ProductType).map((type) => (
                <Button
                  key={type}
                  variant={filter === type ? "contained" : "outlined"}
                  onClick={() => setFilter(type)}
                  sx={{ ml: 1 }}
                >
                  {type}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={() => handleOpenModal(product)}
            />
          ))}
        </Box>

        {selectedProduct && (
          <ProductModal
            open={modalOpen}
            onClose={handleCloseModal}
            product={selectedProduct}
          />
        )}
      </Container>
    </>
  );
};
