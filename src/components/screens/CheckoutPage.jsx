import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import React from "react";
import UpperNav from "../layout/UpperNav";
import Navbar from "../layout/Navbar";
import CheckoutStart from "./CheckoutStart";
import CheckoutAddress from "./CheckoutAddress";
import ConfirmCheckout from "./ConfirmCheckout";
import CheckoutSuccess from "../internal/CheckoutSuccess";

const CheckoutPage = () => {
  // stepper
  const steps = ["Cart Items", "Address", "Confirm Checkout"];
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <Box className="checkout-container">
        <UpperNav />
        <Navbar />
        <Container>
        {activeStep !== steps.length && (
          <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              className="mt-18"
            >
              Back
            </Button>
          )}
          <Box className="center">
          <Box className="stepper-container mt-10">
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
          </Box>
          {activeStep === 0 && <CheckoutStart handleNext={handleNext} />}
          {activeStep === 1 && <CheckoutAddress handleNext={handleNext} />}
          {activeStep === 2 && <ConfirmCheckout handleNext={handleNext} />}
          {activeStep === steps.length && (
            <CheckoutSuccess />
          )}
        </Container>
      </Box>
    </>
  );
};

export default CheckoutPage;
