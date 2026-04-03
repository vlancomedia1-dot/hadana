import React from 'react';
import { Heart, Smile, ShieldCheck } from 'lucide-react';

export default function AboutIntro() {
  return (
    <section className="py-24 bg-[#FDF9FF]" id="about">
      <div className="max-w-6xl mx-auto px-4 md:px-12">

        <div className="relative bg-white rounded-[2.5rem] p-10 md:p-14 border border-gray-200 shadow-soft overflow-hidden">

          {/* Background Shapes */}
          <div className="absolute -top-16 -right-16 w-90 h-90 bg-primary/20 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-secondary/20 rounded-full" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">

            <span className="inline-block bg-primary/15 text-primary font-bold px-5 py-2 rounded-full text-sm mb-5">
              من نحن
            </span>

            <h2 className="text-3xl md:text-4xl font-black text-dark mb-4 leading-snug">
              <span className="text-primary">مركز خطوات طفلي</span>
            </h2>

            <p className="text-gray-500 font-medium leading-relaxed mb-10">
              في <span className="font-bold text-primary">خطوات طفلي</span> نوفر بيئة
              تعليمية آمنة ومحببة، نساعد فيها الأطفال على التعلم،
              اللعب، واكتشاف أنفسهم بثقة وسعادة.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">

              <div className="bg-gray-50 rounded-4xl p-6 border border-gray-200/60 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-primary text-white rounded-full flex items-center justify-center">
                  <ShieldCheck size={22} />
                </div>
                <p className="font-black text-dark mb-1">
                  بيئة آمنة
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  نضع سلامة الطفل وراحته في المقام الأول.
                </p>
              </div>

              <div className="bg-gray-50 rounded-4xl p-6 border border-gray-200/60 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-secondary text-white rounded-full flex items-center justify-center">
                  <Smile size={22} />
                </div>
                <p className="font-black text-dark mb-1">
                  تعلم ممتع
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  أنشطة تعليمية بأسلوب مرح وبسيط.
                </p>
              </div>

              <div className="bg-gray-50 rounded-4xl p-6 border border-gray-200/60 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-accent text-white rounded-full flex items-center justify-center">
                  <Heart size={22} />
                </div>
                <p className="font-black text-dark mb-1">
                  رعاية واهتمام
                </p>
                <p className="text-sm text-gray-500 font-medium">
                  نهتم بكل طفل كأنه فرد من عائلتنا.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
