import React, { Fragment } from "react";
import {
  useGetProductTypesQuery,
  useGetProductsByTypeQuery,
} from "@/apis/products/queries";

import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "@/components/items/cards/product";
import { Add } from "@mui/icons-material";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const productType = searchParams.get("type");
  const productTypeId = searchParams.get("type_id");
  const navigate = useNavigate();
  const { data: productTypes, isLoading: isProductTypesLoading } =
    useGetProductTypesQuery();
  const { data: products } = useGetProductsByTypeQuery({ type: productTypeId });

  return (
    <Box>
      <Typography
        component={"h1"}
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          textTransform: "capitalize",
          mb: 6,
        }}
      >
        products
      </Typography>
      <Grid container gap={4}>
        <Grid item xs={12}>
          <Stack
            justifyContent={"space-between"}
            direction={"row"}
            gap={2}
            flexWrap={"wrap"}
          >
            <Autocomplete
              value={
                productType && productTypeId
                  ? { _id: productTypeId, name: productType }
                  : { _id: "-1", name: "all product" }
              }
              getOptionLabel={(option) => option?.name!}
              options={productTypes ?? []}
              loading={isProductTypesLoading}
              onChange={(e, newValue) => {
                setSearchParams({
                  type: newValue?.name ?? "",
                  type_id: newValue?._id ?? "",
                });
              }}
              renderInput={(props) => (
                <TextField
                  {...props}
                  fullWidth={false}
                  sx={{ minWidth: 200 }}
                />
              )}
            />
            <Button
              onClick={() => navigate("/product")}
              variant="contained"
              startIcon={<Add />}
            >
              add product
            </Button>
          </Stack>
        </Grid>
        {products?.map((productType) =>
          productType.products.length ? (
            <Fragment key={productType._id}>
              <Grid item xs={12}>
                <Typography
                  sx={{ fontWeight: "500", fontSize: "2rem" }}
                  component={"h2"}
                >
                  {productType.name}
                </Typography>
              </Grid>
              <Grid item container xs={12}>
                {productType.products.map((product) => (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box p={1}>
                      <ProductCard product={product} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Fragment>
          ) : null
        )}
      </Grid>
    </Box>
  );
};

export default Products;
