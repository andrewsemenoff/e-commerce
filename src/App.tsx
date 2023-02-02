import { ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer/Footer.component";
import LandingPageContent from "./components/LandingPageContent/LandingPageContent.component";
import NavigationBar from "./components/NavigationBar/NavigationBar.component";
import Returns from "./components/Returns/Returns.component";
import RestorePass from "./components/SignIn/RestorePass.component";
import SignIn from "./components/SignIn/SignIn.component";
import SignUp from "./components/SignIn/SignUp.component";
import SubscribeBar from "./components/SubscribeBar/SubscribeBar.component";
import Products from "./pages/Products";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#1985A1",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/products">
            <Route index element={<Products/>}/>
            <Route path=":type"/>
          </Route>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/restore-pass" element={<RestorePass />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/landing" element={<LandingPageContent />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
