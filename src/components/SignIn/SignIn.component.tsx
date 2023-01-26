import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { ButtonTypes } from "../CustomButton/CustomButton.component";
import {
  HorizontalBox,
  MyLink,
  Paragraph,
  SignBox,
  StyledForm,
  SubmitBtn,
} from "./SignIn.style";

const theme = createTheme();

const SignIn = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };
  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <SignBox>
        <HorizontalBox>
          <h3>Sign in</h3>
          <Paragraph>
            {"Don't have an account?"}&nbsp;
            <MyLink to="/">{"Sign Up"}</MyLink>
          </Paragraph>
        </HorizontalBox>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            value={mail}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleMailChange}
          />
          <TextField
            value={pass}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePassChange}
          />
          <SubmitBtn disabled={false} isFullWidth={true} type="submit" buttonType={ButtonTypes.BLUE}>
            Login
          </SubmitBtn>
          <HorizontalBox align="center">
            <MyLink to="/">Lost your password?</MyLink>
          </HorizontalBox>
        </StyledForm>
      </SignBox>
    </ThemeProvider>
  );
};
export default SignIn;
