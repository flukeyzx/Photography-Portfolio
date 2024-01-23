import LandingPage from "./pages/LandingPage";
import Nav from "./components/Nav";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
//Styled
import GlobalStyle from "./components/GlobalStyle";
//React Router.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//scroll top.
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <GlobalStyle />
        <ScrollTop />
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/work" Component={Work} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
