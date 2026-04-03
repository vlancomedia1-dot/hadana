import { Check } from "lucide-react";

const PriceCard = ({
  title,
  price,
  desc,
  features,
  highlight = false,
}: {
  title: string;
  price: string;
  desc: string;
  features: string[];
  highlight?: boolean;
}) => (
  <div
    className={`relative rounded-[2.5rem] p-8 border transition-all
      ${
        highlight
          ? "bg-primary text-white border-primary "
          : "bg-white border-gray-200 shadow-soft"
      }
    `}
  >
    {/* {highlight && (
      <span className="absolute top-6 left-6 bg-white/90 text-primary text-xs font-bold px-4 py-1 rounded-full">
        الأكثر اختيارًا
      </span>
    )} */}

    <h3 className="text-2xl font-black mb-2">{title}</h3>
    <p className={`mb-6 ${highlight ? "text-white/80" : "text-gray-500"}`}>
      {desc}
    </p>

    <div className="text-4xl font-black mb-8">
      {price}
      <span className="text-sm font-medium"> / شهريًا</span>
    </div>

    {/* <ul className="space-y-4 mb-8">
      {features.map((item, i) => (
        <li key={i} className="flex items-center gap-3">
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center
              ${highlight ? "bg-white text-primary" : "bg-primary/10 text-primary"}
            `}
          >
            <Check size={14} />
          </div>
          <span className={highlight ? "text-white" : "text-gray-700"}>
            {item}
          </span>
        </li>
      ))}
    </ul> */}

    <button
      className={`w-full py-3 rounded-full font-bold transition-colors cursor-pointer
        ${
          highlight
            ? "bg-white text-primary hover:bg-white/90"
            : "bg-primary text-white hover:bg-primary/80"
        }
      `}
    >
      احجز زيارة
    </button>
  </div>
);

export default function PricingSection() {
  return (
    <section className="py-24 bg-[#FDF9FF] relative">
      <div className="mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-primary font-bold text-sm bg-primary/15 px-4 py-2 rounded-full">
            الرسوم
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#2D3436] mt-6 mb-4">
            أسعار مناسبة <span className="text-primary underline decoration-wavy underline-offset-8 decoration-secondary">لراحة الأسرة</span>
          </h2>
          <p className="text-gray-500 font-medium text-lg">
            باقات مرنة تناسب احتياجات طفلك ووقتك
          </p>
        </div>

        {/* Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
  


  <PriceCard
    title="يوم كامل"
    price="100 ر.س"
    desc="تجربة متكاملة للطفل"
    features={[
      "تعليم + أنشطة",
      "وجبات صحية",
      "تنمية مهارات",
      "متابعة سلوكية",
    ]}
  />

    <PriceCard
    title="اسبوع"
    price="500 ر.س"
    desc="خيار مثالي لبداية الطفل"
    features={[
      "أنشطة تعليمية",
      "وجبة خفيفة",
      "متابعة يومية",
    ]}
  />

  <PriceCard
    title="الشهر"
    price="1200 ر.س"
    desc="أفضل تجربة تعليمية"
    features={[
      "ثنائي اللغة",
      "أنشطة إبداعية",
      "تنمية قيم وأخلاق",
      "تقرير شهري",
    ]}
  />

  <PriceCard
        title="الترم"
        price="3800 ر.س"
        desc="رعاية خاصة واهتمام فردي بطفلك"
        highlight
        features={[
          "عدد أطفال محدود",
          "اهتمام فردي كامل",
          "برنامج مخصص للطفل",
          "مرونة في المواعيد",
          "تقارير متابعة مستمرة",
        ]}
      />

  {/* Fourth Card - Centered */}
  {/* <div className="md:col-span-3 flex justify-center mt-6">
    <div className="w-full max-w-md">
      <PriceCard
        title="الترم"
        price="3800 ر.س"
        desc="رعاية خاصة واهتمام فردي بطفلك"
        highlight
        features={[
          "عدد أطفال محدود",
          "اهتمام فردي كامل",
          "برنامج مخصص للطفل",
          "مرونة في المواعيد",
          "تقارير متابعة مستمرة",
        ]}
      />
    </div>
  </div> */}

</div>


      </div>
    </section>
  );
}
