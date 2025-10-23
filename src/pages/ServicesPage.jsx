import {
  FileText,
  Users,
  Building,
  Car,
  TreePine,
  Droplet,
  Home,
  Calculator,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const ServicesPage = ({ language }) => {
  const services = [
    {
      title:
        language === "uz" ? "Hujjat rasmiylashtiruv" : "Оформление документов",
      description:
        language === "uz"
          ? "Pasport, guvohnoma va boshqa hujjatlar"
          : "Паспорт, справки и другие документы",
      icon: FileText,
      iconColor: "text-blue-600",
      items: [
        language === "uz"
          ? "Yashash joyi haqida ma'lumotnoma"
          : "Справка о месте жительства",
        language === "uz"
          ? "Oila tarkibi haqida ma'lumotnoma"
          : "Справка о составе семьи",
        language === "uz" ? "Daromad haqida ma'lumotnoma" : "Справка о доходах",
        language === "uz"
          ? "Biznes ro'yxatdan o'tkazish"
          : "Регистрация бизнеса",
      ],
    },
    {
      title: language === "uz" ? "Fuqarolar qabuli" : "Прием граждан",
      description:
        language === "uz" ? "Shikoyat va takliflar" : "Жалобы и предложения",
      icon: Users,
      iconColor: "text-green-600",
      items: [
        language === "uz" ? "Hokim qabuli" : "Прием хокима",
        language === "uz" ? "Online murojaat" : "Онлайн обращение",
        language === "uz" ? "Telefon orqali murojaat" : "Обращение по телефону",
        language === "uz" ? "Elektron pochta" : "Электронная почта",
      ],
    },
    {
      title:
        language === "uz"
          ? "Qurilish va ruxsatnomalar"
          : "Строительство и разрешения",
      description:
        language === "uz"
          ? "Qurilish ruxsati va litsenziyalar"
          : "Разрешения на строительство и лицензии",
      icon: Building,
      iconColor: "text-purple-600",
      items: [
        language === "uz" ? "Qurilish ruxsati" : "Разрешение на строительство",
        language === "uz"
          ? "Arxitektura loyihasi tasdiqlash"
          : "Согласование архитектурного проекта",
        language === "uz"
          ? "Foydalanishga ruxsat"
          : "Разрешение на эксплуатацию",
        language === "uz" ? "Yer ajratish" : "Выделение земельного участка",
      ],
    },
    {
      title: language === "uz" ? "Transport xizmatlari" : "Транспортные услуги",
      description:
        language === "uz"
          ? "Transport vositalari va yo'l harakati"
          : "Транспортные средства и дорожное движение",
      icon: Car,
      iconColor: "text-orange-600",
      items: [
        language === "uz"
          ? "Transport vositasini ro'yxatdan o'tkazish"
          : "Регистрация транспортного средства",
        language === "uz" ? "Haydovchilik guvohnomasi" : "Водительские права",
        language === "uz"
          ? "Yo'l harakati qoidalari"
          : "Правила дорожного движения",
        language === "uz"
          ? "Transport xavfsizligi"
          : "Транспортная безопасность",
      ],
    },
    {
      title:
        language === "uz"
          ? "Ekologiya va atrof-muhit"
          : "Экология и окружающая среда",
      description:
        language === "uz" ? "Tabiatni muhofaza qilish" : "Охрана природы",
      icon: TreePine,
      iconColor: "text-emerald-600",
      items: [
        language === "uz"
          ? "Ekologik ruxsatnomalar"
          : "Экологические разрешения",
        language === "uz"
          ? "Chiqindilarni utilizatsiya qilish"
          : "Утилизация отходов",
        language === "uz"
          ? "Yashil maydonlar yaratish"
          : "Создание зеленых зон",
        language === "uz" ? "Ekologik monitoring" : "Экологический мониторинг",
      ],
    },
    {
      title: language === "uz" ? "Kommunal xizmatlar" : "Коммунальные услуги",
      description:
        language === "uz"
          ? "Suv, gaz, elektr ta'minoti"
          : "Водо-, газо-, электроснабжение",
      icon: Droplet,
      iconColor: "text-cyan-600",
      items: [
        language === "uz" ? "Suv ta'minoti" : "Водоснабжение",
        language === "uz" ? "Gaz ta'minoti" : "Газоснабжение",
        language === "uz" ? "Elektr ta'minoti" : "Электроснабжение",
        language === "uz" ? "Issiqlik ta'minoti" : "Теплоснабжение",
      ],
    },
    {
      title: language === "uz" ? "Soliq xizmatlari" : "Налоговые услуги",
      description:
        language === "uz"
          ? "Soliq to'lovlari va hisobotlar"
          : "Налоговые платежи и отчеты",
      icon: Calculator,
      iconColor: "text-indigo-600",
      items: [
        language === "uz" ? "Soliq to'lash" : "Оплата налогов",
        language === "uz" ? "Deklaratsiya topshirish" : "Подача декларации",
        language === "uz"
          ? "Soliq bo'yicha maslahat"
          : "Консультации по налогам",
        language === "uz" ? "Soliq imtiyozlari" : "Налоговые льготы",
      ],
    },
    {
      title: language === "uz" ? "Ko'chmas mulk" : "Недвижимость",
      description:
        language === "uz"
          ? "Uy-joy va yer uchastkasi"
          : "Жилье и земельные участки",
      icon: Home,
      iconColor: "text-pink-600",
      items: [
        language === "uz" ? "Uy-joy ro'yxatdan o'tkazish" : "Регистрация жилья",
        language === "uz" ? "Yer uchastkasi ajratish" : "Выделение земли",
        language === "uz"
          ? "Mulk huquqini rasmiylashtirish"
          : "Оформление права собственности",
        language === "uz" ? "Texnik passport" : "Технический паспорт",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-20 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-cyan-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-5 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg animate-fadeInDown">
              {language === "uz" ? "Xizmatlar" : "Услуги"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900 animate-fadeInUp delay-100">
              {language === "uz" ? "Elektron Xizmatlar" : "Электронные Услуги"}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
              {language === "uz"
                ? "Chust shahar hokimligi tomonidan taqdim etiladigan barcha davlat xizmatlari"
                : "Все государственные услуги, предоставляемые хокимиятом города Чуст"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const delays = [
                "delay-100",
                "delay-200",
                "delay-300",
                "delay-400",
                "delay-500",
                "delay-600",
              ];
              return (
                <div
                  key={index}
                  className={`bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/40 relative overflow-hidden group animate-scaleIn ${
                    delays[index % 6]
                  }`}
                  style={{
                    boxShadow:
                      "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(100, 116, 139, 0.07)",
                  }}
                >
                  {/* Top gradient line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.iconColor.replace(
                      "text-",
                      "from-"
                    )}-500 ${service.iconColor.replace("text-", "to-")}-600`}
                  ></div>

                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>

                  <div className="relative z-10">
                    {/* Icon with glassmorphism */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconColor.replace(
                        "text-",
                        "from-"
                      )}-50 ${service.iconColor.replace("text-", "to-")}-100 ${
                        service.iconColor
                      } flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
                      style={{
                        boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-6">
                      {service.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <CheckCircle2
                            className={`w-5 h-5 ${service.iconColor} flex-shrink-0 mt-0.5`}
                          />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3.5 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                      <span>
                        {language === "uz" ? "Batafsil ma'lumot" : "Подробнее"}
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/40 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              {language === "uz"
                ? "Qo'shimcha ma'lumot kerakmi?"
                : "Нужна дополнительная информация?"}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {language === "uz"
                ? "Bizning mutaxassislar har qanday savollarga javob berishga tayyor"
                : "Наши специалисты готовы ответить на любые вопросы"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-xl">
                <span className="text-2xl">📞</span>
                <span className="font-semibold text-gray-900">
                  +998 (69) 544-12-34
                </span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-xl">
                <span className="text-2xl">📧</span>
                <span className="font-semibold text-gray-900">
                  info@chust.gov.uz
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
