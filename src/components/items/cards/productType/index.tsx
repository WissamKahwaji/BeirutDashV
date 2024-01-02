import React, { useState } from "react";
import DeleteProductTypeDialog from "@/components/items/dialogs/deleteProductType";
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
import { ProductType } from "@/apis/products/type";

const ProductTypeCard = ({ productType }: { productType: ProductType }) => {
  const [openDeleteProductTypeDialog, setOpenDeleteProductTypeDialog] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleOpenDeleteProductTypeDialog = () => {
    setOpenDeleteProductTypeDialog(true);
  };
  const handleCloseDeleteProductTypeDialog = () => {
    setOpenDeleteProductTypeDialog(false);
  };
  return (
    <Card>
      <CardHeader
        action={
          <IconButton color="error" onClick={handleOpenDeleteProductTypeDialog}>
            <Delete />
          </IconButton>
        }
      />

      <CardActionArea
        onClick={() => navigate(`/product-type/${productType?._id}`)}
      >
        <CardMedia component={"img"} src={productType?.img!} height={200} />
      </CardActionArea>
      <CardContent sx={{ minHeight: 110 }}>
        <Typography>
          {productType?.name.length! > 20 ? (
            <>
              {productType?.name.slice(0, 20)}
              <Box component={"span"}>...</Box>
            </>
          ) : (
            productType?.name
          )}
        </Typography>
      </CardContent>
      <DeleteProductTypeDialog
        open={openDeleteProductTypeDialog}
        onClose={handleCloseDeleteProductTypeDialog}
        productType={{ id: productType?._id!, name: productType?.name! }}
      />
    </Card>
  );
};

export default ProductTypeCard;
