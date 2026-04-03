import React from 'react';
import Image from 'next/image';
import { ArrowLeft, User, Zap } from 'lucide-react';
import { UfoIcon, PlanetIcon } from '../ui/Icons'; // The custom icons from above

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-20 overflow-visible">
      
      {/* --- Doodles (Background Decorations) --- */}
      <div className="absolute top-10 left-10 opacity-40 text-dark hidden lg:block">
         <UfoIcon className="w-12 h-12" />
      </div>
      <div className="absolute top-20 right-20 opacity-40 text-primary hidden lg:block rotate-12">
         <UfoIcon className="w-10 h-10" />
      </div>
      <div className="absolute bottom-8 left-24 opacity-30 text-dark hidden lg:block">
         <PlanetIcon className="w-14 h-14" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-30 text-dark hidden lg:block">
         <PlanetIcon className="w-16 h-16" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center relative z-10">
        
        {/* --- Right Column (RTL: First Image) --- */}
        <div className="lg:col-span-3 flex justify-center lg:justify-start relative order-2 lg:order-1 mt-10 lg:mt-0">
          <div className="relative w-64 h-64 lg:w-72 lg:h-72">
             {/* Orange Circle Background */}
            <div className="absolute inset-0 bg-[#FF7675] rounded-full translate-y-4  opacity-90"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-transparent z-10">
              {/* Use the specific path you requested */}
              <Image 
                src="/images/students/boy.png" 
                alt="Student boy" 
                fill
                className="object-cover scale-110"
              />
            </div>
          </div>
          {/* Arrow Doodle Image */}
          <div className="absolute -bottom-16 -left-12 hidden lg:block w-28 opacity-70 transform rotate-12">
             <img src="/images/icons/arrow.png" alt="arrow" className="w-full -rotate-60" />
          </div>
        </div>

        {/* --- Center Column (Content) --- */}
        <div className="lg:col-span-6 text-center flex flex-col items-center order-1 lg:order-2">
          
          {/* Main Headline */}
          <h1 className="text-primary underline  decoration-wavy decoration-secondary/50 underline-offset-16 text-xl md:text-4xl font-bold  mb-8 relative">
            مركز خطوات طفلي

          </h1>
          {/* Description */}

          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed mb-4 text-sm md:text-base font-medium">
            نحن نلعب، نضحك، ونتعلم معًا كل يوم ❤️  
            أنشطة ممتعة، ألعاب تعليمية، وقصص جميلة تساعد أطفالنا على الاكتشاف والنمو بسعادة.
          </p>

          <div className="flex justify-center mb-4">
            <img
              src="/images/logo.png"
              alt="خطوات طفلي"
              className="h-48 w-auto"
            />
          </div>

          {/* CTA Button */}
          <div className="mb-12">
             <button className="bg-primary hover:bg-primary/80 text-white px-10 py-2.5 rounded-full font-bold text-lg shadow-soft  transition-all cursor-pointer flex items-center gap-3 mx-auto">
               ابدأ الرحلة
               <div className="bg-white/20 rounded-full p-1">
                 <ArrowLeft size={16} />
               </div>
             </button>
          </div>

          
        </div>

        {/* --- Left Column (RTL: Second Image) --- */}
        <div className="lg:col-span-3 flex justify-center lg:justify-end relative order-3 mt-10 lg:mt-0">
          <div className="relative w-64 h-64 lg:w-72 lg:h-72">
             {/* Yellow Circle Background */}
            <div className="absolute inset-0 bg-[#FDCB6E] rounded-full translate-y-4  opacity-90"></div>
            <div className="absolute inset-0 rounded-full  border-4 border-transparent overflow-hidden z-10">
               <Image 
                src="/images/students/girl-2.png" 
                alt="Student girl" 
                fill
                className="object-cover scale-100 h-200"
              />
            </div>
          </div>
           {/* Arrow Doodle - Flipped for the other side */}
           <div className="absolute -bottom-16 -right-10 hidden lg:block w-28 opacity-70 transform -scale-x-100 -rotate-12">
             <img src="/images/icons/arrow.png" alt="arrow" className="w-full -rotate-60" />
          </div>
        </div>

      </div>
    </section>
  );
}