import { BarChart3, TrendingUp, Activity, Zap } from "lucide-react";

const StatisticsPage = ({ language }) => {
  const statsData = [
    {
      category:
        language === "uz" ? "Chiqindi boshqaruvi" : "Управление отходами",
      stats: [
        {
          label: language === "uz" ? "Axlat mashinalar" : "Мусоровозы",
          value: "20+",
          icon: "🚛",
        },
        {
          label:
            language === "uz" ? "Kunlik yo'nalishlar" : "Ежедневных маршрутов",
          value: "45",
          icon: "📍",
        },
        {
          label:
            language === "uz"
              ? "To'plangan chiqindi (tonna)"
              : "Собрано отходов (тонн)",
          value: "1,250",
          icon: "♻️",
        },
        {
          label: language === "uz" ? "Samaradorlik" : "Эффективность",
          value: "98%",
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
          value: "50+",
          icon: "🌡️",
        },
        {
          label: language === "uz" ? "Maktablar" : "Школ",
          value: "15",
          icon: "🏫",
        },
        {
          label: language === "uz" ? "Bolalar bog'chalari" : "Детских садов",
          value: "12",
          icon: "🎨",
        },
        {
          label:
            language === "uz" ? "Kunlik tekshiruvlar" : "Ежедневных проверок",
          value: "150+",
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
          value: "35",
          icon: "🚌",
        },
        {
          label:
            language === "uz" ? "Yo'lovchilar (kunlik)" : "Пассажиров (в день)",
          value: "8,500+",
          icon: "👥",
        },
        {
          label: language === "uz" ? "Marshrutlar" : "Маршрутов",
          value: "12",
          icon: "🗺️",
        },
        {
          label: language === "uz" ? "Vaqtida kelish" : "Своевременность",
          value: "94%",
          icon: "⏱️",
        },
      ],
    },
    {
      category: language === "uz" ? "Yashil maydonlar" : "Зеленые зоны",
      stats: [
        {
          label: language === "uz" ? "Yashil maydon (ga)" : "Зеленых зон (га)",
          value: "120",
          icon: "🌳",
        },
        {
          label: language === "uz" ? "Namlik sensorlari" : "Датчиков влажности",
          value: "45",
          icon: "💧",
        },
        {
          label: language === "uz" ? "Suv tejash" : "Экономия воды",
          value: "35%",
          icon: "💰",
        },
        {
          label: language === "uz" ? "Avtomatik sug'orish" : "Автополив",
          value: "24/7",
          icon: "🔄",
        },
      ],
    },
    {
      category: language === "uz" ? "Fuqarolar xizmati" : "Служба граждан",
      stats: [
        {
          label: language === "uz" ? "Oylik qo'ng'iroqlar" : "Звонков в месяц",
          value: "1,200+",
          icon: "📞",
        },
        {
          label:
            language === "uz" ? "Hal qilingan muammolar" : "Решенных проблем",
          value: "95%",
          icon: "✓",
        },
        {
          label:
            language === "uz" ? "O'rtacha javob vaqti" : "Среднее время ответа",
          value: "2 soat",
          icon: "⏰",
        },
        {
          label:
            language === "uz"
              ? "Qoniqish darajasi"
              : "Уровень удовлетворенности",
          value: "92%",
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
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(59, 130, 246, 0.07)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-600"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center"
                    style={{
                      boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <BarChart3 className="w-8 h-8 text-blue-600" />
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
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(34, 197, 94, 0.08)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center"
                    style={{
                      boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <TrendingUp className="w-8 h-8 text-green-600" />
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
                style={{
                  boxShadow:
                    "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(100, 116, 139, 0.07)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    {section.category}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {section.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-4xl mb-2">{stat.icon}</div>
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
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
