import { Box, Button, Card, Grid } from "@mui/material";
import LightTextField from "components/LightTextField";
import { useFormik } from "formik";
import useTitle from "hooks/useTitle";
import { FC } from "react";
import * as Yup from "yup";
const AddNewUser: FC = () => {
  // change navbar title
  useTitle("Add New User");

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zip: "",
    about: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is Required!"),
    email: Yup.string().email().required("Email is Required!"),
    phone: Yup.number().min(8).required("Phone is Required!"),
    country: Yup.string().required("Country is Required!"),
    state: Yup.string().required("State is Required!"),
    city: Yup.string().required("City is Required!"),
    address: Yup.string().required("Address is Required!"),
    zip: Yup.string().required("Zip is Required!"),
    about: Yup.string().required("About is Required!"),
  });

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <Box pt={2} pb={4}>
      <Card sx={{ padding: 4 }}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Card sx={{ padding: 3, boxShadow: 2 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item sm={12} xs={12}>
                    <LightTextField
                      fullWidth
                      name="zip"
                      placeholder="Enter unique id"
                      value={values.zip}
                      onChange={handleChange}
                      error={Boolean(touched.zip && errors.zip)}
                      helperText={touched.zip && errors.zip}
                    />
                  </Grid>

                  <Grid item sm={12} xs={12}>
                    <LightTextField
                      fullWidth
                      name="fullName"
                      placeholder="Full Name"
                      value={values.fullName}
                      onChange={handleChange}
                      error={Boolean(touched.fullName && errors.fullName)}
                      helperText={touched.fullName && errors.fullName}
                    />
                  </Grid>
                  <Grid item sm={12} xs={12}>
                    <LightTextField
                      fullWidth
                      name="amount"
                      placeholder="Enter amount"
                      value={values.phone}
                      onChange={handleChange}
                      error={Boolean(touched.phone && errors.phone)}
                      helperText={touched.phone && errors.phone}
                    />
                  </Grid>

                  <Grid item sm={12} xs={12}>
                    <input
                      type="file"
                      style={{
                        borderRadius: "8px",
                        border: "2px solid #eee7e7",
                        fontWeight: 500,
                        width: "100%",
                        height: "53.5px",
                        alignSelf: "center",
                      }}
                      name="file"
                      placeholder="Select File"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained">
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default AddNewUser;
