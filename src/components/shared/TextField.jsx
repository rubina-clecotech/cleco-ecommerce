import React from "react";
import { TextField } from "@mui/material";

export const InputTextField = ({ label, styling, type, id,name ,onChange,value,helperText,onBlur,error}) => {
  return (
    <>
      <TextField
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        helperText={helperText}
        error={error}
        value={value}
        label={label}
        className={styling}
        fullWidth
        type={type}
      />
    </>
  );
};

export const InputMultiline = ({ label, styling, type, id ,name,onChange,value,helperText,onBlur,error}) => {
  return (
    <>
      <TextField
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        helperText={helperText}
        error={error}
        value={value}
        label={label}
        className={styling}
        fullWidth
        type={type}
        multiline
        maxRows={1}
      />
    </>
  );
};
