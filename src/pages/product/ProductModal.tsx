import React from 'react';
import Modal from '@mui/material/Modal';
import ProductCardModal from './ProductCardModal';
import { ProductProps } from './ProductCard';

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  product: ProductProps;
}

const ProductModal: React.FC<ProductModalProps> = ({
  open,
  onClose,
  product,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ProductCardModal
        product={product}
        onClose={onClose}
        setDisplayedProducts={() => {}}
        productCards={[]}
      />
    </Modal>
  );
};

export default ProductModal;
