import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";

const NewsPage = ({ language }) => {
  const newsItems = [
    {
      id: 1,
      title:
        language === "uz"
          ? "Aqlli shahar tizimi ishga tushirildi"
          : "Запущена система умного города",
      excerpt:
        language === "uz"
          ? "Chust shahrida zamonaviy aqlli shahar boshqaruv tizimi rasman ishga tushirildi. Tizim shahar infratuzilmasini real vaqt rejimida kuzatish imkonini beradi."
          : "В городе Чуст официально запущена современная система управления умным городом. Система позволяет отслеживать городскую инфраструктуру в режиме реального времени.",
      date: "2024-03-15",
      category: language === "uz" ? "Yangiliklar" : "Новости",
      image:
        "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    },
    {
      id: 2,
      title:
        language === "uz"
          ? "GPS orqali chiqindi mashinalarini kuzatuv"
          : "Мониторинг мусоровозов через GPS",
      excerpt:
        language === "uz"
          ? "Shaharning barcha chiqindi mashinalariga GPS trekerlari o'rnatildi. Bu tozalash jarayonini samarali boshqarish imkonini beradi."
          : "На все мусоровозы города установлены GPS-трекеры. Это позволяет эффективно управлять процессом уборки.",
      date: "2024-03-10",
      category: language === "uz" ? "Texnologiya" : "Технологии",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    },
    {
      id: 3,
      title:
        language === "uz"
          ? "Maktablarda harorat monitoringi joriy qilindi"
          : "Внедрен температурный мониторинг в школах",
      excerpt:
        language === "uz"
          ? "50 ta harorat sensori maktablar va bolalar bog'chalarining oshxonalarida o'rnatildi. Tizim avtomatik ravishda haroratni nazorat qiladi."
          : "Установлено 50 температурных датчиков в столовых школ и детских садов. Система автоматически контролирует температуру.",
      date: "2024-03-05",
      category: language === "uz" ? "Ta'lim" : "Образование",
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    },
    {
      id: 4,
      title:
        language === "uz"
          ? "Jamoat transportida yangi tizim"
          : "Новая система в общественном транспорте",
      excerpt:
        language === "uz"
          ? "Barcha jamoat transport vositalari real vaqt kuzatuv tizimiga ulandi. Yo'lovchilar avtobuslarning joylashuvini bilishlari mumkin."
          : "Все единицы общественного транспорта подключены к системе мониторинга в реальном времени. Пассажиры могут узнать местоположение автобусов.",
      date: "2024-02-28",
      category: language === "uz" ? "Transport" : "Транспорт",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    },
    {
      id: 5,
      title:
        language === "uz"
          ? "Yashil maydonlarda aqlli sug'orish"
          : "Умный полив в зеленых зонах",
      excerpt:
        language === "uz"
          ? "Parklar va bog'larda avtomatik sug'orish tizimi ishga tushirildi. Tizim namlik sensorlari asosida ishlaydi."
          : "Запущена система автоматического полива в парках и садах. Система работает на основе датчиков влажности.",
      date: "2024-02-20",
      category: language === "uz" ? "Ekologiya" : "Экология",
      image:
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
    },
    {
      id: 6,
      title:
        language === "uz"
          ? "Fuqarolar uchun mobil ilova"
          : "Мобильное приложение для граждан",
      excerpt:
        language === "uz"
          ? "Chust shahar hokimligining rasmiy mobil ilovasi ishlab chiqildi. Ilova orqali murojaatlar yuborish va xizmatlardan foydalanish mumkin."
          : "Разработано официальное мобильное приложение хокимията Чуста. Через приложение можно отправлять обращения и пользоваться услугами.",
      date: "2024-02-15",
      category: language === "uz" ? "Xizmatlar" : "Услуги",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-20 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-cyan-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-5 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg animate-fadeInDown">
              {language === "uz" ? "Yangiliklar" : "Новости"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900 animate-fadeInUp delay-100">
              {language === "uz" ? "So'nggi Yangiliklar" : "Последние новости"}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
              {language === "uz"
                ? "Chust aqlli shahar loyihasi bo'yicha eng so'nggi yangiliklar va tadbirlar"
                : "Последние новости и события по проекту умного города Чуст"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <article
                key={news.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/40 relative group"
                style={{
                  boxShadow:
                    "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(59, 130, 246, 0.07)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>

                {/* Image with overlay gradient */}
                <div className="relative h-56 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category badge on image */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600 shadow-lg">
                      <Tag className="w-3.5 h-3.5" />
                      {news.category}
                    </span>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 relative">
                  {/* Date */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <time dateTime={news.date}>{news.date}</time>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-5">
                    {news.excerpt}
                  </p>

                  {/* Read more button */}
                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-300 group/btn">
                    <span>
                      {language === "uz" ? "Batafsil o'qish" : "Читать далее"}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
