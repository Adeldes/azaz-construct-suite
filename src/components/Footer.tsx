import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import factoryBg from "@/assets/factory-background.png";
import logo from "@/assets/logo.png";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden" dir="rtl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${factoryBg})`,
        }}
      />
      {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/70" />

        {/* Content */}
        <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4 col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex flex-col items-center lg:items-start">
            <Link to="/" className="mb-3">
              <img src={logo} alt="شعار عزاز البناء" className="h-20 w-auto" />
            </Link>
            <h2 className="text-lg font-bold text-white text-center lg:text-right mb-4">
              مصنع عزاز البناء للخرسانة الجاهزة
            </h2>
          </div>
          <p className="text-sm text-white/80 leading-relaxed text-center lg:text-right">
            شركة سعودية رائدة في مجال المقاولات العامة وصناعة مواد البناء منذ عام 2003
          </p>
          <div className="flex gap-4 pt-2 justify-center lg:justify-start">
              <a href="#" className="text-white/80 hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors"><TikTokIcon className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-white/80 hover:text-primary transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-primary transition-colors">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/80 hover:text-primary transition-colors">
                  المشاريع
                </Link>
              </li>
              <li>
                <Link to="/quality" className="text-white/80 hover:text-primary transition-colors">
                  الجودة
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">خدماتنا</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80 hover:text-primary transition-colors cursor-pointer">المباني</li>
              <li className="text-white/80 hover:text-primary transition-colors cursor-pointer">الطرق</li>
              <li className="text-white/80 hover:text-primary transition-colors cursor-pointer">الخرسانة الجاهزة</li>
              <li className="text-white/80 hover:text-primary transition-colors cursor-pointer">المنتجات الأسمنتية</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">اتصل بنا</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-white/80">
                <Phone size={16} className="text-primary" />
                <span className="ltr">0544221213 / 0544221214</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail size={16} className="text-primary" />
                <span>info@azaz.com.sa</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={16} className="text-primary mt-1" />
                <span>جدة - المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-center text-sm text-white/100">
            © 2024 شركة عزاز البناء للمقاولات العامة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
