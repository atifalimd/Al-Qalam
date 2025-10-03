import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Shared components
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

// Landing page sections
import { Hero } from "./components/Hero";
import { About } from "./components/about";
import { Course } from "./components/Course";
import { Resources } from "./components/Resource";
import { Student } from "./components/Student";

// Dedicated pages
import { TextBooks } from "./Pages/TextBooks";
import { Syllabus } from "./Pages/Syllabus";
import { Exam } from "./Pages/Exam";
import { Nahw } from "./Pages/Nahw";
import { Sughra } from "./Pages/Sughra";
import { Balagah } from "./Pages/Balagah";
import Video from "./Pages/Video";
import Computing from "./Pages/Computing";
import Study from "./Pages/Study";
import Quran from "./Pages/Quran";
import Seerah from "./Pages/Seerah";
import Misc from "./Pages/Misc";
import Sarf from "./Pages/Sarf";
import Fiqh from "./Pages/Fiqh";
import Hadith from "./Pages/Hadith";
import Urdu from "./Pages/Urdu";
import Literature from "./Pages/Literature";
import Logic from "./Pages/Logic";
import NotFound from "./Pages/NotFound";

// ✅ Wrapper for normal pages (with NavBar + Footer)
function PageWrapper({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <Hero />
              <About />
              <Course />
              <Resources />
              <Student />
            </PageWrapper>
          }
        />

        {/* Dedicated Pages */}
        <Route
          path="/textbooks"
          element={
            <PageWrapper>
              <TextBooks />
            </PageWrapper>
          }
        />
        <Route
          path="/syllabus"
          element={
            <PageWrapper>
              <Syllabus />
            </PageWrapper>
          }
        />
        <Route
          path="/exam"
          element={
            <PageWrapper>
              <Exam />
            </PageWrapper>
          }
        />
        <Route
          path="/nahw"
          element={
            <PageWrapper>
              <Nahw />
            </PageWrapper>
          }
        />
        <Route
          path="/sughra"
          element={
            <PageWrapper>
              <Sughra />
            </PageWrapper>
          }
        />
        <Route
          path="/balagah"
          element={
            <PageWrapper>
              <Balagah />
            </PageWrapper>
          }
        />
        <Route
          path="/video"
          element={
            <PageWrapper>
              <Video />
            </PageWrapper>
          }
        />
        <Route
          path="/computing"
          element={
            <PageWrapper>
              <Computing />
            </PageWrapper>
          }
        />
        <Route
          path="/study"
          element={
            <PageWrapper>
              <Study />
            </PageWrapper>
          }
        />
        <Route
          path="/quran"
          element={
            <PageWrapper>
              <Quran />
            </PageWrapper>
          }
        />
        <Route
          path="/seerah"
          element={
            <PageWrapper>
              <Seerah />
            </PageWrapper>
          }
        />
        <Route
          path="/misc"
          element={
            <PageWrapper>
              <Misc />
            </PageWrapper>
          }
        />
        <Route
          path="/sarf"
          element={
            <PageWrapper>
              <Sarf />
            </PageWrapper>
          }
        />
        <Route
          path="/fiqh"
          element={
            <PageWrapper>
              <Fiqh />
            </PageWrapper>
          }
        />
        <Route
          path="/hadith"
          element={
            <PageWrapper>
              <Hadith />
            </PageWrapper>
          }
        />
        <Route
          path="/urdu"
          element={
            <PageWrapper>
              <Urdu />
            </PageWrapper>
          }
        />
        <Route
          path="/literature"
          element={
            <PageWrapper>
              <Literature />
            </PageWrapper>
          }
        />
        <Route
          path="/logic"
          element={
            <PageWrapper>
              <Logic />
            </PageWrapper>
          }
        />

        {/* Wrong URL → No NavBar, No Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
