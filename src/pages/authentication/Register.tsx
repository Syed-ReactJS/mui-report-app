import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";
import { TextFieldWrapper } from "components/authentication/StyledComponents";
import FlexBox from "components/FlexBox";
import LightTextField from "components/LightTextField";
import { H1, Small } from "components/Typography";
import { useFormik } from "formik";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { authInstance } from "utils/axios";
import * as Yup from "yup";

const Register: FC = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: true,
    submit: null,
  };
  // form field value validation schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
    email: Yup.string().email().max(255).required(),
    password: Yup.string().min(6).required(),
    confirmPassword: Yup.string().min(6).required(),
  });

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values: any) => {
        setLoading(true);
        try {
          const payload: any = {
            firstName: values.firstName,
            lastName: values.lastName,
            username: values.username,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
          };
          const res: any = await authInstance.post("/signup", payload);
          console.log("res", res);
          setLoading(false);
          if (res?.data?.success) {
            toast.success(res?.data?.msg);
          }
        } catch (error: any) {
          console.log("error", error);
          setError(error?.message);
          setLoading(false);
        }
      },
    });

  return (
    <FlexBox
      sx={{
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: { sm: "100%" },
      }}
    >
      <Card sx={{ padding: 4, maxWidth: 600, boxShadow: 1, maxHeight: "98vh" }}>
        <FlexBox
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          mb={5}
        >
          <H1 fontSize={24} fontWeight={700}>
            Create Account
          </H1>
        </FlexBox>

        <FlexBox justifyContent="space-between" flexWrap="wrap" my="1rem">
          <form noValidate onSubmit={handleSubmit} style={{ width: "100%" }}>
            <FlexBox
              justifyContent="space-between"
              flexWrap="wrap"
              paddingBottom={2}
            >
              <TextFieldWrapper>
                <LightTextField
                  fullWidth
                  name="firstName"
                  type="text"
                  label="Enter first name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName || ""}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
              </TextFieldWrapper>

              <TextFieldWrapper>
                <LightTextField
                  fullWidth
                  name="lastName"
                  type="text"
                  label="Enter last name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName || ""}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
              </TextFieldWrapper>
            </FlexBox>
            <FlexBox
              justifyContent="space-between"
              flexWrap="wrap"
              paddingBottom={2}
            >
              <TextFieldWrapper>
                <LightTextField
                  fullWidth
                  name="username"
                  type="text"
                  label="Enter username"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.username || ""}
                  error={Boolean(touched.username && errors.username)}
                  helperText={touched.username && errors.username}
                />
              </TextFieldWrapper>

              <TextFieldWrapper>
                <LightTextField
                  fullWidth
                  name="email"
                  type="email"
                  label="Enter email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email || ""}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
              </TextFieldWrapper>
            </FlexBox>

            <FlexBox justifyContent="space-between" flexWrap="wrap">
              <TextFieldWrapper>
                <LightTextField
                  fullWidth
                  name="password"
                  type="password"
                  label="Enter password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password || ""}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </TextFieldWrapper>

              <TextFieldWrapper>
                <LightTextField
                  fullWidth
                  name="confirmPassword"
                  type="password"
                  label="Enter confirm password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword || ""}
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
              </TextFieldWrapper>
            </FlexBox>

            <FormControlLabel
              control={
                <Checkbox
                  disableRipple
                  checked={values.terms}
                  onChange={handleChange}
                  name="terms"
                />
              }
              label="I agree to terms & conditions"
              sx={{
                marginTop: "0.5rem",
                "& .MuiTypography-root": { fontWeight: 600 },
              }}
            />

            {error && (
              <FormHelperText
                error
                sx={{
                  mt: 2,
                  fontSize: 13,
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                {error}
              </FormHelperText>
            )}

            <Box sx={{ mt: 4 }}>
              {loading ? (
                <LoadingButton loading fullWidth variant="contained">
                  Sign Up
                </LoadingButton>
              ) : (
                <Button fullWidth type="submit" variant="contained">
                  Sign Up
                </Button>
              )}
            </Box>
          </form>

          <Small margin="auto" mt={3} color="text.disabled">
            Do you already have an account?{" "}
            <Link to="/login">
              <Small color="primary.main">Log in</Small>
            </Link>
          </Small>
        </FlexBox>
      </Card>
    </FlexBox>
  );
};

export default Register;
