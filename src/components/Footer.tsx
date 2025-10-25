import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">عزاز البناء</h3>
            <p className="text-sm text-primary-foreground/80">
              شركة سعودية رائدة في مجال المقاولات العامة وصناعة مواد البناء منذ عام 2003
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-smooth">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-accent transition-smooth">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-accent transition-smooth">
                  المشاريع
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-accent transition-smooth">
                  الجودة
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">خدماتنا</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-accent transition-smooth cursor-pointer">المباني</li>
              <li className="hover:text-accent transition-smooth cursor-pointer">الطرق</li>
              <li className="hover:text-accent transition-smooth cursor-pointer">الخرسانة الجاهزة</li>
              <li className="hover:text-accent transition-smooth cursor-pointer">المنتجات الأسمنتية</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">اتصل بنا</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span className="ltr">0544221213 / 0544221214</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>info@azaz.com.sa</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-1" />
                <span>جدة - المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/60">
            © 2024 شركة عزاز البناء للمقاولات العامة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
