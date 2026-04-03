import Image from "next/image";
import { Phone, MapPin, Mail } from "lucide-react";
import { FaSnapchat, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#808384]/10 py-16 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + About */}
        <div className="text-center md:text-start">
          <Image
            src="/images/logo.png"
            alt="Trusted Kindergarten"
            width={150}
            height={50}
            className="mx-auto md:mx-0 mb-4"
          />
          <p className="text-gray-600 text-sm leading-relaxed">
            مركز خطوات طفلي حضانة توفر تجربة تعليمية ممتعة وآمنة للأطفال، تدمج اللعب مع التعليم وتنمي مهاراتهم وقيمهم الأخلاقية.
          </p>
          <p className="text-gray-400 text-xs mt-4">
            سجل تجاري - 2050172837
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-bold text-[#2D3436] mb-4">روابط مهمة</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#hero" className="hover:text-primary transition-colors">الرئيسية</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">عنّا</a></li>
            <li><a href="#features" className="hover:text-primary transition-colors">لماذا نحن</a></li>
            <li><a href="#facilities" className="hover:text-primary transition-colors">مرافقنا</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">تواصل معنا</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold text-[#2D3436] mb-4">تواصل معنا</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="text-primary" size={18} />
              الفرسان، الدمام، السعودية
            </li>
            <li className="flex items-center gap-2">
              <a href="tel:+966542510147" className="hover:text-primary transition-colors flex items-center gap-2">
                <Phone className="text-primary" size={18} />
                <span dir="ltr">+966542510147</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="mailto:contact@trusted.com" className="hover:text-primary transition-colors flex items-center gap-2">
                <Mail className="text-primary" size={18} />
                steps33q@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Working Hours + CTA */}
        <div>
          <h3 className="text-lg font-bold text-[#2D3436] mb-4">مواعيد العمل</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            الأحد - الخميس<br/>
            الشتاء: 7 صباحاً - 12 ظهرا<br/>
            الصيف: 6:30 مساءً - 11:30 مساءً
          </p>
          <a
            href="https://wa.me/966542510147"
            className="inline-block bg-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-primary/80 transition-colors"
          >
            احجز مكان طفلك
          </a>

          {/* Social */}
          <div className="flex items-center gap-2 mt-6">
            <a href="snapchat.com/@baby_stepsq" className="flex items-center justify-center w-8 h-8 rounded-full bg-primary hover:bg-primary/80 transition-all duration-300">
              <FaSnapchat className="text-white text-md" />
            </a>
            <a href="instagram.com/babysteps_ksa/" className="flex items-center justify-center w-8 h-8 rounded-full bg-primary hover:bg-primary/80 transition-all duration-300">
              <FaInstagram className="text-white text-md" />
            </a>
            <a href="tiktok.com/@baby.steps00" className="flex items-center justify-center w-8 h-8 rounded-full bg-primary hover:bg-primary/80 transition-all duration-300">
              <FaTiktok className="text-white text-md" />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-xs text-gray-400">
        © 2025 مركز خطوات طفلي. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
