import React from "react";

import { Box, Button, TextField } from "@mui/material";

import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

import Header from "../../components/Header";
import PopUpAlert from "../../components/PopUpAlert";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address: "",
  city: "",
  zipCode: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  address: yup.string().required("Required"),
  city: yup.string().required("Required"),
  zipCode: yup.string().required("Required"),
});

const ProfileForm = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const [popUpAlert, setPopUpAlert] = React.useState({
    show: false,
    severity: "success",
    title: "Success !",
    message: "New User successfully created !",
  });

  const handleShowPopUpAlert = () => {
    setPopUpAlert((prevState) => ({
      ...prevState,
      show: true,
    }));
  };

  const handleFormSubmit = (values, resetForm) => {
    console.log(values);
    resetForm();
    handleShowPopUpAlert();
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="CREATE USER" subtitle="Create a New User Profile" />
        {popUpAlert.show && (
          <PopUpAlert
            severity={popUpAlert.severity}
            title={popUpAlert.title}
            message={popUpAlert.message}
          />
        )}
      </Box>
      <Formik
        onSubmit={(values, { resetForm }) =>
          handleFormSubmit(values, resetForm)
        }
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          isValid,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeate(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                name="firstName"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="lastName"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="email"
                type="email"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="contact"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="address"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="city"
                type="text"
                label="City"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                error={!!touched.city && !!errors.city}
                helperText={touched.city && errors.city}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                name="zipCode"
                type="text"
                label="Zip Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.zipCode}
                error={!!touched.zipCode && !!errors.zipCode}
                helperText={touched.zipCode && errors.zipCode}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                disabled={!isValid}
              >
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default ProfileForm;
