import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LeadershipPage({ language, translations }) {
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
  const leaders = [
    {
      position: "Tuman hokimi",
      name: "Salimjonov Baxtiyorjon Raximjonovich",
      receptionDays: "Har haftaning shanba kuni soat 10:00 dan 13:00 gacha",
      phone: "(0-369) 42-33-600",
      address:
        "161100, Namangan viloyati, Chust tumani, Chorog`on ko'chasi 1-uy",
      email: "chusthok@umail.uz",
      website: "www.Chust.uz",
      image: null,
    },
    {
      position:
        "Tumani hokimining moliya-iqtisodiyot va kambag'allikni qisqartirish masalalari bo'yicha birinchi o'rinbosari",
      name: "vakant",
      receptionDays: "Har haftaning dushanba kuni soat 10-00 dan 13-00 gacha",
      phone: "(0-369) 42-33-343",
      address:
        "161100, Namangan viloyati, Chust tumani, Chorog`on ko'chasi 1-uy",
      email: "chusthok@umail.uz",
      website: "www.Chust.uz",
      image: null,
    },
    {
      position:
        "Tuman hokimining qurilish, to'siqlarsiz muhit yaratish, kommunikatsiyalar, kommunal xo'jalik, ekologiya va ko'kalamzorlashtirish masalalari bo'yicha o'rinbosari",
      name: "Djafarov Baxriddin Botiralievich",
      receptionDays: "Har haftaning seshanba kuni soat 10-00 dan 13-00 gacha",
      phone: "(0-369) 42-33-000",
      address:
        "161100, Namangan viloyati, Chust tumani, Chorog`on ko'chasi 1-uy",
      email: "chusthok@umail.uz",
      website: "www.Chust.uz",
      image: null,
    },
    {
      position:
        "Tuman hokimining o'rinbosari-tuman investitsiyalar, sanoat va savdo bo'limi boshlig'i",
      name: "Tuxtasinov Ibratali Tulkinalievich",
      receptionDays: "Har haftaning payshanba kuni soat 10-00 dan 13-00 gacha",
      phone: "(0-369) 42-33-600",
      address:
        "161100, Namangan viloyati, Chust tumani, Chorog`on ko'chasi 1-uy",
      email: "chusthok@umail.uz",
      website: "www.Chust.uz",
      image: null,
    },
    {
      position:
        "Tuman hokimining yoshlar siyosati, ijtimoiy rivojlantirish va ma'naviy-ma'rifiy ishlar bo'yicha o'rinbosari",
      name: "Boybaev Zuxriddin Raymjonovich",
      receptionDays: "Har haftaning juma kuni soat 10-00 dan 13-00 gacha",
      phone: "(0-369) 42-31-330",
      address:
        "161100, Namangan viloyati, Chust tumani, Chorog`on ko'chasi 1-uy",
      email: "chusthok@umail.uz",
      website: "www.Chust.uz",
      image: null,
    },
    {
      position:
        "Tuman hokimining qishloq va suv xo'jaligi masalalari bo'yicha o'rinbosari",
      name: "Raxmatullaev Abror Xabibullaevich",
      receptionDays: "Har haftaning shanba kuni soat 10-00 dan 13-00 gacha",
      phone: "(0-369) 42-33-000",
      address:
        "161100, Namangan viloyati, Chust tumani, Chorog`on ko'chasi 1-uy",
      email: "chusthok@umail.uz",
      website: "www.Chust.uz",
      image: null,
    },
    {
      position:
        "Tuman hokimining o'rinbosari - oila va xotin-qizlar bo'limi boshlig'i",
      name: "Urinova Dilfuza Tulkinovna",
      receptionDays: "Har haftaning chorshanba kuni soat 10-00 dan 13-00 gacha",
      phone: "(0-369) 42-33-000",
      address:
        "161100, Namangan viloyati, Chust tumani, Chorog`on ko'chasi 1-uy",
      email: "chusthok@umail.uz",
      website: "www.Chust.uz",
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="text-center">
            <h1
              data-aos="fade-down"
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            >
              Tuman Rahbariyati
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            >
              Chust tumani hokimligi rahbariyati a'zolari bilan tanishing
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8" data-aos="fade-right" data-aos-delay="200">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600 transition-colors">
              Bosh sahifa
            </a>
            <span className="text-gray-400">/</span>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Tuman hokimligi
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Rahbariyat</span>
          </div>
        </nav>

        {/* Leaders Grid */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-500 overflow-hidden"
            >
              {/* Header gradient line */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Profile Image */}
                  <div className="shrink-0 mx-auto lg:mx-0">
                    <div className="relative">
                      <div className="w-32 h-40 sm:w-36 sm:h-44 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {leader.image ? (
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <div className="text-gray-400 text-center">
                            <svg
                              className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-xs font-medium">Rasm</span>
                          </div>
                        )}
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-indigo-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    </div>
                  </div>

                  {/* Leader Information */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {leader.name}
                      </h2>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border-l-4 border-blue-500">
                        <p className="text-blue-700 font-medium leading-relaxed text-sm sm:text-base">
                          {leader.position}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 text-sm">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                            <svg
                              className="w-5 h-5 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800 mb-1">
                              Qabul qilish vaqti:
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                              {leader.receptionDays}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                            <svg
                              className="w-5 h-5 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800 mb-1">
                              Telefon:
                            </p>
                            <a
                              href={`tel:${leader.phone}`}
                              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
                            >
                              {leader.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                            <svg
                              className="w-5 h-5 text-purple-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800 mb-1">
                              Manzil:
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                              {leader.address}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-200 transition-colors">
                            <svg
                              className="w-5 h-5 text-orange-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800 mb-1">
                              E-mail:
                            </p>
                            <a
                              href={`mailto:${leader.email}`}
                              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium break-all"
                            >
                              {leader.email}
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-200 transition-colors">
                            <svg
                              className="w-5 h-5 text-cyan-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                              />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-gray-800 mb-1">
                              Veb-sayt:
                            </p>
                            <a
                              href={`https://${leader.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 hover:underline transition-colors font-medium"
                            >
                              {leader.website}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-16 sm:mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white p-8 sm:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Savol yoki takliflaringiz bormi?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Bizning rahbariyat a'zolarimiz bilan bevosita aloqaga chiqing. Har
            qanday muammo yoki takliflaringizni eshitishga tayyormiz.
          </p>
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/aloqa"
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 rounded-xl font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Bog'lanish</span>
            </a>
            <a
              href="tel:+998369423600"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Qo'ng'iroq qilish</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
