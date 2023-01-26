import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { ButtonTypes } from "../CustomButton/CustomButton.component";
import {
  HighlightedText,
  HorizontalBox,
  MyLink,
  Paragraph,
  SignBox,
  StyledForm,
  SubmitBtn,
} from "./SignIn.style";

const theme = createTheme();

const SignUp = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirmation, setPassConfirmation] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userName: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      passConfirmation: data.get("confirmation"),
    });
  };
  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value);
  };
  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handlePassConfirmationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassConfirmation(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <SignBox>
        <HorizontalBox>
          <h3>Sign up</h3>
          <Paragraph>
            Already have an account? <MyLink to="/">Sign in</MyLink>
          </Paragraph>
        </HorizontalBox>
        <StyledForm onSubmit={handleSubmit}>
          <TextField
            value={name}
            margin="normal"
            required
            fullWidth
            label="Name"
            name="name"
            autoFocus
            onChange={handleNameChange}
          />
          <TextField
            value={mail}
            margin="normal"
            required
            fullWidth
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
            autoComplete="current-password"
            onChange={handlePassChange}
          />

          <TextField
            value={passConfirmation}
            margin="normal"
            required
            fullWidth
            name="confirmation"
            label="Confirm password"
            type="password"
            autoComplete="current-password"
            onChange={handlePassConfirmationChange}
          />
          <SubmitBtn isFullWidth={true} type="submit" buttonType={ButtonTypes.BLUE}>
            Sign up
          </SubmitBtn>
          <Paragraph>
            By signing in to your account you agree with our
            <MyLink to="/">Privacy Policy</MyLink>&nbsp;&nbsp;and&nbsp;&nbsp;
            <MyLink to="/">Terms of Use.</MyLink>
          </Paragraph>
        </StyledForm>
      </SignBox>
    </ThemeProvider>
  );
};
export default SignUp;
