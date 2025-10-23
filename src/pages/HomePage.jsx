import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  AlertCircle,
  BarChart3,
  Building,
  Clock,
  Download,
  Droplet,
  Eye,
  FileText,
  Flame,
  Mail,
  MapPin,
  Phone,
  Settings,
  Shield,
  Smartphone,
  Users,
  Zap,
  TreePine,
  Recycle,
  Car,
  Thermometer,
  Bot,
  Camera,
  Bell,
  Search,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const HomePage = ({ language, translations }) => {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Shikoyat",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      language === "uz"
        ? "Xabaringiz muvaffaqiyatli yuborildi!"
        : "Ваше сообщение успешно отправлено!"
    );
    setFormData({ name: "", email: "", subject: "Shikoyat", message: "" });
  };

  const stats = [
    {
      number: "24/7",
      label: language === "uz" ? "Monitoring" : "Мониторинг",
      icon: Activity,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      number: "1000+",
      label: language === "uz" ? "Sensorlar" : "Датчики",
      icon: Settings,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      number: "50+",
      label: language === "uz" ? "Mahallalar" : "Районы",
      icon: MapPin,
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      number: "99.9%",
      label: language === "uz" ? "Ishonchlilik" : "Надежность",
      icon: Shield,
      gradient: "from-purple-500 to-indigo-600",
    },
  ];

  const systemServices = [
    {
      title: language === "uz" ? "Chiqindi Boshqaruvi" : "Управление отходами",
      description:
        language === "uz"
          ? "GPS orqali mashinalar kuzatuvi"
          : "Мониторинг машин через GPS",
      icon: Recycle,
      color: "text-green-600 bg-green-50",
      features: [
        language === "uz"
          ? "Marshrutlarni optimallashtirish"
          : "Оптимизация маршрутов",
        language === "uz" ? "Jadval nazorati" : "Контроль расписания",
        language === "uz" ? "Hisobotlar va statistika" : "Отчеты и статистика",
      ],
    },
    {
      title:
        language === "uz" ? "Harorat Monitoringi" : "Температурный мониторинг",
      description:
        language === "uz" ? "Maktablar va shifoxonalar" : "Школы и больницы",
      icon: Thermometer,
      color: "text-red-600 bg-red-50",
      features: [
        language === "uz" ? "Maktablar oshxonalari" : "Школьные столовые",
        language === "uz" ? "Bolalar bog'chalari" : "Детские сады",
        language === "uz"
          ? "Avtomatik ogohlantirish"
          : "Автоматические уведомления",
      ],
    },
    {
      title: language === "uz" ? "Fuqarolar Xizmati" : "Служба граждан",
      description:
        language === "uz"
          ? "Murojaat va kuzatuv tizimi"
          : "Система обращений и мониторинга",
      icon: Users,
      color: "text-blue-600 bg-blue-50",
      features: [
        language === "uz" ? "Chaqiruvlarni yozib olish" : "Запись обращений",
        language === "uz" ? "Tezkor javob berish" : "Быстрый ответ",
        language === "uz" ? "Fikr-mulohazalar" : "Отзывы",
      ],
    },
    {
      title: language === "uz" ? "Jamoat Transporti" : "Общественный транспорт",
      description:
        language === "uz"
          ? "Real vaqt kuzatuvi"
          : "Мониторинг в реальном времени",
      icon: Car,
      color: "text-purple-600 bg-purple-50",
      features: [
        language === "uz" ? "Jadval nazorati" : "Контроль расписания",
        language === "uz" ? "Bekatlar ma'lumoti" : "Информация об остановках",
        language === "uz"
          ? "Yo'lovchilar xabarnomasi"
          : "Уведомления пассажиров",
      ],
    },
    {
      title: language === "uz" ? "Yashil Maydonlar" : "Зеленые зоны",
      description:
        language === "uz"
          ? "Avtomatik sug'orish tizimi"
          : "Автоматическая система полива",
      icon: TreePine,
      color: "text-emerald-600 bg-emerald-50",
      features: [
        language === "uz" ? "Namlik sensorlari" : "Датчики влажности",
        language === "uz" ? "Xarita orqali nazorat" : "Контроль через карту",
        language === "uz" ? "Tahlil va hisobotlar" : "Анализ и отчеты",
      ],
    },
    {
      title: language === "uz" ? "AI Tahlillar" : "ИИ Анализ",
      description:
        language === "uz"
          ? "Sun'iy intellekt yordamida"
          : "С помощью искусственного интеллекта",
      icon: Bot,
      color: "text-indigo-600 bg-indigo-50",
      features: [
        language === "uz" ? "Bashoratli tahlil" : "Прогнозный анализ",
        language === "uz" ? "Naqsh aniqlash" : "Распознавание образов",
        language === "uz" ? "Optimallashtirish" : "Оптимизация",
      ],
    },
  ];

  const systemStats = [
    {
      number: "20+",
      label: language === "uz" ? "Axlat mashinalar" : "Мусоровозы",
      icon: Recycle,
    },
    {
      number: "50+",
      label: language === "uz" ? "Harorat sensorlari" : "Датчики температуры",
      icon: Thermometer,
    },
    {
      number: "100+",
      label: language === "uz" ? "Avtobuslar" : "Автобусы",
      icon: Car,
    },
    {
      number: "300+",
      label: language === "uz" ? "Yashil maydonlar" : "Зеленые зоны",
      icon: TreePine,
    },
    {
      number: "4000+",
      label: language === "uz" ? "Oylik chaqiruvlar" : "Ежемесячные обращения",
      icon: Phone,
    },
    {
      number: "95%",
      label:
        language === "uz" ? "Qoniqish darajasi" : "Уровень удовлетворенности",
      icon: Users,
    },
    {
      number: "24/7",
      label: language === "uz" ? "Monitoring" : "Мониторинг",
      icon: Activity,
    },
    {
      number: "97%",
      label: language === "uz" ? "Tizim ishlashi" : "Работа системы",
      icon: Zap,
    },
  ];

  const infrastructureServices = [
    {
      title:
        language === "uz" ? "Suv Ta'minoti Tizimi" : "Система водоснабжения",
      icon: Recycle,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      features: [
        language === "uz" ? "Suv sifati nazorati" : "Контроль качества воды",
        language === "uz" ? "Bosim monitoringi" : "Мониторинг давления",
        language === "uz"
          ? "Sizib chiqishlarni aniqlash"
          : "Обнаружение утечек",
        language === "uz" ? "Iste'mol tahlili" : "Анализ потребления",
      ],
    },
    {
      title:
        language === "uz" ? "Gaz Ta'minoti Tizimi" : "Система газоснабжения",
      icon: Thermometer,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50",
      features: [
        language === "uz" ? "Xavfsizlik nazorati" : "Контроль безопасности",
        language === "uz" ? "Bosim kuzatuvi" : "Мониторинг давления",
        language === "uz"
          ? "Gaz sizib chiqishini aniqlash"
          : "Обнаружение утечек газа",
        language === "uz" ? "Favqulodda vaziyatlar" : "Чрезвычайные ситуации",
      ],
    },
    {
      title: language === "uz" ? "Issiqlik Ta'minoti" : "Теплоснабжение",
      icon: Zap,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-50",
      features: [
        language === "uz" ? "Harorat nazorati" : "Контроль температуры",
        language === "uz" ? "Samaradorlik tahlili" : "Анализ эффективности",
        language === "uz" ? "Texnik xizmat" : "Техническое обслуживание",
        language === "uz" ? "Optimallashtirish" : "Оптимизация",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Government building background image */}
        <img
          src="/xokimlik.jpg"
          alt="Chust xokimlik binosi"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* White blur overlay for readability */}
        <div className="absolute inset-0 backdrop-blur-sm bg-white/40"></div>

        {/* Blue/Indigo gradient tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-500/15 to-cyan-600/20"></div>

        {/* Bottom to top white gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40"></div>

        {/* Animated gradient orbs - reduced opacity for image visibility */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 left-1/3 w-80 h-80 bg-gradient-to-br from-cyan-200/15 to-blue-200/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-200/15 to-purple-200/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Subtle grid pattern with minimal opacity */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        ></div>

        {/* Diagonal lines pattern - very subtle */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(99, 102, 241, 0.03) 35px, rgba(99, 102, 241, 0.03) 70px)`,
          }}
        ></div>

        {/* Top light effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"></div>

        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/20 backdrop-blur-[2px]"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg animate-fadeInDown">
              {language === "uz"
                ? "Raqamli O'zbekiston 2030"
                : "Цифровой Узбекистан 2030"}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-gray-900 tracking-tight animate-fadeInUp delay-100">
              {language === "uz" ? "Chust aqlli shahar" : "Чуст умный город"}
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-700 font-medium animate-fadeInUp delay-200">
              {language === "uz" ? "Boshqaruv Tizimi" : "Система управления"}
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto animate-fadeInUp delay-300">
              {language === "uz"
                ? "Zamonaviy raqamli texnologiyalar asosida shahar infratuzilmasini boshqarish, aholining hayot sifatini yaxshilash va davlat xizmatlarini samarali ko'rsatish tizimi"
                : "Система управления городской инфраструктурой на основе современных цифровых технологий, улучшения качества жизни населения и эффективного предоставления государственных услуг"}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fadeInUp delay-400">
              <Link to="/xizmatlar">
                <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2.5 hover:-translate-y-1 hover:scale-105">
                  <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {language === "uz"
                    ? "Xizmatlarni ko'rish"
                    : "Посмотреть услуги"}
                </button>
              </Link>
              <Link to="/mobil-ilova">
                <button className="group bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2.5 hover:-translate-y-1">
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {language === "uz"
                    ? "Ilovani yuklab olish"
                    : "Скачать приложение"}
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => {
                const cardColors = [
                  {
                    gradient: "from-blue-500 to-cyan-500",
                    iconBg: "from-blue-50 to-cyan-50",
                    iconColor: "text-blue-600",
                    topLine: "from-blue-500 to-cyan-600",
                  },
                  {
                    gradient: "from-purple-500 to-pink-500",
                    iconBg: "from-purple-50 to-pink-50",
                    iconColor: "text-purple-600",
                    topLine: "from-purple-500 to-pink-600",
                  },
                  {
                    gradient: "from-cyan-500 to-teal-500",
                    iconBg: "from-cyan-50 to-teal-50",
                    iconColor: "text-cyan-600",
                    topLine: "from-cyan-500 to-teal-600",
                  },
                  {
                    gradient: "from-indigo-500 to-purple-500",
                    iconBg: "from-indigo-50 to-purple-50",
                    iconColor: "text-indigo-600",
                    topLine: "from-indigo-500 to-purple-600",
                  },
                ];
                const color = cardColors[index % 4];
                const delays = [
                  "delay-100",
                  "delay-200",
                  "delay-300",
                  "delay-400",
                ];

                return (
                  <div
                    key={index}
                    className={`group bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-white/80 relative overflow-hidden hover:-translate-y-2 animate-scaleIn ${delays[index]}`}
                    style={{
                      boxShadow:
                        "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(100, 116, 139, 0.08)",
                    }}
                  >
                    {/* Top gradient line */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color.topLine}`}
                    ></div>

                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/5 to-transparent rounded-2xl pointer-events-none"></div>

                    {/* Icon with 3D effect */}
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color.iconBg} ${color.iconColor} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}
                      style={{
                        boxShadow:
                          "inset 0 2px 6px 0 rgba(255, 255, 255, 0.8), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.08), 0 8px 24px 0 rgba(0, 0, 0, 0.12)",
                      }}
                    >
                      <div className="relative">
                        <stat.icon className="h-9 w-9" />
                        {/* Icon glow effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}
                        ></div>
                      </div>
                    </div>

                    {/* Number with gradient text */}
                    <div
                      className={`text-4xl font-bold bg-gradient-to-r ${color.gradient} bg-clip-text text-transparent text-center mb-3 relative z-10 group-hover:scale-110 transition-all duration-300`}
                    >
                      {stat.number}
                    </div>

                    {/* Label with better typography */}
                    <div className="text-sm font-semibold text-gray-700 text-center relative z-10 tracking-wide uppercase">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-5 px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              {language === "uz" ? "Ma'lumot" : "Информация"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900">
              {language === "uz" ? "Loyiha Haqida" : "О проекте"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === "uz"
                ? '"Chust aqlli shahar" tizimi O\'zbekiston Respublikasi Prezidentining "Raqamli O\'zbekiston - 2030" strategiyasi doirasida amalga oshirilayotgan yirik loyihadir.'
                : 'Система "Чуст умный город" - крупный проект в рамках стратегии "Цифровой Узбекистан - 2030" Президента Республики Узбекистан.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 hover:border-blue-200/50 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden hover:-translate-y-1"
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(31, 38, 135, 0.07)",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardHeader className="pb-4 pt-8">
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
                >
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle className="text-center text-xl font-bold text-gray-900">
                  {language === "uz" ? "Maqsad" : "Цель"}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-8">
                <p className="text-gray-600 text-center leading-relaxed">
                  {language === "uz"
                    ? "Shahar infratuzilmasini raqamlashtirish va aholining hayot sifatini yaxshilash"
                    : "Цифровизация городской инфраструктуры и улучшение качества жизни населения"}
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 hover:border-green-200/50 shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden hover:-translate-y-1"
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(34, 197, 94, 0.08)",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 253, 244, 0.9) 100%)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <div className="absolute top-5 right-5">
                <Badge className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold">
                  {language === "uz" ? "Asosiy" : "Основное"}
                </Badge>
              </div>
              <CardHeader className="pb-4 pt-8">
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center text-green-600 group-hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
                >
                  <Settings className="h-8 w-8" />
                </div>
                <CardTitle className="text-center text-xl font-bold text-gray-900">
                  {language === "uz" ? "Vazifa" : "Задача"}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-8">
                <p className="text-gray-600 text-center leading-relaxed">
                  {language === "uz"
                    ? 'Zamonaviy "Chust aqlli shahar" standartlariga mos keluvchi raqamli ekotizim yaratish'
                    : 'Создание цифровой экосистемы, соответствующей стандартам современного "умного города Чуст"'}
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 hover:border-purple-200/50 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden hover:-translate-y-1"
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(168, 85, 247, 0.07)",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 245, 255, 0.9) 100%)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <CardHeader className="pb-4 pt-8">
                <div
                  className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
                >
                  <Shield className="h-8 w-8" />
                </div>
                <CardTitle className="text-center text-xl font-bold text-gray-900">
                  {language === "uz" ? "Qiymatlar" : "Ценности"}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-8">
                <p className="text-gray-600 text-center leading-relaxed">
                  {language === "uz"
                    ? "Shaffoflik, samaradorlik va aholining ehtiyojlarini birinchi o'ringa qo'yish"
                    : "Прозрачность, эффективность и приоритет потребностей населения"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-green-100 hover:bg-green-200 text-green-700 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium transition-colors text-xs sm:text-sm">
              {language === "uz" ? "Xizmatlar" : "Услуги"}
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 px-4">
              {language === "uz" ? "Tizim Xizmatlari" : "Системные услуги"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto px-4">
              {language === "uz"
                ? "Shahar hayotini yaxshilash uchun keng qamrovli raqamli yechimlar"
                : "Комплексные цифровые решения для улучшения городской жизни"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemServices.map((service, index) => {
              const cardWatermarks = [
                {
                  watermark: (
                    <svg
                      className="absolute -top-3 -right-3 w-32 h-32 opacity-[0.06]"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32 8L16 24h8v16h16V24h8L32 8zm-12 36c-2.2 0-4 1.8-4 4s1.8 4 4 4h24c2.2 0 4-1.8 4-4s-1.8-4-4-4H20z"
                        stroke="rgba(34, 197, 94, 0.2)"
                        strokeWidth="1.5"
                        fill="rgba(34, 197, 94, 0.08)"
                      />
                    </svg>
                  ),
                },
                {
                  watermark: (
                    <svg
                      className="absolute -top-3 -right-3 w-32 h-32 opacity-[0.06]"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32 8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8c0-2.2-1.8-4-4-4zm-16 16c-2.2 0-4 1.8-4 4s1.8 4 4 4h8c2.2 0 4-1.8 4-4s-1.8-4-4-4h-8zm24 0c-2.2 0-4 1.8-4 4s1.8 4 4 4h8c2.2 0 4-1.8 4-4s-1.8-4-4-4h-8zM32 36c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8c0-2.2-1.8-4-4-4z"
                        stroke="rgba(239, 68, 68, 0.2)"
                        strokeWidth="1.5"
                        fill="rgba(239, 68, 68, 0.08)"
                      />
                    </svg>
                  ),
                },
                {
                  watermark: (
                    <svg
                      className="absolute -top-3 -right-3 w-32 h-32 opacity-[0.06]"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32 8C20 8 10 18 10 30s10 22 22 22 22-10 22-22S44 8 32 8zm0 4c10 0 18 8 18 18s-8 18-18 18-18-8-18-18 8-18 18-18zm-4 10c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2s2-.9 2-2V24c0-1.1-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2s2-.9 2-2V24c0-1.1-.9-2-2-2z"
                        stroke="rgba(59, 130, 246, 0.2)"
                        strokeWidth="1.5"
                        fill="rgba(59, 130, 246, 0.08)"
                      />
                    </svg>
                  ),
                },
                {
                  watermark: (
                    <svg
                      className="absolute -top-3 -right-3 w-32 h-32 opacity-[0.06]"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12c-4.4 0-8 3.6-8 8v24c0 4.4 3.6 8 8 8h24c4.4 0 8-3.6 8-8V20c0-4.4-3.6-8-8-8H20zm0 4h24c2.2 0 4 1.8 4 4v4H16v-4c0-2.2 1.8-4 4-4zm-4 12h32v16c0 2.2-1.8 4-4 4H20c-2.2 0-4-1.8-4-4V28zm8 4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-4z"
                        stroke="rgba(168, 85, 247, 0.2)"
                        strokeWidth="1.5"
                        fill="rgba(168, 85, 247, 0.08)"
                      />
                    </svg>
                  ),
                },
                {
                  watermark: (
                    <svg
                      className="absolute -top-3 -right-3 w-32 h-32 opacity-[0.06]"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32 8c-1.7 0-3.3.4-4.7 1.2l-16 9.2c-2.8 1.6-4.7 4.7-4.7 8v18.4c0 3.3 1.9 6.4 4.7 8l16 9.2c1.4.8 3 1.2 4.7 1.2s3.3-.4 4.7-1.2l16-9.2c2.8-1.6 4.7-4.7 4.7-8V26.4c0-3.3-1.9-6.4-4.7-8l-16-9.2C35.3 8.4 33.7 8 32 8zm0 4c.8 0 1.6.2 2.4.6l16 9.2c1.4.8 2.4 2.4 2.4 4v18.4c0 1.6-1 3.2-2.4 4l-16 9.2c-.8.4-1.6.6-2.4.6s-1.6-.2-2.4-.6l-16-9.2c-1.4-.8-2.4-2.4-2.4-4V25.8c0-1.6 1-3.2 2.4-4l16-9.2c.8-.4 1.6-.6 2.4-.6z"
                        stroke="rgba(16, 185, 129, 0.2)"
                        strokeWidth="1.5"
                        fill="rgba(16, 185, 129, 0.08)"
                      />
                    </svg>
                  ),
                },
                {
                  watermark: (
                    <svg
                      className="absolute -top-3 -right-3 w-32 h-32 opacity-[0.06]"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32 8C20 8 10 18 10 30c0 6 2.4 11.5 6.3 15.5L32 56l15.7-10.5C51.6 41.5 54 36 54 30c0-12-10-22-22-22zm0 8c7.7 0 14 6.3 14 14 0 3.9-1.6 7.4-4.2 10L32 46.8l-9.8-6.8C19.6 37.4 18 33.9 18 30c0-7.7 6.3-14 14-14zm-4 8v8h8v-8h-8z"
                        stroke="rgba(99, 102, 241, 0.2)"
                        strokeWidth="1.5"
                        fill="rgba(99, 102, 241, 0.08)"
                      />
                    </svg>
                  ),
                },
              ];

              return (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    boxShadow:
                      "inset 0 1px 2px rgba(0,0,0,0.02), 0 4px 16px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                  {cardWatermarks[index].watermark}

                  <CardHeader className="pb-4 pt-6 relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
                      }}
                    >
                      <service.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-lg font-bold mb-2 text-gray-900">
                      {service.title}
                    </CardTitle>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0 px-6 pb-6 relative z-10">
                    <ul className="space-y-2.5">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-3 sm:mb-4 px-4 sm:px-5 py-1.5 sm:py-2 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm font-medium">
              {language === "uz" ? "Statistika" : "Статистика"}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 px-4">
              {language === "uz" ? "Tizim Statistikasi" : "Статистика системы"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              {language === "uz"
                ? "Hozirgi vaqtda tizim orqali boshqarilayotgan ko'rsatkichlar"
                : "Текущие показатели, управляемые через систему"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
            {systemStats.map((stat, index) => {
              const colors = [
                {
                  bg: "bg-gradient-to-br from-red-50 to-red-100/50",
                  icon: "text-red-600",
                  iconBg: "bg-white",
                  watermark: (
                    <path
                      d="M32 8C20.4 8 11 17.4 11 29c0 6.2 2.7 11.8 7 15.7V56l14-7 14 7V44.7c4.3-3.9 7-9.5 7-15.7C53 17.4 43.6 8 32 8zm0 4c9.4 0 17 7.6 17 17s-7.6 17-17 17-17-7.6-17-17 7.6-17 17-17zm-6 11v14l6-3.5 6 3.5V23h-12z"
                      stroke="rgba(239, 68, 68, 0.15)"
                      strokeWidth="1"
                      fill="rgba(239, 68, 68, 0.08)"
                    />
                  ),
                },
                {
                  bg: "bg-gradient-to-br from-orange-50 to-orange-100/50",
                  icon: "text-orange-600",
                  iconBg: "bg-white",
                  watermark: (
                    <path
                      d="M32 8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8c0-2.2-1.8-4-4-4zm-16 16c-2.2 0-4 1.8-4 4s1.8 4 4 4h8c2.2 0 4-1.8 4-4s-1.8-4-4-4h-8zm24 0c-2.2 0-4 1.8-4 4s1.8 4 4 4h8c2.2 0 4-1.8 4-4s-1.8-4-4-4h-8zM32 36c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8c0-2.2-1.8-4-4-4z"
                      stroke="rgba(249, 115, 22, 0.15)"
                      strokeWidth="1"
                      fill="rgba(249, 115, 22, 0.08)"
                    />
                  ),
                },
                {
                  bg: "bg-gradient-to-br from-green-50 to-green-100/50",
                  icon: "text-green-600",
                  iconBg: "bg-white",
                  watermark: (
                    <path
                      d="M28 8L16 24h8v16h8V24h8L28 8zm-12 36c-2.2 0-4 1.8-4 4s1.8 4 4 4h24c2.2 0 4-1.8 4-4s-1.8-4-4-4H16z"
                      stroke="rgba(34, 197, 94, 0.15)"
                      strokeWidth="1"
                      fill="rgba(34, 197, 94, 0.08)"
                    />
                  ),
                },
                {
                  bg: "bg-gradient-to-br from-cyan-50 to-cyan-100/50",
                  icon: "text-cyan-600",
                  iconBg: "bg-white",
                  watermark: (
                    <path
                      d="M32 8C20 8 10 18 10 30s10 22 22 22 22-10 22-22S44 8 32 8zm0 4c10 0 18 8 18 18s-8 18-18 18-18-8-18-18 8-18 18-18zm-8 12v12l10-6-10-6z"
                      stroke="rgba(6, 182, 212, 0.15)"
                      strokeWidth="1"
                      fill="rgba(6, 182, 212, 0.08)"
                    />
                  ),
                },
                {
                  bg: "bg-gradient-to-br from-blue-50 to-blue-100/50",
                  icon: "text-blue-600",
                  iconBg: "bg-white",
                  watermark: (
                    <path
                      d="M20 12c-4.4 0-8 3.6-8 8v24c0 4.4 3.6 8 8 8h24c4.4 0 8-3.6 8-8V20c0-4.4-3.6-8-8-8H20zm0 4h24c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4H20c-2.2 0-4-1.8-4-4V20c0-2.2 1.8-4 4-4zm6 8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H26zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2h12c1.1 0 2-.9 2-2s-.9-2-2-2H26z"
                      stroke="rgba(59, 130, 246, 0.15)"
                      strokeWidth="1"
                      fill="rgba(59, 130, 246, 0.08)"
                    />
                  ),
                },
                {
                  bg: "bg-gradient-to-br from-purple-50 to-purple-100/50",
                  icon: "text-purple-600",
                  iconBg: "bg-white",
                  watermark: (
                    <path
                      d="M32 8C20 8 10 18 10 30s10 22 22 22 22-10 22-22S44 8 32 8zm0 4c10 0 18 8 18 18s-8 18-18 18-18-8-18-18 8-18 18-18zm-4 10c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2s2-.9 2-2V24c0-1.1-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2s2-.9 2-2V24c0-1.1-.9-2-2-2z"
                      stroke="rgba(168, 85, 247, 0.15)"
                      strokeWidth="1"
                      fill="rgba(168, 85, 247, 0.08)"
                    />
                  ),
                },
                {
                  bg: "bg-gradient-to-br from-pink-50 to-pink-100/50",
                  icon: "text-pink-600",
                  iconBg: "bg-white",
                  watermark: (
                    <path
                      d="M32 10C26 10 21 15 21 21c0 3 1.2 5.7 3.2 7.7L32 36.6l7.8-7.9C41.8 26.7 43 24 43 21c0-6-5-11-11-11zm0 4c3.9 0 7 3.1 7 7 0 1.8-.7 3.5-2 4.8L32 31.2l-5-5.4C25.7 24.5 25 22.8 25 21c0-3.9 3.1-7 7-7zm0 28L16 56h32L32 42z"
                      stroke="rgba(236, 72, 153, 0.15)"
                      strokeWidth="1"
                      fill="rgba(236, 72, 153, 0.08)"
                    />
                  ),
                },
                {
                  bg: "bg-gradient-to-br from-indigo-50 to-indigo-100/50",
                  icon: "text-indigo-600",
                  iconBg: "bg-white",
                  watermark: (
                    <path
                      d="M32 8l-4 8-8 1.2 5.8 5.6L24 31l8-4.2 8 4.2-1.8-8.2L44 17.2l-8-1.2L32 8zm0 20c-6.6 0-12 5.4-12 12v12h24V40c0-6.6-5.4-12-12-12z"
                      stroke="rgba(99, 102, 241, 0.15)"
                      strokeWidth="1"
                      fill="rgba(99, 102, 241, 0.08)"
                    />
                  ),
                },
              ];
              return (
                <div
                  key={index}
                  className={`${colors[index].bg} backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-lg group relative overflow-hidden cursor-pointer border border-white/30`}
                  style={{
                    transform: "perspective(800px) rotateX(0deg)",
                    transition: "all 0.35s cubic-bezier(.2,.9,.3,1)",
                    boxShadow:
                      "inset 0 1px 4px rgba(0,0,0,0.02), 0 6px 18px rgba(0,0,0,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(800px) rotateX(2deg) translateY(-6px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(800px) rotateX(0deg) translateY(0)";
                  }}
                >
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-400 bg-gradient-to-br from-white/40 via-white/10 to-transparent pointer-events-none"></div>
                  <svg
                    aria-hidden="true"
                    className="absolute -top-4 -right-4 w-32 h-32 opacity-[0.12] pointer-events-none"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {colors[index].watermark}
                  </svg>
                  <div
                    className={`${colors[index].iconBg} w-14 h-14 rounded-2xl ${colors[index].icon} flex items-center justify-center mx-auto mb-4 shadow-sm transition-all duration-300 relative z-10`}
                    style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)" }}
                    aria-hidden="false"
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 relative z-10">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-700 text-center relative z-10">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1 sm:py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-xs sm:text-sm font-medium">
              {language === "uz" ? "Infratuzilma" : "Инфраструктура"}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 px-4">
              {language === "uz"
                ? "Shahar Infratuzilmasi"
                : "Городская инфраструктура"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              {language === "uz"
                ? "Kommunal xizmatlar va infratuzilma obyektlarining to'liq monitoringi"
                : "Полный мониторинг коммунальных услуг и объектов инфраструктуры"}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {infrastructureServices.map((service, index) => {
              const cardColors = [
                {
                  topLine: "from-blue-500 to-cyan-600",
                  iconBg: "from-blue-50 to-cyan-50",
                  iconColor: "text-blue-600",
                },
                {
                  topLine: "from-green-500 to-emerald-600",
                  iconBg: "from-green-50 to-emerald-50",
                  iconColor: "text-green-600",
                },
                {
                  topLine: "from-purple-500 to-pink-600",
                  iconBg: "from-purple-50 to-pink-50",
                  iconColor: "text-purple-600",
                },
              ];
              const color = cardColors[index];
              const IconComponent = service.icon;

              return (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/40 relative overflow-hidden group"
                  style={{
                    boxShadow:
                      "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(100, 116, 139, 0.07)",
                  }}
                >
                  {/* Top gradient line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color.topLine}`}
                  ></div>

                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>

                  <div className="relative z-10">
                    {/* Icon with glassmorphism */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color.iconBg} ${color.iconColor} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
                      style={{
                        boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-bold mb-5 text-gray-900">
                      {service.title}
                    </h3>

                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <CheckCircle2
                            className={`w-5 h-5 ${color.iconColor} flex-shrink-0 mt-0.5`}
                          />
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3.5 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                      <span>
                        {language === "uz" ? "Batafsil" : "Подробнее"}
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 px-4">
              {language === "uz" ? "Xabar Yuborish" : "Отправить сообщение"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-4">
              {language === "uz"
                ? "Savollar va takliflar uchun biz bilan bog'laning"
                : "Свяжитесь с нами по вопросам и предложениям"}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">
                    {language === "uz" ? "Ism Familiya" : "ФИО"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={
                      language === "uz"
                        ? "Ismingizni kiriting"
                        : "Введите ваше имя"
                    }
                    required
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-900 mb-2 block">
                    {language === "uz"
                      ? "Elektron pochta"
                      : "Электронная почта"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    required
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-900 mb-2 block">
                  {language === "uz" ? "Mavzu" : "Тема"}
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-gray-900 appearance-none cursor-pointer"
                >
                  <option value="Shikoyat">
                    {language === "uz" ? "Shikoyat" : "Жалоба"}
                  </option>
                  <option value="Taklif">
                    {language === "uz" ? "Taklif" : "Предложение"}
                  </option>
                  <option value="Savol">
                    {language === "uz" ? "Savol" : "Вопрос"}
                  </option>
                  <option value="Rahmat">
                    {language === "uz" ? "Rahmat" : "Благодарность"}
                  </option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-900 mb-2 block">
                  {language === "uz" ? "Xabar matni" : "Текст сообщения"}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={
                    language === "uz"
                      ? "Xabaringizni yozing..."
                      : "Напишите ваше сообщение..."
                  }
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all resize-none text-gray-900 placeholder-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-all font-medium flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <Mail className="w-5 h-5" />
                {language === "uz" ? "Xabar Yuborish" : "Отправить сообщение"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
