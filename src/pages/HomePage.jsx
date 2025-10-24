import { useState, useEffect, useRef } from "react";
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
  Wifi,
  Cpu,
  Database,
  TrendingUp,
  Gauge,
  Globe,
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
import {
  generateDynamicStats,
  formatStatValue,
  UPDATE_INTERVAL,
} from "../utils/dynamicStats";

const HomePage = ({ language, translations }) => {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Shikoyat",
    message: "",
  });

  // Counter animation state for hero stats
  const [heroStats, setHeroStats] = useState({
    sensors: 0,
    services: 0,
    efficiency: 0,
  });
  const [heroAnimated, setHeroAnimated] = useState(false);
  const heroStatsRef = useRef(null);

  // Counter animation state for system stats
  const [systemStatsValues, setSystemStatsValues] = useState({
    trucks: 0,
    sensors: 0,
    buses: 0,
    parks: 0,
    calls: 0,
    satisfaction: 0,
    uptime: 0,
    efficiency: 0,
  });
  const [systemStatsAnimated, setSystemStatsAnimated] = useState(false);
  const systemStatsRef = useRef(null);

  // Counter animation state for system performance
  const [counts, setCounts] = useState({ system: 0, network: 0, uptime: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Dynamic statistics state
  const [dynamicStats, setDynamicStats] = useState(generateDynamicStats());

  // Update statistics every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicStats(generateDynamicStats());
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Hero stats animation (asta-sekin, yoqimli)
  const animateHeroCounters = () => {
    const targetValues = {
      sensors: dynamicStats.sensors,
      services: dynamicStats.services,
      efficiency: dynamicStats.efficiency,
    };
    const duration = 3500; // 3.5 seconds - sekinroq

    Object.keys(targetValues).forEach((key) => {
      let currentValue = 0;
      const targetValue = targetValues[key];
      const startTime = Date.now();

      const animate = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Easing function - asta boshlanadi, tez o'rtada, asta tugaydi
        const easeInOutQuart = (t) => {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        };

        const easedProgress = easeInOutQuart(progress);
        currentValue = targetValue * easedProgress;

        setHeroStats((prev) => ({ ...prev, [key]: Math.round(currentValue) }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  };

  // System stats animation (asta-sekin, yoqimli)
  const animateSystemStats = () => {
    const targetValues = {
      trucks: 20,
      sensors: 50,
      buses: 100,
      parks: 300,
      calls: 4000,
      satisfaction: 95,
      uptime: 24,
      efficiency: 97,
    };
    const duration = 3500; // 3.5 seconds - sekinroq

    Object.keys(targetValues).forEach((key) => {
      let currentValue = 0;
      const targetValue = targetValues[key];
      const startTime = Date.now();

      const animate = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Easing function - asta boshlanadi, tez o'rtada, asta tugaydi
        const easeInOutQuart = (t) => {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        };

        const easedProgress = easeInOutQuart(progress);
        currentValue = targetValue * easedProgress;

        setSystemStatsValues((prev) => ({
          ...prev,
          [key]: Math.round(currentValue),
        }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  };

  // System performance animation (asta-sekin, yoqimli)
  const animateCounters = () => {
    const targetValues = { system: 75, network: 67, uptime: 83 };
    const duration = 3000; // 3 seconds - sekinroq

    Object.keys(targetValues).forEach((key) => {
      let currentValue = 0;
      const targetValue = targetValues[key];
      const startTime = Date.now();

      const animate = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // Easing function - asta boshlanadi, tez o'rtada, asta tugaydi
        const easeInOutQuart = (t) => {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        };

        const easedProgress = easeInOutQuart(progress);
        currentValue = targetValue * easedProgress;

        setCounts((prev) => ({ ...prev, [key]: Math.round(currentValue) }));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    });
  };

  // Intersection Observer for hero stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !heroAnimated) {
            setHeroAnimated(true);
            animateHeroCounters();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroStatsRef.current) {
      observer.observe(heroStatsRef.current);
    }

    return () => {
      if (heroStatsRef.current) {
        observer.unobserve(heroStatsRef.current);
      }
    };
  }, [heroAnimated, dynamicStats]);

  // Intersection observer for system statistics animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !systemStatsAnimated) {
            setSystemStatsAnimated(true);
            animateSystemStats();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (systemStatsRef.current) {
      observer.observe(systemStatsRef.current);
    }

    return () => {
      if (systemStatsRef.current) {
        observer.unobserve(systemStatsRef.current);
      }
    };
  }, [systemStatsAnimated]);

  // Intersection Observer for system performance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

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
      status: "online",
      description:
        language === "uz" ? "Uzluksiz kuzatuv" : "Непрерывное наблюдение",
    },
    {
      number: formatStatValue(heroStats.sensors || 0, "plus"),
      label: language === "uz" ? "Sensorlar" : "Датчики",
      icon: Wifi,
      gradient: "from-green-500 to-emerald-600",
      status: "active",
      description: language === "uz" ? "Faol sensorlar" : "Активные датчики",
    },
    {
      number: formatStatValue(heroStats.services || 0, "plus"),
      label: language === "uz" ? "Xizmatlar" : "Услуги",
      icon: Globe,
      gradient: "from-yellow-500 to-orange-600",
      status: "available",
      description: language === "uz" ? "Mavjud xizmatlar" : "Доступные услуги",
    },
    {
      number: formatStatValue(heroStats.efficiency || 0, "percentage"),
      label: language === "uz" ? "Samaradorlik" : "Эффективность",
      icon: TrendingUp,
      gradient: "from-purple-500 to-indigo-600",
      status: "optimal",
      description:
        language === "uz" ? "Tizim samaradorligi" : "Эффективность системы",
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
      number: `${systemStatsValues.trucks}+`,
      label: language === "uz" ? "Axlat mashinalar" : "Мусоровозы",
      icon: Recycle,
    },
    {
      number: `${systemStatsValues.sensors}+`,
      label: language === "uz" ? "Harorat sensorlari" : "Датчики температуры",
      icon: Thermometer,
    },
    {
      number: `${systemStatsValues.buses}+`,
      label: language === "uz" ? "Avtobuslar" : "Автобусы",
      icon: Car,
    },
    {
      number: `${systemStatsValues.parks}+`,
      label: language === "uz" ? "Yashil maydonlar" : "Зеленые зоны",
      icon: TreePine,
    },
    {
      number: `${systemStatsValues.calls}+`,
      label: language === "uz" ? "Oylik chaqiruvlar" : "Ежемесячные обращения",
      icon: Phone,
    },
    {
      number: `${systemStatsValues.satisfaction}%`,
      label:
        language === "uz" ? "Qoniqish darajasi" : "Уровень удовлетворенности",
      icon: Users,
    },
    {
      number: `${systemStatsValues.uptime}/7`,
      label: language === "uz" ? "Monitoring" : "Мониторинг",
      icon: Activity,
    },
    {
      number: `${systemStatsValues.efficiency}%`,
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-5 py-2 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-full shadow-lg animate-fadeInDown">
              {language === "uz"
                ? "Raqamli O'zbekiston 2030"
                : "Цифровой Узбекистан 2030"}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-5 text-gray-900 tracking-tight animate-fadeInUp delay-100 leading-tight">
              {language === "uz" ? "Chust aqlli shahar" : "Чуст умный город"}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-gray-700 font-medium animate-fadeInUp delay-200">
              {language === "uz" ? "Boshqaruv Tizimi" : "Система управления"}
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto animate-fadeInUp delay-300 px-2 sm:px-0">
              {language === "uz"
                ? "Zamonaviy raqamli texnologiyalar asosida shahar infratuzilmasini boshqarish, aholining hayot sifatini yaxshilash va davlat xizmatlarini samarali ko'rsatish tizimi"
                : "Система управления городской инфраструктурой на основе современных цифровых технологий, улучшения качества жизни населения и эффективного предоставления государственных услуг"}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 animate-fadeInUp delay-400 px-4 sm:px-0">
              <Link to="/xizmatlar" className="w-full sm:w-auto">
                <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 hover:-translate-y-1 hover:scale-105 w-full text-sm sm:text-base">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  {language === "uz"
                    ? "Xizmatlarni ko'rish"
                    : "Посмотреть услуги"}
                </button>
              </Link>
              <Link to="/mobil-ilova" className="w-full sm:w-auto">
                <button className="group bg-white hover:bg-gray-50 text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-400 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2.5 hover:-translate-y-1 w-full text-sm sm:text-base">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  {language === "uz"
                    ? "Ilovani yuklab olish"
                    : "Скачать приложение"}
                </button>
              </Link>
            </div>
            <div
              ref={heroStatsRef}
              className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto px-2 sm:px-0"
            >
              {stats.map((stat, index) => {
                const delays = [
                  "delay-100",
                  "delay-200",
                  "delay-300",
                  "delay-400",
                ];

                const gradients = [
                  "from-blue-500/20 to-cyan-500/20",
                  "from-green-500/20 to-emerald-500/20",
                  "from-yellow-500/20 to-orange-500/20",
                  "from-purple-500/20 to-indigo-500/20",
                ];

                const iconColors = [
                  "text-blue-600 group-hover:text-blue-700",
                  "text-green-600 group-hover:text-green-700",
                  "text-yellow-600 group-hover:text-orange-700",
                  "text-purple-600 group-hover:text-indigo-700",
                ];

                const borderColors = [
                  "hover:border-blue-300",
                  "hover:border-green-300",
                  "hover:border-orange-300",
                  "hover:border-purple-300",
                ];

                return (
                  <div
                    key={index}
                    className={`group cursor-pointer bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 ${borderColors[index]} relative overflow-hidden hover:-translate-y-1 sm:hover:-translate-y-2 animate-scaleIn ${delays[index]} hover:scale-105`}
                  >
                    {/* Animated gradient background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                    ></div>

                    {/* Top gradient line with animation */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} group-hover:h-2 transition-all duration-300`}
                    ></div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                      <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                      <div className="absolute top-8 right-6 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
                      <div className="absolute bottom-6 left-6 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
                    </div>

                    {/* Glass overlay with enhanced effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-3xl pointer-events-none group-hover:from-white/50"></div>

                    {/* Icon with enhanced design */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-white group-hover:to-gray-50 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 transition-all duration-500 relative z-10 group-hover:rotate-6 group-hover:scale-110">
                      <stat.icon
                        className={`h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 ${iconColors[index]} transition-all duration-500 group-hover:scale-110`}
                      />
                    </div>

                    {/* Number with enhanced typography and counter animation */}
                    <div
                      className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 text-center mb-1 sm:mb-2 relative z-10 transition-all duration-500 group-hover:scale-110 tracking-tight`}
                    >
                      <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                        {stat.number}
                      </span>
                      {/* Live update indicator */}
                      <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Mini progress visualization */}
                    <div className="flex justify-center mb-1 sm:mb-2 space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-0.5 sm:w-1 h-4 sm:h-6 bg-gradient-to-t ${stat.gradient} rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700`}
                          style={{ transitionDelay: `${i * 100}ms` }}
                        ></div>
                      ))}
                    </div>

                    {/* Label with improved design */}
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 text-center relative z-10 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                      {stat.label}
                    </div>

                    {/* Real-time status indicator with pulse */}
                    <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 flex items-center space-x-0.5 sm:space-x-1">
                      <div
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                          stat.status === "online"
                            ? "bg-green-400"
                            : stat.status === "active"
                            ? "bg-blue-400"
                            : stat.status === "available"
                            ? "bg-yellow-400"
                            : "bg-purple-400"
                        } animate-pulse`}
                      ></div>
                      <div
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                          stat.status === "online"
                            ? "bg-green-300"
                            : stat.status === "active"
                            ? "bg-blue-300"
                            : stat.status === "available"
                            ? "bg-yellow-300"
                            : "bg-purple-300"
                        } opacity-70 animate-pulse delay-150`}
                      ></div>
                    </div>

                    {/* Tooltip description */}
                    <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 sm:px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 max-w-32 sm:max-w-none text-center">
                      {stat.description}
                      <div className="absolute -top-0.5 sm:-top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rotate-45"></div>
                    </div>

                    {/* Data flow animation */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
                      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping delay-300"></div>
                      <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"></div>
                    </div>

                    {/* Progress bar at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-3xl overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${stat.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Smart City Real-time Dashboard */}
          <div className="max-w-6xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <div className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                <Cpu className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>
                  {language === "uz"
                    ? "Real-vaqt Ma'lumotlar"
                    : "Данные в реальном времени"}
                </span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 px-4">
                {language === "uz"
                  ? "Aqlli Shahar Boshqaruvi"
                  : "Управление умным городом"}
              </h2>
            </div>

            {/* Real-time Data Grid */}
            <div
              ref={statsRef}
              className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12"
            >
              {/* System Performance */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 glow-border">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                      {language === "uz"
                        ? "Tizim Ishlashi"
                        : "Производительность"}
                    </span>
                  </div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">
                      CPU
                    </span>
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-2000 ease-in-out"
                          style={{ width: `${counts.system}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium">
                        {counts.system}%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">
                      Memory
                    </span>
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-2000 ease-in-out"
                          style={{ width: `${counts.network}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium">
                        {counts.network}%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600">
                      Network
                    </span>
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-2000 ease-in-out"
                          style={{ width: `${counts.uptime}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium">
                        {counts.uptime}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Connections */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 glow-border">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                      {language === "uz"
                        ? "Faol Ulanishlar"
                        : "Активные подключения"}
                    </span>
                  </div>
                  <div className="flex space-x-0.5 sm:space-x-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse delay-150"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-green-600 mb-1 sm:mb-2">
                    1,247
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                    Onlayn foydalanuvchilar
                  </div>
                  <div className="flex justify-center space-x-2 sm:space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
                      <span>Desktop: 892</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
                      <span>Mobile: 355</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Processing */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 glow-border">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-1.5 sm:space-x-2">
                    <Database className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    <span className="font-semibold text-gray-800 text-sm sm:text-base">
                      {language === "uz" ? "Ma'lumot Oqimi" : "Поток данных"}
                    </span>
                  </div>
                  <div className="text-xs bg-purple-100 text-purple-600 px-1.5 sm:px-2 py-1 rounded-full">
                    LIVE
                  </div>
                </div>
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Sensor ma'lumotlari</span>
                    <span className="font-medium text-purple-600">+2.4k/s</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">API so'rovlari</span>
                    <span className="font-medium text-blue-600">+1.8k/s</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">
                      Foydalanuvchi harakatlari
                    </span>
                    <span className="font-medium text-green-600">+892/s</span>
                  </div>
                  <div className="mt-3 sm:mt-4 h-12 sm:h-16 flex items-end justify-between space-x-0.5 sm:space-x-1">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-t from-purple-400 to-purple-600 rounded-t w-2 sm:w-3 animate-pulse"
                        style={{
                          height: `${30 + Math.random() * 40}%`,
                          animationDelay: `${i * 100}ms`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block mb-3 sm:mb-4 md:mb-5 px-3 sm:px-4 md:px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold">
              {language === "uz" ? "Ma'lumot" : "Информация"}
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 text-gray-900 px-4">
              {language === "uz" ? "Loyiha Haqida" : "О проекте"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              {language === "uz"
                ? '"Chust aqlli shahar" tizimi O\'zbekiston Respublikasi Prezidentining "Raqamli O\'zbekiston - 2030" strategiyasi doirasida amalga oshirilayotgan yirik loyihadir.'
                : 'Система "Чуст умный город" - крупный проект в рамках стратегии "Цифровой Узбекистан - 2030" Президента Республики Узбекистан.'}
            </p>
          </div>

          <div className="grid grid-cols-1 min-[475px]:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <Card
              className="cursor-pointer bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 hover:border-blue-200/50 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden hover:-translate-y-1"
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(31, 38, 135, 0.07)",
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardHeader className="pb-3 sm:pb-4 pt-6 sm:pt-8 px-4 sm:px-6">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 md:mb-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
                >
                  <Eye className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                </div>
                <CardTitle className="text-center text-lg sm:text-xl font-bold text-gray-900 px-2">
                  {language === "uz" ? "Maqsad" : "Цель"}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4 sm:px-6 pb-6 sm:pb-8">
                <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
                  {language === "uz"
                    ? "Shahar infratuzilmasini raqamlashtirish va aholining hayot sifatini yaxshilash"
                    : "Цифровизация городской инфраструктуры и улучшение качества жизни населения"}
                </p>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 hover:border-green-200/50 shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden hover:-translate-y-1"
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
              className="cursor-pointer bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 hover:border-purple-200/50 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden hover:-translate-y-1"
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

          <div className="grid grid-cols-1 min-[375px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
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
                  className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
                  style={{
                    boxShadow:
                      "inset 0 1px 2px rgba(0,0,0,0.02), 0 4px 16px rgba(0,0,0,0.04)",
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                  {cardWatermarks[index].watermark}

                  <CardHeader className="pb-3 sm:pb-4 pt-4 sm:pt-6 px-4 sm:px-6 relative z-10">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${service.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                      style={{
                        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
                      }}
                    >
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <CardTitle className="text-base sm:text-lg font-bold mb-2 text-gray-900">
                      {service.title}
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6 relative z-10">
                    <ul className="space-y-2 sm:space-y-2.5">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-gray-600"
                        >
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>
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

          <div
            ref={systemStatsRef}
            className="grid grid-cols-1 min-[375px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto "
          >
            {systemStats.map((stat, index) => {
              const colors = [
                {
                  bg: "bg-white/90",
                  accent: "from-emerald-500 to-teal-600",
                  icon: "text-emerald-600",
                  iconBg: "bg-gradient-to-br from-emerald-50 to-teal-50",
                  border: "border-2 border-emerald-200/30",
                  glow: "hover:shadow-emerald-500/20",
                },
                {
                  bg: "bg-white/90",
                  accent: "from-amber-500 to-orange-600",
                  icon: "text-amber-600",
                  iconBg: "bg-gradient-to-br from-amber-50 to-orange-50",
                  border: "border-2 border-amber-200/30",
                  glow: "hover:shadow-amber-500/20",
                },
                {
                  bg: "bg-white/90",
                  accent: "from-blue-500 to-cyan-600",
                  icon: "text-blue-600",
                  iconBg: "bg-gradient-to-br from-blue-50 to-cyan-50",
                  border: "border-2 border-blue-200/30",
                  glow: "hover:shadow-blue-500/20",
                },
                {
                  bg: "bg-white/90",
                  accent: "from-green-500 to-lime-600",
                  icon: "text-green-600",
                  iconBg: "bg-gradient-to-br from-green-50 to-lime-50",
                  border: "border-2 border-green-200/30",
                  glow: "hover:shadow-green-500/20",
                },
                {
                  bg: "bg-white/90",
                  accent: "from-violet-500 to-purple-600",
                  icon: "text-violet-600",
                  iconBg: "bg-gradient-to-br from-violet-50 to-purple-50",
                  border: "border-2 border-violet-200/30",
                  glow: "hover:shadow-violet-500/20",
                },
                {
                  bg: "bg-white/90",
                  accent: "from-rose-500 to-pink-600",
                  icon: "text-rose-600",
                  iconBg: "bg-gradient-to-br from-rose-50 to-pink-50",
                  border: "border-2 border-rose-200/30",
                  glow: "hover:shadow-rose-500/20",
                },
                {
                  bg: "bg-white/90",
                  accent: "from-slate-500 to-gray-600",
                  icon: "text-slate-600",
                  iconBg: "bg-gradient-to-br from-slate-50 to-gray-50",
                  border: "border-2 border-slate-200/30",
                  glow: "hover:shadow-slate-500/20",
                },
                {
                  bg: "bg-white/90",
                  accent: "from-indigo-500 to-blue-600",
                  icon: "text-indigo-600",
                  iconBg: "bg-gradient-to-br from-indigo-50 to-blue-50",
                  border: "border-2 border-indigo-200/30",
                  glow: "hover:shadow-indigo-500/20",
                },
              ];
              return (
                <div
                  key={index}
                  className={`${colors[index].bg} ${colors[index].border} ${colors[index].glow} backdrop-blur-lg rounded-3xl p-6 md:p-8 text-center transition-all duration-700 hover:shadow-2xl hover:scale-[1.03] group relative overflow-hidden cursor-pointer`}
                  style={{
                    transform: "perspective(1000px) rotateX(0deg)",
                    transition: "all 0.6s cubic-bezier(.15,.85,.25,1)",
                    boxShadow:
                      "inset 0 2px 8px rgba(255,255,255,0.8), 0 12px 40px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(1000px) rotateX(3deg) translateY(-8px)";
                    e.currentTarget.style.boxShadow = `inset 0 2px 8px rgba(255,255,255,0.9), 0 20px 60px rgba(0,0,0,0.12), 0 8px 30px ${
                      colors[index].glow.includes("emerald")
                        ? "rgba(16, 185, 129, 0.15)"
                        : colors[index].glow.includes("amber")
                        ? "rgba(245, 158, 11, 0.15)"
                        : colors[index].glow.includes("blue")
                        ? "rgba(59, 130, 246, 0.15)"
                        : colors[index].glow.includes("green")
                        ? "rgba(34, 197, 94, 0.15)"
                        : colors[index].glow.includes("violet")
                        ? "rgba(139, 92, 246, 0.15)"
                        : colors[index].glow.includes("rose")
                        ? "rgba(244, 63, 94, 0.15)"
                        : colors[index].glow.includes("slate")
                        ? "rgba(100, 116, 139, 0.15)"
                        : "rgba(99, 102, 241, 0.15)"
                    }`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "perspective(1000px) rotateX(0deg) translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "inset 0 2px 8px rgba(255,255,255,0.8), 0 12px 40px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.04)";
                  }}
                >
                  {/* Accent gradient line - top */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors[index].accent} rounded-t-3xl opacity-60`}
                  ></div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute top-4 right-6 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute bottom-6 left-4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                  </div>

                  {/* Premium icon container */}
                  <div className="relative mb-6 flex justify-center">
                    {/* Background decorative rings */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-24 h-24 rounded-full bg-gradient-to-r ${colors[index].accent} opacity-10 animate-pulse`}
                      ></div>
                      <div
                        className={`absolute w-28 h-28 rounded-full border border-gradient-to-r ${colors[index].accent} opacity-20`}
                      ></div>
                    </div>

                    {/* Main icon box */}
                    <div
                      className={`${colors[index].iconBg} w-20 h-20 rounded-2xl ${colors[index].icon} flex items-center justify-center shadow-md transition-all duration-700 relative z-10 group-hover:scale-105 group-hover:rotate-3 border border-white/50`}
                      style={{
                        boxShadow:
                          "inset 0 2px 6px rgba(255,255,255,0.8), 0 3px 12px rgba(0,0,0,0.06)",
                      }}
                    >
                      <stat.icon className="h-8 w-8 drop-shadow-sm" />

                      {/* Inner accent dot */}
                      <div
                        className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${colors[index].accent} rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>
                    </div>

                    {/* Subtle glow effect */}
                    <div
                      className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${colors[index].accent} opacity-0 group-hover:opacity-15 transition-opacity duration-700 blur-sm`}
                    ></div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-4 relative z-10 transition-all duration-700 group-hover:scale-105">
                    {stat.number}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 text-center relative z-10 leading-relaxed group-hover:text-gray-800 transition-all duration-500 px-2">
                    {stat.label}
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${colors[index].accent} rounded-full transition-all duration-700 group-hover:w-16 opacity-80`}
                  ></div>
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

          <div className="grid grid-cols-1 min-[575px]:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
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

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-4 md:p-5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 min-[375px]:grid-cols-2 gap-4 sm:gap-6">
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
