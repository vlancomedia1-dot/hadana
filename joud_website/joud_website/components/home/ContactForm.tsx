import React from 'react';
import { Send, Heart } from 'lucide-react';
import Image from 'next/image';

export default function ContactForm() {
  return (
    <section className="py-12 bg-[#FDF9FF]">
      <div className="max-w-5xl mx-auto px-4 md:px-12">

        <div className="relative bg-white rounded-[2.5rem] p-6 border border-gray-200 shadow-soft overflow-hidden">

          {/* Background shapes */}
          <div className="absolute -top-12 -right-12 w-72 h-72 bg-primary/20 rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-secondary/20 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 relative z-10 items-start">

            {/* Left – Text */}
            <div className="text-right">
              <span className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Heart size={16} />
                نحن هنا لمساعدتك
              </span>

              <h2 className="text-3xl md:text-4xl font-black text-dark leading-relaxed">
                أرسل لنا رسالة
              </h2>

              <p className="text-gray-500 font-medium leading-relaxed max-w-md mb-8">
                لو عندك أي استفسار عن الحضانة، البرامج، أو مواعيد الزيارة  
                يسعدنا تواصلك معنا في أي وقت.
              </p>

            <div className="flex items-center">
              <Image src="/images/logo.png" width={200} height={50} alt="مركز خطوات طفلي" className="w-60 aspect-square mx-auto" />
            </div>
            </div>

            {/* Right – Form */}
            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-500 mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  placeholder="اكتب اسمك هنا"
                  className="w-full px-5 py-3 rounded-full border border-gray-200 focus:border-primary/60 focus:border-2 focus:outline-none transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-bold text-gray-500 mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  placeholder="05xxxxxxxx"
                  className="w-full px-5 py-3 rounded-full border border-gray-200 focus:border-primary/60 focus:border-2 focus:outline-none transition dir-ltr text-right"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-gray-500 mb-2">
                  رسالتك
                </label>
                <textarea
                  rows={4}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full px-5 py-3 rounded-3xl bg-white border border-gray-200 focus:border-primary/60 focus:border-2 focus:outline-none transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-full font-black flex items-center justify-center gap-3 hover:bg-primary/80 cursor-pointer transition-all duration-300"
              >
                إرسال الرسالة
                <Send size={18} />
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
