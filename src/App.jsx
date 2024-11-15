import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Profile from "./pages/Profile.jsx";
import Course from "./pages/Course.jsx";
import Header from "./components/Header.jsx";
import Blogs from "./pages/Blogs.jsx"
import Privacy from "./pages/Privacy.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
