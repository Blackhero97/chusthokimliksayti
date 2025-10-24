import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Smartphone,
  Download,
  Bell,
  MapPin,
  MessageSquare,
  BarChart3,
  Shield,
  Zap,
  Users,
  Star,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

const MobileAppPage = ({ language, translations }) => {
  const appFeatures = [
    {
      title:
        language === "uz" ? "Shikoyatlar va Takliflar" : "Жалобы и предложения",
      description:
        language === "uz"
          ? "Shahar bilan bog'liq barcha muammolarni tezkor xabar qilish va kuzatish imkoniyati"
          : "Возможность быстро сообщать и отслеживать все проблемы, связанные с городом",
      icon: MessageSquare,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title:
        language === "uz" ? "Joylashuv Xizmatlari" : "Геолокационные услуги",
      description:
        language === "uz"
          ? "Yaqin atrofdagi davlat xizmatlari, avtobus bekatlari va boshqa obyektlarni topish"
          : "Поиск ближайших государственных услуг, автобусных остановок и других объектов",
      icon: MapPin,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: language === "uz" ? "Xabarnomalar" : "Уведомления",
      description:
        language === "uz"
          ? "Muhim yangiliklar, xizmatlar to'xtatilishi va boshqa ma'lumotlar haqida xabardorlik"
          : "Уведомления о важных новостях, приостановке услуг и другой информации",
      icon: Bell,
      color: "from-yellow-500 to-orange-600",
    },
    {
      title:
        language === "uz" ? "Muammolarni Kuzatish" : "Отслеживание проблем",
      description:
        language === "uz"
          ? "Yuborilgan shikoyatlarning holati va yechim jarayonini real vaqtda kuzatish"
          : "Отслеживание статуса отправленных жалоб и процесса их решения в реальном времени",
      icon: BarChart3,
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const screenshots = [
    {
      title: language === "uz" ? "Asosiy sahifa" : "Главная страница",
      description:
        language === "uz"
          ? "Barcha xizmatlarni ko'rish"
          : "Просмотр всех услуг",
    },
    {
      title: language === "uz" ? "Xizmatlar" : "Услуги",
      description:
        language === "uz"
          ? "Elektron xizmatlar ro'yxati"
          : "Список электронных услуг",
    },
    {
      title: language === "uz" ? "Xarita" : "Карта",
      description:
        language === "uz" ? "Yaqin atrofdagi joylar" : "Ближайшие места",
    },
    {
      title: language === "uz" ? "Profil" : "Профиль",
      description:
        language === "uz" ? "Shaxsiy ma'lumotlar" : "Личная информация",
    },
  ];

  const stats = [
    {
      number: "4.8",
      icon: Star,
      label: language === "uz" ? "Reyting" : "Рейтинг",
    },
    {
      number: "50K+",
      icon: Download,
      label: language === "uz" ? "Yuklab olish" : "Загрузки",
    },
    {
      number: "4.5",
      icon: Users,
      label: language === "uz" ? "Foydalanuvchilar" : "Пользователи",
    },
    {
      number: "99%",
      icon: Shield,
      label: language === "uz" ? "Xavfsizlik" : "Безопасность",
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 0,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg"
                data-aos="fade-down"
                data-aos-delay="0"
              >
                <Smartphone className="w-4 h-4" />
                {language === "uz" ? "Mobil Ilova" : "Мобильное приложение"}
              </div>

              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Chust
                </span>
                <br />
                <span className="text-gray-900">Smart City</span>
              </h1>

              <p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {language === "uz"
                  ? "Shahar hayotini yanada qulay qiluvchi zamonaviy mobil ilova. Barcha xizmatlarni bir joyda."
                  : "Современное мобильное приложение, делающее городскую жизнь удобнее. Все услуги в одном месте."}
              </p>

              {/* Enhanced stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 100}
                  >
                    <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Premium Download Buttons */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <button className="group relative bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <PlayCircle className="h-7 w-7" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs opacity-80 font-medium">
                        {language === "uz" ? "Yuklab oling" : "Скачать в"}
                      </div>
                      <div className="text-xl font-bold">Google Play</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>

                <button className="group relative bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-800 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Smartphone className="h-7 w-7" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs opacity-80 font-medium">
                        {language === "uz" ? "Yuklab oling" : "Скачать в"}
                      </div>
                      <div className="text-xl font-bold">App Store</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div
              className="relative flex justify-center lg:justify-end"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="relative">
                {/* Phone mockup */}
                <div className="w-80 h-[640px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-b from-blue-50 to-purple-50 rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone screen content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>

                    {/* Status bar */}
                    <div className="flex justify-between items-center px-6 py-4 text-sm font-medium text-gray-700">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-gray-700 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-700 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-700 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App interface */}
                    <div className="px-6 py-4">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Chust Smart City
                        </h3>
                        <p className="text-gray-600">
                          {language === "uz"
                            ? "Xush kelibsiz!"
                            : "Добро пожаловать!"}
                        </p>
                      </div>

                      {/* App features grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {appFeatures.slice(0, 4).map((feature, index) => (
                          <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                          >
                            <div
                              className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white mb-3`}
                            >
                              <feature.icon className="w-5 h-5" />
                            </div>
                            <h4 className="font-semibold text-sm text-gray-900 mb-1">
                              {feature.title.split(" ")[0]}
                            </h4>
                            <p className="text-xs text-gray-600 line-clamp-2">
                              {feature.description.slice(0, 40)}...
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements around phone */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-0"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-500"></div>
                <div className="absolute top-1/3 -left-8 w-4 h-4 bg-pink-500 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 -right-8 w-5 h-5 bg-cyan-500 rounded-full animate-pulse delay-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-purple-50/20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full font-medium">
              <Zap className="w-4 h-4" />
              {language === "uz" ? "Xususiyatlar" : "Особенности"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {language === "uz"
                ? "Ilova Imkoniyatlari"
                : "Возможности приложения"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "uz"
                ? "Zamonaviy texnologiyalar yordamida yaratilgan qulay va xavfsiz mobil ilova"
                : "Удобное и безопасное мобильное приложение, созданное с использованием современных технологий"}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {appFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-t-3xl`}
                ></div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Learn more */}
                <button className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>{language === "uz" ? "Batafsil" : "Подробнее"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Background decoration */}
                <div
                  className={`absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS41IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz4KPHN2Zz4K')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 rounded-full font-medium backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              {language === "uz" ? "Texnik Ma'lumotlar" : "Технические данные"}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === "uz"
                ? "Ilova Xavfsizligi"
                : "Безопасность приложения"}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === "uz"
                ? "Eng yuqori darajadagi xavfsizlik standartlari va zamonaviy shifrlash texnologiyalari"
                : "Самые высокие стандарты безопасности и современные технологии шифрования"}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Security Features */}
            <div
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {language === "uz"
                  ? "Ma'lumotlar Xavfsizligi"
                  : "Безопасность данных"}
              </h3>
              <p className="text-gray-300 mb-6">
                {language === "uz"
                  ? "AES-256 shifrlash va biometrik autentifikatsiya orqali barcha ma'lumotlar himoyalangan"
                  : "Все данные защищены шифрованием AES-256 и биометрической аутентификацией"}
              </p>
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm font-medium">99.9% himoyalangan</span>
              </div>
            </div>

            <div
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {language === "uz" ? "Tez Ishlash" : "Быстрая работа"}
              </h3>
              <p className="text-gray-300 mb-6">
                {language === "uz"
                  ? "Optimallashtirilgan kod va zamonaviy arxitektura tufayli yuqori tezlik"
                  : "Высокая скорость благодаря оптимизированному коду и современной архитектуре"}
              </p>
              <div className="flex items-center gap-2 text-blue-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm font-medium">&lt; 2 soniya javob</span>
              </div>
            </div>

            <div
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                {language === "uz"
                  ? "24/7 Qo'llab-quvvatlash"
                  : "Поддержка 24/7"}
              </h3>
              <p className="text-gray-300 mb-6">
                {language === "uz"
                  ? "Doimiy texnik yordam va foydalanuvchi qo'llab-quvvatlash xizmati"
                  : "Круглосуточная техническая помощь и поддержка пользователей"}
              </p>
              <div className="flex items-center gap-2 text-purple-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm font-medium">Har doim mavjud</span>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-3xl font-bold mb-8">
              {language === "uz"
                ? "Hoziroq Yuklab Oling"
                : "Скачайте прямо сейчас"}
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <PlayCircle className="h-7 w-7" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-80 font-medium">
                      {language === "uz" ? "Android uchun" : "Для Android"}
                    </div>
                    <div className="text-xl font-bold">Google Play</div>
                  </div>
                </div>
              </button>

              <button className="group relative bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Smartphone className="h-7 w-7" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-80 font-medium">
                      {language === "uz" ? "iOS uchun" : "Для iOS"}
                    </div>
                    <div className="text-xl font-bold">App Store</div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppPage;
