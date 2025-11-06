import { useState, useEffect } from "react";
import { X } from "lucide-react";
import whatsAppIconPng from "@/assets/WhatsApp_icon.png";

const WhatsAppButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 5000); // Show message after 5 seconds

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div
      className="fixed bottom-5 right-5 z-[1000] flex flex-col items-end gap-3"
      dir="ltr"
      onMouseEnter={() => {
        setShowMessage(true);
      }}
      // onMouseLeave is removed to keep the message visible
    >
      {showMessage && (
        <div className="bg-background p-3 rounded-lg shadow-lg animate-fade-in-left flex items-center gap-3">
          <p className="text-sm text-foreground" dir="rtl">
            هل تحتاج مساعدة؟ <br />
            تواصل معنا عبر واتساب!
          </p>
          <button onClick={() => setShowMessage(false)} className="text-muted-foreground hover:text-foreground">
            <X size={18} />
          </button>
        </div>
      )}
      <a
        href="https://wa.me/966544221214"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all transform hover:scale-110"
        aria-label="تواصل معنا عبر واتساب"
      >
        <img src={whatsAppIconPng} alt="WhatsApp" className="w-16 h-16 drop-shadow-lg" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
