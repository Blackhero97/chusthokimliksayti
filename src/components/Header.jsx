import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBuilding, FaPhone, FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { Thermometer, Clock } from "lucide-react";
import {
  getCurrentTime,
  getCurrentTemperature,
  UPDATE_INTERVAL,
} from "../utils/dynamicStats";

const Header = ({ language, setLanguage, translations }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [currentTemp, setCurrentTemp] = useState(getCurrentTemperature());
  const location = useLocation();
  const t = translations[language];

  // Update time every minute and temperature every 30 seconds
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000); // 1 minute

    const tempInterval = setInterval(() => {
      setCurrentTemp(getCurrentTemperature());
    }, UPDATE_INTERVAL); // 30 seconds

    return () => {
      clearInterval(timeInterval);
      clearInterval(tempInterval);
    };
  }, []);

  const navigation = [
    { name: t.nav.home, href: "/", key: "home" },
    { name: t.nav.about, href: "/loyiha-haqida", key: "about" },
    { name: t.nav.services, href: "/xizmatlar", key: "services" },
    { name: t.nav.news, href: "/yangiliklar", key: "news" },
    { name: t.nav.statistics, href: "/statistika", key: "statistics" },
    { name: t.nav.leadership, href: "/rahbariyat", key: "leadership" },
    { name: t.nav.mobile, href: "/mobil-ilova", key: "mobile" },
    { name: t.nav.contact, href: "/aloqa", key: "contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "uz" ? "ru" : "uz");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      {/* Top Info Bar - Minimal - Hidden on mobile */}
      <div className="hidden md:block bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
          <div className="flex justify-between items-center text-xs text-gray-600">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1.5">
                <FaBuilding className="text-blue-600 text-xs" />
                <span className="hidden lg:inline">{t.republic}</span>
              </div>
              <span className="hidden lg:inline text-gray-300">|</span>
              <span className="hidden lg:inline">{t.region}</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden sm:flex items-center gap-1.5">
                <FaPhone className="text-blue-600 text-xs" />
                <span>+998 (69) 544-12-34</span>
              </div>
              <button
                onClick={toggleLanguage}
                className="bg-white hover:bg-gray-50 text-gray-700 px-2 sm:px-3 py-1 rounded-lg text-xs flex items-center gap-1.5 transition-colors border border-gray-200"
              >
                <FaGlobe className="text-blue-600 text-xs" />
                <span>{language === "uz" ? "O'zb" : "Рус"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Clean & Professional */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-10 h-10 sm:w-12 sm:h-12  rounded-lg flex items-center justify-center  transition-colors">
                <img src="/logo.png" alt="" />
              </div>
              <div>
                <h1 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 leading-tight">
                  {t.cityHall}
                </h1>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  {t.subtitle}
                </p>
              </div>
            </Link>

            {/* Weather & Time Display with Icons */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              {/* Temperature */}
              <div className="flex items-center gap-2 px-2.5 xl:px-3 py-1.5 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-100">
                <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <Thermometer className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" />
                </div>
                <span className="font-semibold text-orange-600 text-xs xl:text-sm">
                  {currentTemp}°C
                </span>
              </div>

              {/* Time */}
              <div className="flex items-center gap-2 px-2.5 xl:px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-white" />
                </div>
                <span className="font-semibold text-blue-600 text-xs xl:text-sm">
                  {currentTime}
                </span>
              </div>
            </div>

            {/* Mobile menu button and language switcher */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* Language Switcher Mobile */}
              <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200">
                <button
                  onClick={() => setLanguage("uz")}
                  className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                    language === "uz"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  UZ
                </button>
                <button
                  onClick={() => setLanguage("ru")}
                  className={`px-2 py-1 text-xs font-medium rounded transition-all ${
                    language === "ru"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  RU
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                aria-label={t.header.menu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-5 h-5 text-gray-700" />
                ) : (
                  <FaBars className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Clean & Minimal */}
      <nav className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-1">
            {navigation.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`py-2.5 lg:py-3 px-3 lg:px-4 text-xs lg:text-sm font-medium transition-colors relative ${
                  location.pathname === item.href
                    ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-3 border-t border-gray-100">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.key}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
