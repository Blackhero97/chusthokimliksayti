import { Link } from "react-router-dom";
import { Home, Search, AlertCircle } from "lucide-react";

const NotFoundPage = ({ language }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50/30 to-cyan-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 rounded-full mb-6">
            <AlertCircle className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {language === "uz" ? "Sahifa topilmadi" : "Страница не найдена"}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {language === "uz"
              ? "Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan."
              : "К сожалению, страница, которую вы ищете, не существует или была перемещена."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            {language === "uz"
              ? "Bosh sahifaga qaytish"
              : "Вернуться на главную"}
          </Link>
          <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-semibold border border-gray-300 hover:border-gray-400 shadow-sm hover:shadow-md transition-all duration-300">
            <Search className="w-5 h-5" />
            {language === "uz" ? "Qidirish" : "Поиск"}
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <Link
            to="/xizmatlar"
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="font-semibold text-gray-900 mb-1">
              {language === "uz" ? "Xizmatlar" : "Услуги"}
            </div>
            <div className="text-gray-600 text-xs">
              {language === "uz" ? "Tizim xizmatlari" : "Системные услуги"}
            </div>
          </Link>
          <Link
            to="/loyiha-haqida"
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="font-semibold text-gray-900 mb-1">
              {language === "uz" ? "Loyiha" : "Проект"}
            </div>
            <div className="text-gray-600 text-xs">
              {language === "uz" ? "Loyiha haqida" : "О проекте"}
            </div>
          </Link>
          <Link
            to="/statistika"
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="font-semibold text-gray-900 mb-1">
              {language === "uz" ? "Statistika" : "Статистика"}
            </div>
            <div className="text-gray-600 text-xs">
              {language === "uz" ? "Ma'lumotlar" : "Данные"}
            </div>
          </Link>
          <Link
            to="/aloqa"
            className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="font-semibold text-gray-900 mb-1">
              {language === "uz" ? "Aloqa" : "Контакты"}
            </div>
            <div className="text-gray-600 text-xs">
              {language === "uz" ? "Bog'lanish" : "Связаться"}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
