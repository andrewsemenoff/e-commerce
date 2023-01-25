import { ThemeProvider, createTheme } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer/Footer.component";
import LandingPageContent from "./components/LandingPageContent/LandingPageContent.component";
import NavigationBar from "./components/NavigationBar/NavigationBar.component";
import QuickShopSlider from "./components/QuickShopSlider/QuickShopSlider.component";
import SubscribeBar from "./components/SubscribeBar/SubscribeBar.component";
import Returns from "./components/Returns/Returns.component";
import SignIn from "./components/SignIn/SignIn.component";


const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary:
    {
      main: '#1985A1'
    }

  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavigationBar />
        <SignIn/>
        <Returns/>
        <QuickShopSlider />
        <LandingPageContent />
        <SubscribeBar />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
