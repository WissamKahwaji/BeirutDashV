import { ContactUsInfo } from "@/apis/constactUs/type";
import {
  useEditContactUsInfoMutation,
  useGetContactUsInfo,
} from "@/apis/constactUs/queries";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import LoadingButton from "@/components/items/buttons/loadingButton/LoadingButton";

const Contact = () => {
  const { data: contactInfo, isLoading, isError } = useGetContactUsInfo();
  const { mutate: addContactUsInfo } = useEditContactUsInfoMutation();
  if (isLoading) return <></>;
  if (isError) return <></>;
  const handleUpdateContactInfo = (
    values: ContactUsInfo,
    { setSubmitting }: FormikHelpers<ContactUsInfo>
  ) => {
    addContactUsInfo(values, {
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
        contact us
      </Typography>
      <Formik
        initialValues={{
          _id: contactInfo?._id!,
          title: contactInfo?.title!,
          content: contactInfo?.content!,
        }}
        onSubmit={handleUpdateContactInfo}
      >
        {({ values, handleChange, touched, errors, isSubmitting }) => (
          <Form>
            <Grid container justifyContent={"center"} gap={6}>
              <Grid item xs={12} md={5}>
                <Stack gap={3}>
                  <TextField
                    name="title"
                    fullWidth
                    label={"title"}
                    value={values.title}
                    onChange={handleChange}
                    error={touched.title && !!errors.title}
                    helperText={touched.title && errors.title}
                  />
                  <TextField
                    name="content.phoneNumber"
                    fullWidth
                    label={"phone number"}
                    value={values.content.phoneNumber}
                    onChange={handleChange}
                    error={
                      touched.content?.phoneNumber &&
                      !!errors.content?.phoneNumber
                    }
                    helperText={
                      touched.content?.phoneNumber &&
                      errors.content?.phoneNumber
                    }
                  />{" "}
                  <TextField
                    name="content.mobileOne"
                    fullWidth
                    label={"another phone number"}
                    value={values.content.mobileOne}
                    onChange={handleChange}
                    error={
                      touched.content?.mobileOne && !!errors.content?.mobileOne
                    }
                    helperText={
                      touched.content?.mobileOne && errors.content?.mobileOne
                    }
                  />{" "}
                  <TextField
                    name="content.location"
                    fullWidth
                    label={"location"}
                    value={values.content.location}
                    onChange={handleChange}
                    error={
                      touched.content?.location && !!errors.content?.location
                    }
                    helperText={
                      touched.content?.location && errors.content?.location
                    }
                  />{" "}
                  <TextField
                    name="content.email"
                    fullWidth
                    label={"email"}
                    value={values.content?.email}
                    onChange={handleChange}
                    error={touched.content?.email && !!errors.content?.email}
                    helperText={touched.content?.email && errors.content?.email}
                  />
                  <TextField
                    name="content.whatsApp"
                    fullWidth
                    label={"whatsApp"}
                    value={values.content?.whatsApp}
                    onChange={handleChange}
                    error={
                      touched.content?.whatsApp && !!errors.content?.whatsApp
                    }
                    helperText={
                      touched.content?.whatsApp && errors.content?.whatsApp
                    }
                  />
                </Stack>
              </Grid>
              <Grid item xs={12} md={5}>
                <Stack gap={3}>
                  <TextField
                    name="content.faceBook"
                    fullWidth
                    label={"faceBook"}
                    value={values.content?.faceBook}
                    onChange={handleChange}
                    error={
                      touched.content?.faceBook && !!errors.content?.faceBook
                    }
                    helperText={
                      touched.content?.faceBook && errors.content?.faceBook
                    }
                  />{" "}
                  <TextField
                    name="content.instagram"
                    fullWidth
                    label={"instagram"}
                    value={values.content?.instagram}
                    onChange={handleChange}
                    error={
                      touched.content?.instagram && !!errors.content?.instagram
                    }
                    helperText={
                      touched.content?.instagram && errors.content?.instagram
                    }
                  />{" "}
                  <TextField
                    name="content.threads"
                    fullWidth
                    label={"threads"}
                    value={values.content?.threads}
                    onChange={handleChange}
                    error={
                      touched.content?.threads && !!errors.content?.threads
                    }
                    helperText={
                      touched.content?.threads && errors.content?.threads
                    }
                  />{" "}
                  <TextField
                    name="content.snapChat"
                    fullWidth
                    label={"snapChat"}
                    value={values.content?.snapChat}
                    onChange={handleChange}
                    error={
                      touched.content?.snapChat && !!errors.content?.snapChat
                    }
                    helperText={
                      touched.content?.snapChat && errors.content?.snapChat
                    }
                  />
                  <TextField
                    name="content.longitude"
                    fullWidth
                    label={"longitude"}
                    value={values.content?.longitude}
                    onChange={handleChange}
                    error={
                      touched.content?.longitude && !!errors.content?.longitude
                    }
                    helperText={
                      touched.content?.longitude && errors.content?.longitude
                    }
                  />
                  <TextField
                    name="content.latitude"
                    fullWidth
                    label={"latitude"}
                    value={values.content?.latitude}
                    onChange={handleChange}
                    error={
                      touched.content?.latitude && !!errors.content?.latitude
                    }
                    helperText={
                      touched.content?.latitude && errors.content?.latitude
                    }
                  />
                </Stack>
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

export default Contact;
