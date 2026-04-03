import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/+966542510147"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        bg-[#EAFBF1]
        border border-accent/30
        flex items-center justify-center
        shadow-soft
        transition-colors duration-300
        hover:bg-accent
        group
      "
    >
      <MessageCircle
        size={26}
        className="text-accent transition-colors duration-300 group-hover:text-white"
      />
    </a>
  );
}
