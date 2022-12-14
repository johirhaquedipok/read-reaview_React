import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/notFound.js/NotFound";
import ReviewDetails from "./Components/ReviewDetails/ReviewDetails";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
          <Route path="/reviews/:user_id" element={<ReviewDetails />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
