import React from "react";
import { HeadDescription } from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
  FormGroup,
  Input,
  Label,
  Button,
} from "../components/Styles";

const Login = () => {
  // const Login = () => {
  //     const handleLogin = (e) => {
  //       e.preventDefault();
  //       // Perform login logic here
  //     };

  return (
    <div>
      <NavbarHead />
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{ marginTop: "130px" }}>User Login</HeadTitle>
          {/* <form onSubmit={handleLogin}> */}

          <form style={{ marginTop: "50px", marginLeft: "550px" }}>
            <FormGroup>
              <Label>Username</Label>
              <Input
                type="text"
                placeholder="Enter your username"
                id="name"
                name="name"
              />
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                id="pw"
                name="pw"
              />
            </FormGroup>

            <Button
              style={{ marginLeft: "110px", marginTop: "50px" }}
              type="submit"
            >
              Login
            </Button>
            <HeadDescription style={{ marginLeft: "30px" }}>
              New User? <a href="/signup">Signup!</a>{" "}
            </HeadDescription>
          </form>
        </ContentContainer>
        <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default Login;
