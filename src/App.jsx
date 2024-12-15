import React, {useEffect} from "react";
import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import { ProjectProvider } from "./useContext/ProjectContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <ProjectProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project-detail/:id" element={<ProjectDetail />} />
          <Route path="*" element={<div className="h-96 flex justify-center items-center text-5xl font-semibold">Oops, page not found!</div>} />
        </Routes>
        <Footer />
      </Router>
    </ProjectProvider>
  );
};

export default App;
