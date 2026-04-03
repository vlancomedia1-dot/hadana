import { Layout, BrainCircuit, Gamepad2, LucideIcon } from 'lucide-react';

interface FacilityCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  blobColor: string;
}



const FacilityCard = ({ icon: Icon, title, desc, color, blobColor }: FacilityCardProps) => (
  <div className="bg-white p-8 rounded-[3rem] border border-gray-200 transition-all duration-300 relative overflow-hidden group">
    
    {/* Background Blob Decoration (Animated on Hover) */}
    <div className={`absolute -top-10 -right-10 w-52 h-52 ${blobColor} rounded-full opacity-20 blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
    
    {/* Icon Container */}
    <div className={`relative w-20 h-20 ${color} rounded-2xl rotate-3 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center mb-8`}>
      <Icon size={36} className="text-white" />
    </div>

    {/* Content */}
    <div className="relative z-10">
      <h3 className="text-2xl font-black text-[#2D3436] mb-4">{title}</h3>
      <p className="text-gray-500 font-medium leading-relaxed">
        {desc}
      </p>
      
      {/* Small Decorative Link/Arrow */}
      {/* <div className="flex items-center gap-2 text-sm font-bold opacity-60 group-hover:opacity-100 group-hover:gap-3 transition-all">
        <span style={{ color: 'var(--text-color)' }}>استكشف المرفق</span>
        <div className={`p-1 rounded-full ${color}`}>
            <ArrowUpLeft size={12} className="text-white" />
        </div>
      </div> */}
    </div>
  </div>
);

export default function Facilities() {
  const facilities = [
    {
      title: "صفوف منظمة",
      desc: "فصول دراسية مصممة بمساحات واسعة وإضاءة طبيعية، مجهزة بأثاث آمن ومريح يناسب أحجام الأطفال ويساعدهم على التركيز.",
      icon: Layout,
      color: "bg-primary", // Purple
      blobColor: "bg-primary"
    },
    {
      title: "غرف تطوير الذكاء",
      desc: "قاعات مخصصة لألعاب المونتيسوري والألغاز الذهنية، تحتوي على أدوات تعليمية متطورة لتنمية مهارات التفكير المنطقي.",
      icon: BrainCircuit,
      color: "bg-primary", // Yellow
      blobColor: "bg-primary"
    },
    {
      title: "ساحة وألعاب",
      desc: "منطقة ألعاب خارجية وداخلية آمنة تماماً، بأرضيات مطاطية وألعاب حركية تساعد على تفريغ طاقة الطفل وبناء جسده.",
      icon: Gamepad2,
      color: "bg-primary", // Salmon
      blobColor: "bg-primary"
    }
  ];

  return (
    <section className="py-24 bg-[#FDF9FF] relative" id="facilities">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-primary font-bold tracking-wider text-sm bg-primary/10 px-4 py-2 rounded-full uppercase">
            مرافق الروضة
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#2D3436] mt-6 leading-tight">
            بيئة مجهزة <span className="text-primary underline decoration-wavy underline-offset-8 decoration-secondary">لراحتهم</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            كل ركن في روضتنا مصمم ليخدم هدفاً تعليمياً أو ترفيهياً محدداً
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((item, index) => (
            <FacilityCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}