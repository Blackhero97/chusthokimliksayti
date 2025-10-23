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
    <footer className="bg-slate-50 border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaBuilding className="text-lg text-white" />
              </div>
              <div>
                <h3 className="font-bold text-base text-gray-900 m-0">
                  {t.cityHall}
                </h3>
                <p className="text-xs text-gray-500 m-0">{t.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-gray-900">
              {t.footer.usefulLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://my.gov.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5 group"
                >
                  <span>my.gov.uz</span>
                  <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://lex.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5 group"
                >
                  <span>lex.uz</span>
                  <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://data.gov.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5 group"
                >
                  <span>data.gov.uz</span>
                  <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="https://regulation.gov.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5 group"
                >
                  <span>regulation.gov.uz</span>
                  <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-gray-900">
              {t.footer.services}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/xizmatlar"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {t.footer.electronicServices}
                </Link>
              </li>
              <li>
                <Link
                  to="/aloqa"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {t.footer.citizenReception}
                </Link>
              </li>
              <li>
                <a
                  href="https://data.gov.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {t.footer.openData}
                </a>
              </li>
              <li>
                <Link
                  to="/statistika"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {t.footer.statistics}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-gray-900">
              {t.footer.contact}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-blue-600 mt-0.5 shrink-0" />
                <div className="text-gray-600">
                  <div className="font-medium text-gray-900 mb-0.5">
                    {t.footer.address}
                  </div>
                  <div className="text-xs">{t.contact.fullAddress}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FaPhone className="text-green-600 mt-0.5 shrink-0" />
                <div className="text-gray-600">
                  <div className="font-medium text-gray-900 mb-0.5">
                    {t.footer.phone}
                  </div>
                  <div className="text-xs">+998 (69) 544-12-34</div>
                  <div className="text-xs">+998 (69) 544-12-35</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FaEnvelope className="text-red-600 mt-0.5 shrink-0" />
                <div className="text-gray-600">
                  <div className="font-medium text-gray-900 mb-0.5">Email</div>
                  <div className="text-xs">info@chust.gov.uz</div>
                  <div className="text-xs">contact@chust.gov.uz</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="mb-3 md:mb-0">© 2025 {t.footer.copyright}</div>
            <div className="flex gap-6">
              <Link
                to="/maxfiylik"
                className="hover:text-blue-600 transition-colors"
              >
                {t.footer.privacy}
              </Link>
              <Link
                to="/yordam"
                className="hover:text-blue-600 transition-colors"
              >
                {t.footer.help}
              </Link>
              <Link
                to="/aloqa"
                className="hover:text-blue-600 transition-colors"
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
