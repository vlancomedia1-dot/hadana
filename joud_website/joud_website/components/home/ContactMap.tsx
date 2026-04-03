import React from 'react';
import { Phone, MapPin, ArrowLeft, HeartHandshake } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="pt-24 pb-12 bg-[#FDF9FF]">
      <div className="max-w-5xl mx-auto px-4 md:px-12">

        <div className="relative bg-white rounded-[2.5rem] p-6 shadow-soft border border-gray-200 overflow-hidden">

          {/* Decorative shapes */}
          <div className="absolute -top-16 -right-16 w-100 h-100 bg-primary/20 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/20 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 relative z-10 items-center">

            {/* Info */}
            <div className="text-right">
              <span className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                <HeartHandshake size={16} />
                نحن سعداء بزيارتكم
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-dark mb-4">
                تواصل معنا أو تعال زورنا
              </h2>

              <p className="text-gray-500 font-medium leading-relaxed mb-8 max-w-md">
                يسعدنا استقبالكم والإجابة عن كل استفساراتكم،  
                ونرحب بزيارة أولياء الأمور للاطلاع على بيئة الحضانة.
              </p>

              <div className="space-y-5">
                {/* Phone */}
                <a
                  href="https://wa.me/966542510147"
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-50/80  transition-all group"
                >
                  <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold">اتصال / واتساب</p>
                    <p className="text-md font-black text-dark" dir='ltr'>
                      +966542510147
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50">
                  <div className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold">العنوان</p>
                    <p className="text-md font-black text-dark">
                      الدمام – حي الفرسان
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex max-md:justify-center">
                <button className="bg-primary text-white px-8 py-3 rounded-full font-black flex items-center gap-3 hover:bg-primary/80 transition-all cursor-pointer duration-300">
                  احجز زيارة للحضانة
                </button>
              </div>
            </div>

            {/* QR */}
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-[2rem] p-4 shadow border border-gray-200">
                <img
                  src="/images/location-qrcode.png"
                  alt="QR Code"
                  className="w-60 h-60"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
