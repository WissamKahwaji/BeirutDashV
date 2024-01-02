import { useGetProductTypesQuery } from "@/apis/products/queries";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Add } from "@mui/icons-material";
import ProductTypeCard from "@/components/items/cards/productType";

const ProductTypes = () => {
  const navigate = useNavigate();
  const { data: productTypes, isLoading: isProductTypesLoading } =
    useGetProductTypesQuery();

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
        product types
      </Typography>
      <Grid container gap={4}>
        <Grid item xs={12}>
          <Stack justifyContent={"end"} direction={"row"}>
            <Button
              onClick={() => navigate("/product-type")}
              variant="contained"
              startIcon={<Add />}
            >
              add product type
            </Button>
          </Stack>
        </Grid>
        <Grid item container xs={12}>
          {productTypes?.map((productType) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box p={1}>
                <ProductTypeCard productType={productType} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductTypes;
