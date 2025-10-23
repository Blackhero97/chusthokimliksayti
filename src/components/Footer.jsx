import { Link } from "react-router-dom";
import {
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Footer = ({ language, translations }) => {
  const t = translations[language];

  return (
    <footer className="bg-linear-to-br from-slate-50 via-blue-50/30 to-slate-50 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Logo and Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12  rounded-xl flex items-center justify-center">
                  <img src="logo.png" alt="" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 m-0 leading-tight">
                    {t.cityHall}
                  </h3>
                  <p className="text-xs text-gray-500 m-0">{t.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.footer.description}
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-semibold mb-5 text-base text-gray-900 flex items-center gap-2">
                <div className="w-1 h-5 bg-linear-to-b from-blue-600 to-blue-700 rounded-full"></div>
                {t.footer.usefulLinks}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://my.gov.uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 group text-sm hover:translate-x-1"
                  >
                    <span>my.gov.uz</span>
                    <FaExternalLinkAlt className="text-xs opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://lex.uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 group text-sm hover:translate-x-1"
                  >
                    <span>lex.uz</span>
                    <FaExternalLinkAlt className="text-xs opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://data.gov.uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 group text-sm hover:translate-x-1"
                  >
                    <span>data.gov.uz</span>
                    <FaExternalLinkAlt className="text-xs opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://regulation.gov.uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 flex items-center gap-2 group text-sm hover:translate-x-1"
                  >
                    <span>regulation.gov.uz</span>
                    <FaExternalLinkAlt className="text-xs opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-5 text-base text-gray-900 flex items-center gap-2">
                <div className="w-1 h-5 bg-linear-to-b from-blue-600 to-blue-700 rounded-full"></div>
                {t.footer.services}
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/xizmatlar"
                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {t.footer.electronicServices}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aloqa"
                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {t.footer.citizenReception}
                  </Link>
                </li>
                <li>
                  <a
                    href="https://data.gov.uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {t.footer.openData}
                  </a>
                </li>
                <li>
                  <Link
                    to="/statistika"
                    className="text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm hover:translate-x-1 inline-block"
                  >
                    {t.footer.statistics}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-5 text-base text-gray-900 flex items-center gap-2">
                <div className="w-1 h-5 bg-linear-to-b from-blue-600 to-blue-700 rounded-full"></div>
                {t.footer.contact}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                  <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shrink-0 shadow-md">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <div className="text-gray-600">
                    <div className="font-medium text-gray-900 mb-1 text-sm">
                      {t.footer.address}
                    </div>
                    <div className="text-xs leading-relaxed">
                      {t.contact.fullAddress}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                  <div className="w-8 h-8 bg-linear-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shrink-0 shadow-md">
                    <FaPhone className="text-white text-sm" />
                  </div>
                  <div className="text-gray-600">
                    <div className="font-medium text-gray-900 mb-1 text-sm">
                      {t.footer.phone}
                    </div>
                    <div className="text-xs">+998 (69) 544-12-34</div>
                    <div className="text-xs">+998 (69) 544-12-35</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-200">
                  <div className="w-8 h-8 bg-linear-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center shrink-0 shadow-md">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                  <div className="text-gray-600">
                    <div className="font-medium text-gray-900 mb-1 text-sm">
                      Email
                    </div>
                    <div className="text-xs">info@chust.gov.uz</div>
                    <div className="text-xs">contact@chust.gov.uz</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-100 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div className="text-center sm:text-left">
              <p className="font-medium">© 2025 {t.footer.copyright}</p>
              <p className="text-xs text-gray-500 mt-1">
                {language === "uz"
                  ? "Barcha huquqlar himoyalangan"
                  : "Все права защищены"}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link
                to="/maxfiylik"
                className="hover:text-blue-600 transition-colors hover:underline"
              >
                {t.footer.privacy}
              </Link>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <Link
                to="/yordam"
                className="hover:text-blue-600 transition-colors hover:underline"
              >
                {t.footer.help}
              </Link>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <Link
                to="/aloqa"
                className="hover:text-blue-600 transition-colors hover:underline"
              >
                {t.footer.feedback}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
