import Image from 'next/image';

// payment-methods.ts
export const paymentMethods = [
  { name: 'Mada', src: '/images/payment-methods/mada.svg' },
  { name: 'STC Pay', src: '/images/payment-methods/stc-pay.svg' },
  { name: 'Apple Pay', src: '/images/payment-methods/apple-pay.svg' },
  { name: 'Visa', src: '/images/payment-methods/visa.svg' },
  { name: 'Cash On Delivery', src: '/images/payment-methods/cod.png' },
  { name: 'Saudi Business Center', src: '/images/payment-methods/sbc.svg' },
  { name: 'Tamara', src: '/images/payment-methods/tamara.svg' },
  { name: 'Tabby', src: '/images/payment-methods/tabby.svg' },
];


export default function PaymentsSection() {
  return (
    <section className="py-24 bg-[#FDF9FF]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main Card */}
        <div className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-gray-200 shadow-soft">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              طرق الدفع المتاحة
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              نوفر لك وسائل دفع آمنة وسهلة تناسب جميع المستخدمين داخل المملكة
            </p>
          </div>

          {/* Payments Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="flex items-center justify-center 
                           rounded-4xl border border-gray-200 
                           bg-primary/10 h-40 "
              >
                <img
                  src={method.src}
                  alt={method.name}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
