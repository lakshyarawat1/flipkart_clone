import { Dialog, TextField, Typography, Button, styled } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { authenticateSignUp, authenticateLogin } from "../../services/api";
import { toast } from "react-toastify";

const Component = styled(Box)`
  height: 80vh;
  width: 80vh;
`;

const Tagline = styled(Box)`
  font-size: 12px;
  color: #878787;
  margin-left: 30px;
  margin-top: 20px;
`;

const LoginButton = styled(Button)`
  background: #fb641b;
  color: #fff;
  height: 6.5vh;
  width: 80%;
  margin-left: 30px;
  border-radius: 2px;
  :hover:color:#000;
  margin-top: 10px;
  text-transform: none;
  font-weight: 600;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  height: 6.5vh;
  width: 80%;
  border-radius: 2px;
  margin-left: 30px;
  margin-top: 10px;
  box-shadow: 0 3px 3px 0 #878787;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat 85% 85%;
  height: 80vh;
  width: 45%;
`;

const Heading = styled(Typography)`
  font-size: 28px;
  font-weight: 600;
  margin-top: 40px;
  margin-left: 20px;
  color: #fff;
`;

const Wrapper = styled(Box)`
  width: 65%;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: `Looks like you're new here!`,
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signUpInitialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  userName: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignUp] = useState(signUpInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error] = useState(false);
  const [password, setPassword] = useState("");
  const [validLength, setValidLength] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const validatePassword = (password) => {
    setValidLength(password.length >= 8);
    setHasUpperCase(/[A-Z]/.test(password));
    setHasLowerCase(/[a-z]/.test(password));
    setHasNumber(/\d/.test(password));
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(password));
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
    setSignUp({ ...signup, [e.target.name]: e.target.value });
  };

  const toggleSignUp = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const toggleSignIn = () => {
    toggleAccount(accountInitialValues.login);
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (response.status === 200) {
      sessionStorage.setItem("token", response.data.user.token);
      toast("Logged in successfully !");
      handleClose();
      window.location.reload();
    } else if (response.status === 401) {
      toast("Invalid username or password");
    } else if (response.status === 404) {
      toast("User not found");
    }
  };

  const onInputChange = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
  };

  const signUpUser = async () => {
    const signUpDetails = {
      userName: signup.userName,
      email: signup.email,
      phone: signup.phone,
      password: password,
      firstName: signup.firstName,
      lastName: signup.lastName,
    };
    let response = await authenticateSignUp(signUpDetails);
    if (response.status === 401) {
      toast("User already exists !");
    }
    if (response.status === 403) {
      toast("Password too weak !");
    }
    if (response.status === 200) {
      toast("User created successfully");
      sessionStorage.setItem("token", response.data.user.token);
    }
    console.log(response.data.user.token);
    handleClose();
    setPassword("");
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Component style={{}}>
        <Box style={{ display: "flex" }}>
          <Image>
            <Heading>{account.heading}</Heading>
            <Typography style={{ margin: 20, color: "#f9f9f9" }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Box style={{}}>
              <TextField
                onChange={(e) => onValueChange(e)}
                name="userName"
                variant="standard"
                label="Enter Username"
                style={{ width: "80%", marginTop: 50, marginLeft: 25 }}
              />
              {error && (
                <Typography style={{ color: "red" }}>
                  Please enter a valid username and password
                </Typography>
              )}
              <TextField
                onChange={(e) => onValueChange(e)}
                name="password"
                variant="standard"
                label="Enter Password"
                style={{ width: "80%", marginTop: 30, marginLeft: 25 }}
              />
              <Tagline>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Tagline>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography
                style={{
                  marginTop: 10,
                  textAlign: "center",
                  color: "#878787",
                  fontWeight: 400,
                }}
              >
                OR
              </Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <Typography
                style={{
                  fontSize: 14,
                  textAlign: "center",
                  color: "#2874f0",
                  fontWeight: 600,
                  marginTop: 90,
                  cursor: "pointer",
                }}
                onClick={() => toggleSignUp()}
              >
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Username"
                name="userName"
                style={{
                  width: "70%",
                  marginTop: 20,
                  marginLeft: 25,
                }}
              />
              <TextField
                variant="standard"
                name="email"
                onChange={(e) => onInputChange(e)}
                label="Enter Email"
                style={{
                  width: "70%",
                  marginTop: 20,
                  marginLeft: 25,
                }}
              />
              <TextField
                variant="standard"
                name="phone"
                onChange={(e) => onInputChange(e)}
                label="Enter Phone"
                style={{
                  width: "70%",
                  marginTop: 20,
                  marginLeft: 25,
                }}
              />
              <div>
                <TextField
                  variant="standard"
                  style={{ fontWeight: 600, margin: 25, width: "70%" }}
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
                <ul>
                  <li style={{ color: validLength ? "green" : "red" }}>
                    Minimum 8 characters
                  </li>
                  <li style={{ color: hasUpperCase ? "green" : "red" }}>
                    At least one uppercase letter
                  </li>
                  <li style={{ color: hasLowerCase ? "green" : "red" }}>
                    At least one lowercase letter
                  </li>
                  <li style={{ color: hasNumber ? "green" : "red" }}>
                    At least one number
                  </li>
                  <li style={{ color: hasSpecialChar ? "green" : "red" }}>
                    At least one special character
                  </li>
                </ul>
              </div>

              <LoginButton onClick={() => signUpUser()}>Continue</LoginButton>
              <Typography
                style={{
                  cursor: "pointer",
                  fontSize: 14,
                  textAlign: "center",
                  color: "#2874f0",
                  fontWeight: 600,
                  marginTop: 20,
                }}
                onClick={() => toggleSignIn()}
              >
                Already registered ? Login
              </Typography>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
