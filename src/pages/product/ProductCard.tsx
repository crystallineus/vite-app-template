import { Card, Box, Typography, Link, Button } from "@mui/material";
import type { CardProps } from "@mui/material/Card";

export type ProductProps = {
  id: string;
  type: string;
  description: string;
};

export function ProductCard({
  sx,
  product,
  onViewDetails,
  ...other
}: CardProps & {
  product: ProductProps;
  onViewDetails: () => void;
}) {
  const { id, description, type } = product;

  return (
    <Card sx={sx} {...other}>
      <Box sx={{ p: 3 }}>
        <Typography variant="caption" color="text.secondary">
          {id}
        </Typography>

        <Typography
          variant="h6"
          component={Link}
          color="inherit"
          underline="hover"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
            mt: 1,
          }}
        >
          {description}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Type: {type}
        </Typography>

        <Button
          variant="text"
          sx={{ mt: 2, display: "block" }}
          onClick={(e) => {
            e.preventDefault();
            onViewDetails();
          }}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
}
