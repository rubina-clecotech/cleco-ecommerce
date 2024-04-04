import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { InputMultiline, InputTextField } from "../shared/TextField";
import { SubmitButton } from "../shared/Buttons";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutAddress = ({handleNext}) => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      house: "",
      address: "",
      pin: "",
      city: "",
      phone: "",
      phone2: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Name is required"),
      house: Yup.string().required("House No. is required"),
      address:  Yup.string()
      .required('Address is required')
      .min(5, 'Address must be at least 5 characters long')
      .max(100, 'Address must not exceed 100 characters'),
      pin: Yup.string()
      .required('PIN code is required')
      .matches(/^\d{6}$/, 'Invalid PIN code format'),
      city: Yup.string()
      .required('City is required')
      .min(2, 'City name must be at least 2 characters long'),
      phone:  Yup.string()
      .required('Mobile number is required')
      .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
      phone2:  Yup.string()
      .required('Mobile number is required')
      .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
    }),
    onSubmit: (values) => {
      handleNext()
    },
  });
  return (
    <>
      <Box className="checkout-address-container">
        <Container>
          <Stack className="address-box center" spacing={4}>
            <form className="address-form" onSubmit={formik.handleSubmit}>
              <InputTextField
                name="fullName"
                id="fullName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullName && formik.errors.fullName}
                helperText={formik.touched.fullName && formik.errors.fullName}
                styling="mt-30"
                label="Full Name"
              />
              <InputMultiline
                name="house"
                id="house"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.house && formik.errors.house}
                helperText={formik.touched.house && formik.errors.house}
                label="House No."
                styling="mt-10"
              />
              <InputMultiline
                name="address"
                id="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && formik.errors.address}
                helperText={formik.touched.address && formik.errors.address}
                label="Street/Address"
                styling="mt-10"
              />
              <InputTextField
                name="pin"
                id="pin"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.pin && formik.errors.pin}
                helperText={formik.touched.pin && formik.errors.pin}
                label="Pin Code"
                styling="mt-10"
              />
              <InputTextField
                name="city"
                id="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && formik.errors.city}
                helperText={formik.touched.city && formik.errors.city}
                label="City"
                styling="mt-10"
              />
              <InputTextField
                name="phone"
                id="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone}
                label="Mobile Number"
                styling="mt-10"
              />
              <InputTextField
                name="phone2"
                id="phone2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone2 && formik.errors.phone2}
                helperText={formik.touched.phone2 && formik.errors.phone2}
                label="Alternate Mobile Number"
                styling="mt-10"
              />
              <SubmitButton
                title="Confirm Address"
                styling="checkout-address-btn mt-10"
              />
            </form>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default CheckoutAddress;
