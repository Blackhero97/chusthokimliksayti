import { Eye, Settings, Shield, Users, Award, Target } from "lucide-react";

const AboutPage = ({ language, translations }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-20 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-cyan-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-5 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-full shadow-lg animate-fadeInDown">
              {language === "uz" ? "Loyiha Haqida" : "О проекте"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900 animate-fadeInUp delay-100">
              {language === "uz"
                ? "Chust Aqlli Shahar Loyihasi"
                : "Проект Умный город Чуст"}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-200">
              {language === "uz"
                ? "Zamonaviy raqamli texnologiyalar asosida shahar infratuzilmasini boshqarish va aholining hayot sifatini yaxshilash"
                : "Управление городской инфраструктурой и улучшение качества жизни населения на основе современных цифровых технологий"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group animate-scaleIn delay-100"
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(31, 38, 135, 0.07)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div
                  className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
                >
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {language === "uz" ? "Maqsad" : "Цель"}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === "uz"
                    ? "Shahar infratuzilmasini raqamlashtirish va aholining hayot sifatini yaxshilash orqali zamonaviy aqlli shahar yaratish"
                    : "Создание современного умного города через цифровизацию инфраструктуры и улучшение качества жизни населения"}
                </p>
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
                <div
                  className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
                >
                  <Settings className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {language === "uz" ? "Vazifa" : "Задача"}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === "uz"
                    ? "Kommunal xizmatlar, transport va boshqa shahar tizimlarini avtomatlashtirilgan boshqarish"
                    : "Автоматизированное управление коммунальными услугами, транспортом и другими городскими системами"}
                </p>
              </div>
            </div>

            <div
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group animate-scaleIn delay-200"
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(168, 85, 247, 0.07)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div
                  className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300"
                  style={{ boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)" }}
                >
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {language === "uz" ? "Qiymatlar" : "Ценности"}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === "uz"
                    ? "Shaffoflik, samaradorlik va aholining ehtiyojlarini birinchi o'ringa qo'yish"
                    : "Прозрачность, эффективность и приоритет потребностей населения"}
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group animate-fadeInLeft delay-300"
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(249, 115, 22, 0.07)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center"
                    style={{
                      boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === "uz"
                      ? "Asosiy yo'nalishlar"
                      : "Основные направления"}
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>
                      {language === "uz"
                        ? "Chiqindi boshqaruvi va monitoringi"
                        : "Управление и мониторинг отходов"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>
                      {language === "uz"
                        ? "Harorat monitoringi (maktablar, bog'chalar)"
                        : "Мониторинг температуры (школы, сады)"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>
                      {language === "uz"
                        ? "Jamoat transportini kuzatish"
                        : "Мониторинг общественного транспорта"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>
                      {language === "uz"
                        ? "Yashil maydonlarni avtomatik sug'orish"
                        : "Автоматический полив зеленых зон"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                    <span>
                      {language === "uz"
                        ? "Fuqarolar murojaat tizimi"
                        : "Система обращений граждан"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group animate-fadeInRight delay-300"
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(6, 182, 212, 0.07)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent rounded-3xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center"
                    style={{
                      boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <Award className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === "uz"
                      ? "Kutilayotgan natijalar"
                      : "Ожидаемые результаты"}
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span>
                      {language === "uz"
                        ? "Shahar xizmatlarining sifatini oshirish"
                        : "Повышение качества городских услуг"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span>
                      {language === "uz"
                        ? "Resurslardan samarali foydalanish"
                        : "Эффективное использование ресурсов"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span>
                      {language === "uz"
                        ? "Shaffof boshqaruv tizimi"
                        : "Прозрачная система управления"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span>
                      {language === "uz"
                        ? "Aholining hayot sifatini yaxshilash"
                        : "Улучшение качества жизни населения"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                    <span>
                      {language === "uz"
                        ? "Ekologik holatni yaxshilash"
                        : "Улучшение экологической ситуации"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
