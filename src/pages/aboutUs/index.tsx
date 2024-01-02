import { AboutUsInfo } from "@/apis/aboutUs/type";
import {
  useUpdateAboutUsInfoMutation,
  useGetAboutUsInfoQuery,
} from "@/apis/aboutUs/queries";
import {
  Box,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import LoadingButton from "@/components/items/buttons/loadingButton/LoadingButton";
import ImageDragDropField from "@/components/items/inputs/ImageDragDropField";

const AboutUs = () => {
  const { data: contact, isLoading, isError } = useGetAboutUsInfoQuery();
  const { mutate: addAboutUs } = useUpdateAboutUsInfoMutation();
  if (isLoading) return <></>;
  if (isError) return <></>;
  const handleUpdateContact = (
    values: AboutUsInfo,
    { setSubmitting }: FormikHelpers<AboutUsInfo>
  ) => {
    addAboutUs(values, {
      onSettled() {
        setSubmitting(false);
      },
    });
  };
  const initialValues: AboutUsInfo = {
    _id: contact?._id!,
    title: contact?.title!,
    description: contact?.description!,
    content: [
      {
        _id: contact?.content[0]._id!,
        text: contact?.content[0]!.text!,
        img: null,
      },
      {
        _id: contact?.content[1]._id!,
        text: contact?.content[1]!.text!,
        img: null,
      },
    ],
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
        about us
      </Typography>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleUpdateContact}
      >
        {({ values, handleChange, touched, errors, isSubmitting }) => (
          <Form>
            <Grid container gap={2}>
              <Grid item xs={12} md={2}>
                <TextField
                  name="title"
                  fullWidth
                  label={"title"}
                  value={values.title}
                  onChange={handleChange}
                  error={touched.title && !!errors.title}
                  helperText={touched.title && errors.title}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  multiline
                  maxRows={8}
                  fullWidth
                  label={"description"}
                  value={values.description}
                  onChange={handleChange}
                  error={touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  name="content.0.text"
                  multiline
                  maxRows={4}
                  fullWidth
                  label={"first text"}
                  value={values.content?.[0].text}
                  onChange={handleChange}
                  error={touched.content?.[0].text && !!errors.content?.[0]}
                  helperText={
                    touched.content?.[0].text && (errors.content?.[0] as string)
                  }
                />
              </Grid>

              <Grid item xs={12} md={5}>
                <TextField
                  name="content.1.text"
                  multiline
                  maxRows={4}
                  fullWidth
                  label={"second text"}
                  value={values.content?.[1].text}
                  onChange={handleChange}
                  error={touched.content?.[1].text && !!errors.content?.[1]}
                  helperText={
                    touched.content?.[1].text && (errors.content?.[1] as string)
                  }
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <ImageDragDropField
                  name="content.0.img"
                  label="first img"
                  oldImg={contact?.content[0].img! as string}
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <ImageDragDropField
                  name="content.1.img"
                  label="second img"
                  oldImg={contact?.content[1].img! as string}
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

export default AboutUs;
