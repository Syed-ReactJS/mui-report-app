import { Box, Button, styled, TextField, TextFieldProps } from "@mui/material";

// styled components
export const SocialIconButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: 48,
  fontSize: 13,
  borderRadius: "6px",
  border: "2px solid",
  borderColor:
    theme.palette.mode === "light"
      ? theme.palette.text.secondary
      : theme.palette.divider,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "0.5rem",
  },
}));

export const TextFieldWrapper = styled(Box)(({ theme }) => ({
  width: "48%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "0.5rem",
  },
}));

export const StyledTextField = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
   
    "& .MuiOutlinedInput-input": {
    },
    "& .MuiOutlinedInput-notchedOutline": {
    },
  })
);
