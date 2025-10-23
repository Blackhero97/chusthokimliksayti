import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import NewsPage from "./pages/NewsPage";
import StatisticsPage from "./pages/StatisticsPage";
import ContactPage from "./pages/ContactPage";
import MobileAppPage from "./pages/MobileAppPage";
import LeadershipPage from "./pages/LeadershipPage";
import NotFoundPage from "./pages/NotFoundPage";

import { translations } from "./context/translations";

export default function App() {
  const [language, setLanguage] = useState("uz");

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header
          language={language}
          setLanguage={setLanguage}
          translations={translations}
        />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage language={language} translations={translations} />
            }
          />
          <Route
            path="/loyiha-haqida"
            element={
              <AboutPage language={language} translations={translations} />
            }
          />
          <Route
            path="/xizmatlar"
            element={
              <ServicesPage language={language} translations={translations} />
            }
          />
          <Route
            path="/yangiliklar"
            element={
              <NewsPage language={language} translations={translations} />
            }
          />
          <Route
            path="/statistika"
            element={
              <StatisticsPage language={language} translations={translations} />
            }
          />
          <Route
            path="/aloqa"
            element={
              <ContactPage language={language} translations={translations} />
            }
          />
          <Route
            path="/mobil-ilova"
            element={
              <MobileAppPage language={language} translations={translations} />
            }
          />
          <Route
            path="/rahbariyat"
            element={
              <LeadershipPage language={language} translations={translations} />
            }
          />
          <Route path="*" element={<NotFoundPage language={language} />} />
        </Routes>

        <Footer language={language} translations={translations} />
      </div>
    </Router>
  );
}
