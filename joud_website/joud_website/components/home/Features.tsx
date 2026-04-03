import React from 'react';
import {
  BookOpen,
  Users,
  Smile,
  Star,
  Bus,
  Heart,
  Palette,
  Languages,
  LucideIcon
} from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}


const FeatureCard = ({ icon: Icon, title, desc }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-200 hover:shadow-soft transition-all duration-300 group text-center">
    <div className="flex justify-center items-center">
      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform">
        <Icon size={32} className="text-white" />
      </div>
    </div>
    <h3 className="text-xl font-black text-dark mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base">
      {desc}
    </p>
  </div>
);

export default function Features() {
  const features = [
    {
      icon: Users,
      title: "معلمات مؤهلات",
      desc: "فريق من المعلمات الحاصلات على شهادات عالية وخبرة في التعامل مع الأطفال."
    },
    {
      icon: BookOpen,
      title: "مناهج مناسبة للأطفال",
      desc: "مناهج تعليمية مبسطة تناسب عمر الطفل وتساعده على التعلم بسهولة."
    },
    {
      icon: Languages,
      title: "ثنائي اللغة",
      desc: "تعليم الطفل اللغتين العربية والإنجليزية بأسلوب ممتع وطبيعي."
    },
    {
      icon: Star,
      title: "أقساط تناسب الجميع",
      desc: "نقدم أسعارًا مناسبة وخطط سداد مرنة لجميع أولياء الأمور."
    },
    {
      icon: Bus,
      title: "خدمة مواصلات",
      desc: "توفير خدمة مواصلات آمنة للأطفال برسوم إضافية."
    },
    {
      icon: Palette,
      title: "تنمية المهارات والإبداع",
      desc: "أنشطة فنية وإبداعية تساعد الطفل على التعبير عن نفسه."
    },
    {
      icon: Smile,
      title: "أنشطة ترفيهية",
      desc: "ألعاب وأنشطة ممتعة تجعل الطفل سعيدًا ومحبًا للحضور يوميًا."
    },
    {
      icon: Heart,
      title: "القيم والأخلاق",
      desc: "نغرس القيم والأخلاق الحميدة في الطفل منذ الصغر."
    },
  ];

  return (
    <section className="py-24 bg-[#FDF9FF] relative" id="features">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-primary font-bold tracking-wider text-sm bg-primary/15 px-4 py-2 rounded-full uppercase">
            لماذا تختارنا؟
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-dark mt-6 mb-4">
            بيئة آمنة وممتعة <span className="text-primary underline decoration-wavy decoration-secondary/50 underline-offset-4">لطفلك</span>
          </h2>
          <p className="text-gray-500 font-medium text-lg">
            نعتني بطفلك، نعلمه، ونساعده على النمو بسعادة
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
