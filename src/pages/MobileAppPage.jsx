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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 transition-colors rounded-full font-medium animate-fadeInDown">
              {language === "uz" ? "Mobil Ilova" : "Мобильное приложение"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 animate-fadeInUp delay-100">
              {language === "uz" ? "Chust Smart City" : "Чуст Смарт Сити"}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fadeInUp delay-200">
              {language === "uz"
                ? "Fuqarolar uchun qulay va tezkor xizmat ko'rsatish ilovasi. Barcha shahar xizmatlarini mobil qurilmangizdan foydalaning."
                : "Удобное и быстрое приложение для граждан. Пользуйтесь всеми городскими услугами с мобильного устройства."}
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <PlayCircle className="h-8 w-8" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">
                      {language === "uz" ? "Yuklab oling" : "Скачать в"}
                    </div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
              </Button>

              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-xl"
              >
                <div className="flex items-center space-x-3">
                  <Smartphone className="h-8 w-8" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">
                      {language === "uz" ? "Yuklab oling" : "Скачать в"}
                    </div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* App Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    boxShadow:
                      "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(59, 130, 246, 0.07)",
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <CardContent className="p-4 text-center relative z-10">
                    <stat.icon className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              {language === "uz" ? "Ilova Interfeysi" : "Интерфейс приложения"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === "uz"
                ? "Foydalanuvchi uchun qulay va zamonaviy dizayn"
                : "Удобный и современный дизайн для пользователя"}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {screenshots.map((screenshot, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{
                  boxShadow:
                    "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(100, 116, 139, 0.07)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <CardContent className="p-6 relative z-10">
                  {/* Placeholder for app screenshot */}
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-64 mb-4 flex items-center justify-center">
                    <Smartphone className="h-16 w-16 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-center">
                    {screenshot.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {screenshot.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Features - Premium Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 hover:bg-purple-200 text-purple-700 px-4 py-1.5 rounded-full font-medium transition-colors">
              {language === "uz" ? "Imkoniyatlar" : "Возможности"}
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {language === "uz"
                ? "Ilova Imkoniyatlari"
                : "Возможности приложения"}
            </h2>
            <p className="text-base text-gray-600">
              {language === "uz"
                ? "Shahar hayotini osonlashtiruvchi funksiyalar"
                : "Функции, упрощающие городскую жизнь"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {appFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{
                  boxShadow:
                    "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(100, 116, 139, 0.07)",
                }}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color}`}
                ></div>
                <CardHeader className="pt-6 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-300`}
                    style={{
                      boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Smartphone className="h-16 w-16 mx-auto mb-8 opacity-90" />
          <h2 className="text-4xl font-bold mb-6">
            {language === "uz" ? "Ilovani Yuklab Oling" : "Скачайте приложение"}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === "uz"
              ? "Shahar xizmatlaridan qulay foydalanish uchun ilovani hoziroq o'rnatib oling"
              : "Установите приложение сейчас для удобного пользования городскими услугами"}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 rounded-xl"
            >
              <div className="flex items-center space-x-3">
                <PlayCircle className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs opacity-90">
                    {language === "uz" ? "Yuklab oling" : "Скачать в"}
                  </div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 rounded-xl"
            >
              <div className="flex items-center space-x-3">
                <Smartphone className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs opacity-90">
                    {language === "uz" ? "Yuklab oling" : "Скачать в"}
                  </div>
                  <div className="font-semibold">App Store</div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppPage;
