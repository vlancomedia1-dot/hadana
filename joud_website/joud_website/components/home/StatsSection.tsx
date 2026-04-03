'use client';

import { Users, Heart, Baby, Award, LucideIcon } from 'lucide-react';
import React from 'react';

function Counter({ value }: { value: number }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1200;

    const animate = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span className="text-secondary">{count}+</span>;
}

function StatItem({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      
      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-[#808384]/10 flex items-center justify-center">
        <Icon size={28} className="text-primary" strokeWidth={2.2} />
      </div>

      {/* Number */}
      <div className="text-4xl font-black text-primary">
        <Counter value={value} />
      </div>

      {/* Label */}
      <p className="text-gray-500 font-medium text-sm">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: 20,
      label: 'معلمات مؤهلات',
      color: 'text-primary',
    },
    {
      icon: Heart,
      value: 300,
      label: 'أولياء أمور راضون',
      color: 'text-secondary',
    },
    {
      icon: Baby,
      value: 250,
      label: 'أطفال سعداء معنا',
      color: 'text-accent',
    },
    {
      icon: Award,
      value: 10,
      label: 'سنوات خبرة',
      color: 'text-primary',
    },
  ];

  return (
    <section className="py-24 bg-[#FDF9FF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main Card – same feeling as ContactMap */}
        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-gray-200 shadow-soft">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <StatItem key={i} {...stat} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
