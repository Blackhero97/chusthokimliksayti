import { useState, useEffect } from "react";
import { BarChart3, TrendingUp, Activity, Zap } from "lucide-react";
import {
  generateDynamicStats,
  formatStatValue,
  UPDATE_INTERVAL,
} from "../utils/dynamicStats";

const StatisticsPage = ({ language }) => {
  // Dynamic statistics state
  const [dynamicStats, setDynamicStats] = useState(generateDynamicStats());

  // Update statistics every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicStats(generateDynamicStats());
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const statsData = [
    {
      category:
        language === "uz" ? "Chiqindi boshqaruvi" : "Управление отходами",
      stats: [
        {
          label: language === "uz" ? "Axlat mashinalar" : "Мусоровозы",
          value: formatStatValue(dynamicStats.wasteVehicles, "plus"),
          icon: "🚛",
        },
        {
          label:
            language === "uz" ? "Kunlik yo'nalishlar" : "Ежедневных маршрутов",
          value: formatStatValue(dynamicStats.dailyRoutes),
          icon: "📍",
        },
        {
          label:
            language === "uz"
              ? "To'plangan chiqindi (tonna)"
              : "Собрано отходов (тонн)",
          value: formatStatValue(dynamicStats.wasteCollected).replace("+", ""),
          icon: "♻️",
        },
        {
          label: language === "uz" ? "Samaradorlik" : "Эффективность",
          value: formatStatValue(dynamicStats.wasteEfficiency, "percentage"),
          icon: "📊",
        },
      ],
    },
    {
      category:
        language === "uz" ? "Harorat monitoringi" : "Температурный мониторинг",
      stats: [
        {
          label:
            language === "uz" ? "Harorat sensorlari" : "Температурных датчиков",
          value: formatStatValue(dynamicStats.temperatureSensors, "plus"),
          icon: "🌡️",
        },
        {
          label: language === "uz" ? "Maktablar" : "Школ",
          value: formatStatValue(dynamicStats.schools),
          icon: "🏫",
        },
        {
          label: language === "uz" ? "Bolalar bog'chalari" : "Детских садов",
          value: formatStatValue(dynamicStats.kindergartens),
          icon: "🎨",
        },
        {
          label:
            language === "uz" ? "Kunlik tekshiruvlar" : "Ежедневных проверок",
          value: formatStatValue(dynamicStats.dailyChecks, "plus"),
          icon: "✅",
        },
      ],
    },
    {
      category:
        language === "uz" ? "Jamoat transporti" : "Общественный транспорт",
      stats: [
        {
          label: language === "uz" ? "Avtobuslar" : "Автобусов",
          value: formatStatValue(dynamicStats.buses),
          icon: "🚌",
        },
        {
          label:
            language === "uz" ? "Yo'lovchilar (kunlik)" : "Пассажиров (в день)",
          value: formatStatValue(dynamicStats.dailyPassengers, "large"),
          icon: "👥",
        },
        {
          label: language === "uz" ? "Marshrutlar" : "Маршрутов",
          value: formatStatValue(dynamicStats.routes),
          icon: "🗺️",
        },
        {
          label: language === "uz" ? "Vaqtida kelish" : "Своевременность",
          value: formatStatValue(dynamicStats.punctuality, "percentage"),
          icon: "⏱️",
        },
      ],
    },
    {
      category: language === "uz" ? "Yashil maydonlar" : "Зеленые зоны",
      stats: [
        {
          label: language === "uz" ? "Yashil maydon (ga)" : "Зеленых зон (га)",
          value: formatStatValue(dynamicStats.greenArea),
          icon: "🌳",
        },
        {
          label: language === "uz" ? "Namlik sensorlari" : "Датчиков влажности",
          value: formatStatValue(dynamicStats.moistureSensors),
          icon: "💧",
        },
        {
          label: language === "uz" ? "Suv tejash" : "Экономия воды",
          value: formatStatValue(dynamicStats.waterSaving, "percentage"),
          icon: "💰",
        },
        {
          label: language === "uz" ? "Avtomatik sug'orish" : "Автополив",
          value: dynamicStats.autoIrrigation,
          icon: "🔄",
        },
      ],
    },
    {
      category: language === "uz" ? "Fuqarolar xizmati" : "Служба граждан",
      stats: [
        {
          label: language === "uz" ? "Oylik qo'ng'iroqlar" : "Звонков в месяц",
          value: formatStatValue(dynamicStats.monthlyCalls, "large"),
          icon: "📞",
        },
        {
          label:
            language === "uz" ? "Hal qilingan muammolar" : "Решенных проблем",
          value: formatStatValue(dynamicStats.solvedProblems, "percentage"),
          icon: "✓",
        },
        {
          label:
            language === "uz" ? "O'rtacha javob vaqti" : "Среднее время ответа",
          value: dynamicStats.responseTime,
          icon: "⏰",
        },
        {
          label:
            language === "uz"
              ? "Qoniqish darajasi"
              : "Уровень удовлетворенности",
          value: formatStatValue(dynamicStats.satisfaction, "percentage"),
          icon: "😊",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-20 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-cyan-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-5 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg animate-fadeInDown">
              {language === "uz" ? "Statistika" : "Статистика"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900 animate-fadeInUp delay-100">
              {language === "uz" ? "Tizim Statistikasi" : "Статистика системы"}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
              {language === "uz"
                ? "Aqlli shahar tizimi orqali boshqarilayotgan barcha xizmatlarning real vaqt statistikasi"
                : "Статистика всех услуг, управляемых системой умного города в реальном времени"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              data-aos="fade-right"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">
                      {language === "uz"
                        ? "Monitoring Tizimi"
                        : "Система мониторинга"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              data-aos="fade-left"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">
                      {language === "uz"
                        ? "O'rtacha Samaradorlik"
                        : "Средняя эффективность"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {statsData.map((section, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    {section.category}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {section.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="group cursor-pointer bg-white rounded-xl border border-gray-100 p-5 hover:border-blue-200 hover:shadow-md transition-all duration-300 text-center"
                      >
                        <div className="w-12 h-12 mx-auto mb-3 bg-gray-50 rounded-lg flex items-center justify-center text-2xl group-hover:bg-blue-50 transition-colors duration-300">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 font-medium leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatisticsPage;
