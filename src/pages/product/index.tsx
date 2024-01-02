import React from "react";
import { useParams } from "react-router-dom";
import { Params } from "./type";
import {
  useAddProductMutation,
  useEditProductMutation,
  useGetProductDetailsQuery,
  useGetProductTypesQuery,
} from "@/apis/products/queries";
import LoadingPage from "../loadingPage";
import {
  Autocomplete,
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import { Product as TProduct } from "@/apis/products/type";
import ImageDragDropField from "@/components/items/inputs/ImageDragDropField";
import LoadingButton from "@/components/items/buttons/loadingButton/LoadingButton";

const Product = () => {
  const { id } = useParams<Params>();
  const {
    data: product,
    isLoading,
    isFetching,
    isError,
  } = useGetProductDetailsQuery(id);
  const { data: productTypes, isLoading: isProductTypesLoading } =
    useGetProductTypesQuery();
  const { mutate: addProduct } = useAddProductMutation();
  const { mutate: editProduct } = useEditProductMutation();
  if (isLoading && isFetching) return <LoadingPage />;
  if (isError) return <></>;
  const initialValues: TProduct = {
    ...(id && { _id: id }),
    title: product?.title ?? "",
    desc: product?.desc ?? "",
    img: null,
    type: product?.type ?? null,
    deepDetails: product?.deepDetails ?? [
      { weight: "", price: "" },
      { weight: "", price: "" },
      { weight: "", price: "" },
    ],
  };
  const handleSubmit = (
    values: TProduct,
    { setSubmitting }: FormikHelpers<TProduct>
  ) => {
    id
      ? editProduct(values, {
          onSettled() {
            setSubmitting(false);
          },
        })
      : addProduct(values, {
          onSettled() {
            setSubmitting(false);
          },
        });
  };
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
        product{" "}
      </Typography>

      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          setFieldValue,
        }) => (
          <Form>
            <Grid container justifyContent={"center"} gap={3}>
              <Grid xs={12} md={10.2}>
                <ImageDragDropField
                  name="img"
                  label="product img"
                  oldImg={product?.img! as string}
                />
              </Grid>
              <Grid xs={12} md={5}>
                {" "}
                <TextField
                  name="title"
                  fullWidth
                  label={"product title"}
                  value={values.title}
                  onChange={handleChange}
                  error={touched.title && !!errors.title}
                  helperText={touched.title && errors.title}
                />
              </Grid>
              <Grid xs={12} md={5}>
                {" "}
                <Autocomplete
                  value={product?.type}
                  options={productTypes ?? []}
                  loading={isProductTypesLoading}
                  getOptionLabel={(option) => option?.name!}
                  onChange={(e, newValue) => {
                    setFieldValue("type", newValue);
                  }}
                  renderInput={(props) => (
                    <TextField {...props} label="product types" />
                  )}
                />
              </Grid>
              <Grid xs={12} md={5}>
                {" "}
                <TextField
                  name="deepDetails.0.price"
                  fullWidth
                  label={"first price"}
                  value={values.deepDetails?.[0].price}
                  onChange={handleChange}
                  error={
                    touched.deepDetails?.[0].price && !!errors.deepDetails?.[0]
                  }
                  helperText={
                    touched.deepDetails?.[0].price &&
                    (errors.deepDetails?.[0] as string)
                  }
                />
              </Grid>
              <Grid xs={12} md={5}>
                {" "}
                <TextField
                  name="deepDetails.0.weight"
                  fullWidth
                  label={"first weight"}
                  value={values.deepDetails?.[0].weight}
                  onChange={handleChange}
                  error={
                    touched.deepDetails?.[0].weight && !!errors.deepDetails?.[0]
                  }
                  helperText={
                    touched.deepDetails?.[0].weight &&
                    (errors.deepDetails?.[0] as string)
                  }
                />
              </Grid>
              <Grid xs={12} md={5}>
                {" "}
                <TextField
                  name="deepDetails.1.price"
                  fullWidth
                  label={"second price"}
                  value={values.deepDetails?.[1].price}
                  onChange={handleChange}
                  error={
                    touched.deepDetails?.[1].price && !!errors.deepDetails?.[1]
                  }
                  helperText={
                    touched.deepDetails?.[1].price &&
                    (errors.deepDetails?.[1] as string)
                  }
                />
              </Grid>
              <Grid xs={12} md={5}>
                {" "}
                <TextField
                  name="deepDetails.1.weight"
                  fullWidth
                  label={"second weight"}
                  value={values.deepDetails?.[1].weight}
                  onChange={handleChange}
                  error={
                    touched.deepDetails?.[1].weight && !!errors.deepDetails?.[1]
                  }
                  helperText={
                    touched.deepDetails?.[1].weight &&
                    (errors.deepDetails?.[1] as string)
                  }
                />
              </Grid>{" "}
              <Grid xs={12} md={5}>
                {" "}
                <TextField
                  name="deepDetails.2.price"
                  fullWidth
                  label={"third price"}
                  value={values.deepDetails?.[2].price}
                  onChange={handleChange}
                  error={
                    touched.deepDetails?.[2].price && !!errors.deepDetails?.[2]
                  }
                  helperText={
                    touched.deepDetails?.[2].price &&
                    (errors.deepDetails?.[2] as string)
                  }
                />
              </Grid>
              <Grid xs={12} md={5}>
                {" "}
                <TextField
                  name="deepDetails.2.weight"
                  fullWidth
                  label={"third weight"}
                  value={values.deepDetails?.[2].weight}
                  onChange={handleChange}
                  error={
                    touched.deepDetails?.[2].weight && !!errors.deepDetails?.[2]
                  }
                  helperText={
                    touched.deepDetails?.[2].weight &&
                    (errors.deepDetails?.[2] as string)
                  }
                />
              </Grid>
              <Grid item xs={12} md={10.2}>
                <TextField
                  name="desc"
                  multiline
                  maxRows={4}
                  fullWidth
                  label={"desc"}
                  value={values.desc}
                  onChange={handleChange}
                  error={touched.desc && !!errors.desc}
                  helperText={touched.desc && errors.desc}
                />
              </Grid>
              <Grid item xs={12}>
                <Stack justifyContent={"center"}>
                  <LoadingButton
                    isSubmitting={isSubmitting}
                    buttonText={"submit"}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Product;
