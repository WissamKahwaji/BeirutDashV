import { Paper, Stack } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import PasswordField from "@/components/items/inputs/PasswordField/PasswordField";
import LoadingButton from "@/components/items/buttons/loadingButton/LoadingButton";
import Logo from "@/components/ui/svg/logo";
import Name from "@/components/ui/svg/name";
import { SignInValues } from "@/apis/auth/type";
import { useSignInMutation } from "@/apis/auth/queries";

const validation = Yup.object().shape({
  password: Yup.string().required("please enter password"),
});
const SignInPage = () => {
  const { mutate: signIn } = useSignInMutation();
  const handleSignIn = (
    values: SignInValues,
    { setSubmitting }: FormikHelpers<SignInValues>
  ) => {
    signIn(values, {
      onSettled: () => {
        setSubmitting(false);
      },
    });
  };
  return (
    <Stack
      minHeight={"97vh"}
      overflow={"hidden"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Paper
        sx={{
          width: { md: "40vw" },
        }}
      >
        <Formik
          initialValues={{ password: "" }}
          validationSchema={validation}
          onSubmit={handleSignIn}
        >
          {({
            values,
            touched,
            errors,
            isSubmitting,
            handleBlur,
            handleChange,
          }) => (
            <Form>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                p={{ xs: 3, sm: 6, md: 9, lg: 12 }}
                gap={4}
              >
                <Stack direction={"row"}>
                  <Logo sx={{ width: 50, height: 50 }} />
                  <Name sx={{ width: 50, height: 50 }} />
                </Stack>
                <PasswordField
                  name="password"
                  type="password"
                  label={"password"}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
                <LoadingButton isSubmitting={isSubmitting} buttonText="login" />
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </Stack>
  );
};

export default SignInPage;
