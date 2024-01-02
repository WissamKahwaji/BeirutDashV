import React from "react";
import { useParams } from "react-router-dom";
import { Params } from "./type";
import {
  useAddProductTypeMutation,
  useEditProductTypeMutation,
  useGetProductTypeDetailsQuery,
} from "@/apis/products/queries";
import LoadingPage from "../loadingPage";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import { ProductType as TProductType } from "@/apis/products/type";
import ImageDragDropField from "@/components/items/inputs/ImageDragDropField";
import LoadingButton from "@/components/items/buttons/loadingButton/LoadingButton";

const ProductType = () => {
  const { id } = useParams<Params>();
  const {
    data: productType,
    isLoading,
    isFetching,
    isError,
  } = useGetProductTypeDetailsQuery(id);

  const { mutate: addProductType } = useAddProductTypeMutation();
  const { mutate: editProductType } = useEditProductTypeMutation();
  if (isLoading && isFetching) return <LoadingPage />;
  if (isError) return <></>;
  const initialValues: TProductType = {
    ...(id && { _id: id }),
    name: productType?.name ?? "",
    img: null,
  };
  const handleSubmit = (
    values: TProductType,
    { setSubmitting }: FormikHelpers<TProductType>
  ) => {
    id
      ? editProductType(values, {
          onSettled() {
            setSubmitting(false);
          },
        })
      : addProductType(values, {
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
        product type{" "}
      </Typography>

      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({ values, touched, errors, isSubmitting, handleChange }) => (
          <Form>
            <Grid container justifyContent={"center"} gap={3}>
              <Grid xs={12} md={10.2}>
                <ImageDragDropField
                  name="img"
                  label="productType img"
                  oldImg={productType?.img! as string}
                />
              </Grid>
              <Grid xs={12} md={5}>
                {" "}
                <TextField
                  name="name"
                  fullWidth
                  label={"productType name"}
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
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

export default ProductType;
