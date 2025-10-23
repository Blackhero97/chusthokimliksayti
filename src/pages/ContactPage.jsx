import { useState } from "react";
import { MapPin, Phone, Mail, Clock, User, Building } from "lucide-react";

const ContactPage = ({ language, translations }) => {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        ? "Murojaatingiz qabul qilindi! Tez orada javob beramiz."
        : "Ваше обращение принято! Мы ответим в ближайшее время."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "Shikoyat",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      details: [t.contact.fullAddress],
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: Phone,
      title: t.contact.phone,
      details: ["+998 (69) 544-12-34", "+998 (69) 544-12-35"],
      color: "text-green-600 bg-green-50",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@chust.gov.uz", "contact@chust.gov.uz"],
      color: "text-red-600 bg-red-50",
    },
    {
      icon: Clock,
      title: t.contact.workingHours,
      details: [t.contact.workingTime],
      color: "text-purple-600 bg-purple-50",
    },
  ];

  const management = [
    {
      position: language === "uz" ? "Shahar hokimi" : "Хоким города",
      name: "A. Karimov",
      phone: "+998 (69) 544-12-34",
      email: "hokim@chust.gov.uz",
      reception:
        language === "uz" ? "Chorshanba 14:00-16:00" : "Среда 14:00-16:00",
    },
    {
      position: language === "uz" ? "Hokim o'rinbosari" : "Заместитель хокима",
      name: "B. Umarov",
      phone: "+998 (69) 544-12-35",
      email: "deputy@chust.gov.uz",
      reception:
        language === "uz" ? "Seshanba 10:00-12:00" : "Вторник 10:00-12:00",
    },
    {
      position: language === "uz" ? "Kotiб" : "Секретарь",
      name: "C. Nazarova",
      phone: "+998 (69) 544-12-36",
      email: "secretary@chust.gov.uz",
      reception:
        language === "uz" ? "Har kuni 9:00-18:00" : "Ежедневно 9:00-18:00",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeInDown">
            {language === "uz" ? "Biz bilan bog'laning" : "Свяжитесь с нами"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp delay-100">
            {language === "uz"
              ? "Sizning fikr va takliflaringiz biz uchun muhim. Biz bilan bog'lanish uchun quyidagi ma'lumotlardan foydalaning."
              : "Ваши мнения и предложения важны для нас. Используйте следующую информацию для связи с нами."}
          </p>
        </div>

        {/* Contact Information Cards - Premium Design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
            return (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-white/40 group hover:-translate-y-1 relative overflow-hidden animate-scaleIn ${delays[index]}`}
                style={{
                  boxShadow:
                    "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(100, 116, 139, 0.07)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -mr-10 -mt-10 opacity-30"></div>
                <div className="relative">
                  <div
                    className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    style={{
                      boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <info.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form - Premium Design */}
          <div
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 p-8 relative overflow-hidden"
            style={{
              boxShadow:
                "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(59, 130, 246, 0.07)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {language === "uz" ? "Xabar Yuborish" : "Отправить сообщение"}
              </h2>
              <p className="text-gray-600 text-sm mb-6">
                {language === "uz"
                  ? "Savollar va takliflar uchun biz bilan bog'laning"
                  : "Свяжитesь с нами для вопросов и предложений"}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    {language === "uz" ? "Ism Familiya" : "Имя Фамилия"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                    placeholder={
                      language === "uz"
                        ? "Ismingizni kiriting"
                        : "Введите ваше имя"
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    {language === "uz"
                      ? "Elektron pochta"
                      : "Электронная почта"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all text-gray-900 placeholder-gray-400"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
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
                  <option value="Boshqa">
                    {language === "uz" ? "Boshqa" : "Другое"}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  {language === "uz" ? "Xabar matni" : "Текст сообщения"}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all resize-none text-gray-900 placeholder-gray-400"
                  placeholder={
                    language === "uz"
                      ? "Xabaringizni yozing..."
                      : "Напишите ваше сообщение..."
                  }
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-all font-medium flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <Mail className="w-5 h-5" />
                <span>
                  {language === "uz" ? "Xabar Yuborish" : "Отправить сообщение"}
                </span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                {language === "uz"
                  ? "* Majburiy maydonlar. Sizning ma'lumotlaringiz maxfiy saqlanadi."
                  : "* Обязательные поля. Ваша информация хранится конфиденциально."}
              </p>
            </form>
          </div>

          {/* Management and Office Hours */}
          <div className="space-y-6">
            {/* Management */}
            <div
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 p-8 relative overflow-hidden"
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(100, 116, 139, 0.07)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === "uz" ? "Rahbariyat" : "Руководство"}
                </h2>
                <div className="space-y-6">
                  {management.map((person, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-green-500 pl-6 py-4"
                    >
                      <h3 className="font-bold text-gray-800 mb-2">
                        {person.position}
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-500" />
                          <span className="font-medium text-gray-700">
                            {person.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">{person.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">{person.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">
                            {person.reception}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 p-8 relative overflow-hidden"
              style={{
                boxShadow:
                  "inset 0 2px 4px 0 rgba(0, 0, 0, 0.02), 0 8px 32px 0 rgba(100, 116, 139, 0.07)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === "uz" ? "Joylashuv" : "Местоположение"}
                </h2>
                <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      {language === "uz"
                        ? "Xarita yuklanmoqda..."
                        : "Загрузка карты..."}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      {t.contact.fullAddress}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              {language === "uz" ? "Ishonch telefoni" : "Телефон доверия"}
            </h2>
            <p className="text-blue-100 mb-4">
              {language === "uz"
                ? "Korrupsiya va qonunbuzarlik holatlari haqida xabar berish uchun"
                : "Для сообщения о случаях коррупции и правонарушений"}
            </p>
            <div className="text-3xl font-bold">1001</div>
            <p className="text-blue-100 mt-2">
              {language === "uz" ? "Bepul, 24/7" : "Бесплатно, 24/7"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
