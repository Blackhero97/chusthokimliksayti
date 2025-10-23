import { Card } from "../components/ui/card";

export default function LeadershipPage({ language, translations }) {
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">
              Bosh sahifa
            </a>
            <span>&gt;</span>
            <a href="#" className="hover:text-blue-600">
              Tuman hokimligi
            </a>
            <span>&gt;</span>
            <span className="text-gray-900">Rahbariyat</span>
          </div>
        </nav>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Tuman Rahbariyati
          </h1>
          <p className="text-gray-600">
            Chust tumani hokimligi rahbariyati a'zolari bilan tanishing
          </p>
        </div>

        {/* Leaders Grid */}
        <div className="grid gap-6 md:gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Profile Image Placeholder */}
                <div className="shrink-0">
                  <div className="w-32 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                    {leader.image ? (
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-gray-400 text-center">
                        <svg
                          className="w-12 h-12 mx-auto mb-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-xs">Rasm</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Leader Information */}
                <div className="grow">
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {leader.name}
                    </h2>
                    <p className="text-blue-600 font-medium leading-relaxed">
                      {leader.position}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <svg
                          className="w-5 h-5 text-gray-400 mt-0.5"
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
                        <div>
                          <p className="font-medium text-gray-700">
                            Qabul qilish vaqti:
                          </p>
                          <p className="text-gray-600">
                            {leader.receptionDays}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-gray-400"
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
                        <div>
                          <p className="font-medium text-gray-700">Telefon:</p>
                          <a
                            href={`tel:${leader.phone}`}
                            className="text-blue-600 hover:underline"
                          >
                            {leader.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <svg
                          className="w-5 h-5 text-gray-400 mt-0.5"
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
                        <div>
                          <p className="font-medium text-gray-700">Manzil:</p>
                          <p className="text-gray-600">{leader.address}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-gray-400"
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
                        <div>
                          <p className="font-medium text-gray-700">E-mail:</p>
                          <a
                            href={`mailto:${leader.email}`}
                            className="text-blue-600 hover:underline"
                          >
                            {leader.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-gray-400"
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
                        <div>
                          <p className="font-medium text-gray-700">Veb-sayt:</p>
                          <a
                            href={`https://${leader.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {leader.website}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
