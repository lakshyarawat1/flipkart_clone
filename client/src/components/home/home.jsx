import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Banner from "./banner";
import { getProducts } from "../../redux/actions/productActions.js";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./slide";
import MidSlide from "./midSlide";
import MidSection from "./midSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "../../services/api.js";

const Container = styled(Box)`
  padding: 20px 10px 10px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);

  const [user, setUser] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    validate().then((res) => {
      setUser(res);
    });
  }, []);
  if (user) {
    return (
      <>
        <NavBar />
        <ToastContainer />
        <Container>
          <Banner />
          <MidSlide products={products} title="Deal of the day" timer={true} />
          <MidSection />
          <Slide products={products} title="Electronics" timer={false} />
          <Slide products={products} title="Top sellers" timer={false} />
          <Slide products={products} title="Suggested Items" timer={false} />
          <Slide products={products} title="Trending" timer={false} />
          <Slide products={products} title="Season top buys" timer={false} />
        </Container>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Home;
