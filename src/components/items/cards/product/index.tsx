import React, { useState } from "react";
import DeleteProductDialog from "@/components/items/dialogs/deleteProduct";
import { Delete } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Product } from "@/apis/products/type";

const ProductCard = ({ product }: { product: Product }) => {
  const [openDeleteProductDialog, setOpenDeleteProductDialog] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleOpenDeleteProductDialog = () => {
    setOpenDeleteProductDialog(true);
  };
  const handleCloseDeleteProductDialog = () => {
    setOpenDeleteProductDialog(false);
  };
  return (
    <Card>
      <CardHeader
        title={
          <Typography>
            {product.title.length > 20 ? (
              <>
                {product.title.slice(0, 20)}
                <Box component={"span"}>...</Box>
              </>
            ) : (
              product.title
            )}
          </Typography>
        }
        action={
          <IconButton color="error" onClick={handleOpenDeleteProductDialog}>
            <Delete />
          </IconButton>
        }
      />

      <CardActionArea onClick={() => navigate(`/product/${product._id}`)}>
        <CardMedia component={"img"} src={product.img!} height={200} />
      </CardActionArea>
      <CardContent sx={{ minHeight: 110 }}>
        <Typography>
          {product.desc.length > 50 ? (
            <>
              {product.desc.slice(0, 50)}
              <Box component={"span"}>...</Box>
            </>
          ) : (
            product.desc
          )}
        </Typography>
      </CardContent>
      <DeleteProductDialog
        open={openDeleteProductDialog}
        onClose={handleCloseDeleteProductDialog}
        product={{ id: product._id!, name: product.title }}
      />
    </Card>
  );
};

export default ProductCard;
