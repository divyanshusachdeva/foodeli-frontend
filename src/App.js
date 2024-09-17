import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import darkTheme from "./theme/DarkTheme";
import Routers from "./Routers/Routers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import { getUser } from "./State/Authentication/Action";
import { findCart } from "./State/Customers/Cart/cart.action";
import {
  getAllRestaurantsAction,
  getRestaurantByUserId,
} from "./State/Customers/Restaurant/restaurant.action";
import Footer from "./Footer"; // Import Footer component

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const location = useLocation(); // Get current location

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      dispatch(findCart(jwt));
      dispatch(getAllRestaurantsAction(jwt));
    }
  }, [auth.jwt]);

  useEffect(() => {
    if (auth.user?.role === "ROLE_RESTAURANT_OWNER") {
      dispatch(getRestaurantByUserId(auth.jwt || jwt));
    }
  }, [auth.user]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />

      {/* Conditionally render Footer only on the homepage */}
      {location.pathname === '/' && <Footer />}  {/* Render footer only if on homepage */}
    </ThemeProvider>
  );
}

export default App;
