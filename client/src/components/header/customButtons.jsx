import { Button, Box, Typography, styled, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import LoginDialog from "../login/LoginDialog";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { validate } from "../../services/api";

const Wrapper = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  background: #fff;
  color: #2874f0;
  width: 125px;
  text-transform: none;
  font-weight: 600;
  border-radius: 10;
  :hover {
    background: #2874f0;
    color: #fff;
  }
  box-shadow: 0;
`;

const Container = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState();

  const openDialog = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      validate().then((res) => {
        setCurrentUser(res);
      });
    }
  }, []);

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Wrapper>
      {currentUser ? (
        <div style={{ alignItems: "center", justifyItems: "center" }}>
          <Typography>{currentUser.user.firstName}</Typography>
          <LoginButton
            variant="outlined"
            style={{ marginLeft: 25, marginTop: "-10px" }}
            onClick={() => {
              sessionStorage.removeItem("token");
              window.location.reload();
            }}
          >
            Logout
          </LoginButton>
        </div>
      ) : (
        <LoginButton
          variant="contained"
          style={{ marginLeft: 25 }}
          onClick={() => openDialog()}
        >
          Login
        </LoginButton>
      )}

      <Typography style={{ marginLeft: 40 }}>Become a Seller</Typography>
      <Typography style={{ marginLeft: 40 }}>More</Typography>
      {currentUser ? (
        <Container to="/cart">
          <ShoppingCart style={{ marginLeft: 50 }} />
          <Badge badgeContent={cartItems?.length} color="secondary" />
          <Typography>Cart</Typography>
        </Container>
      ) : (
        ""
      )}
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
