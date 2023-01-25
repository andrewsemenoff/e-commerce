import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { ButtonTypes } from "../CustomButton/CustomButton.component";
import {
  HorizontalBox,
  MyLink,
  SignBox,
  StyledForm,
  SubmitBtn,
} from "./SignIn.style";

const theme = createTheme();

const RestorePass = () => {
  const [mail, setMail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <SignBox>
        <HorizontalBox>
          <h3>Restore Password</h3>
          <MyLink to="/">Sign in</MyLink>
        </HorizontalBox>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            value={mail}
            margin="normal"
            required
            fullWidth
            label="Your email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleMailChange}
          />
          <SubmitBtn isFullWidth type="submit" buttonType={ButtonTypes.BLUE}>
            Send
          </SubmitBtn>
        </StyledForm>
      </SignBox>
    </ThemeProvider>
  );
};
export default RestorePass;
