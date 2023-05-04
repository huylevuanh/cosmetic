import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
