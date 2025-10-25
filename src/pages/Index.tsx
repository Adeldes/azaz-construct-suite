import { Link } from "react-router-dom";
import { Building2, Factory, Hammer, TrendingUp, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-construction.jpg";
import concreteImage from "@/assets/concrete-facility.jpg";
import cementImage from "@/assets/cement-products.jpg";
import roadsImage from "@/assets/roads-infrastructure.jpg";

const Index = () => {
  const services = [
    {
      icon: Building2,
      title: "المباني",
      description: "تنفيذ شامل لكافة أنواع المباني السكنية والتجارية والصناعية",
      image: heroImage,
    },
    {
      icon: Hammer,
      title: "الطرق",
      description: "تخطيط وتصميم وتنفيذ شبكات الطرق بأعلى معايير الجودة",
      image: roadsImage,
    },
    {
      icon: Factory,
      title: "الخرسانة الجاهزة",
      description: "إنتاج خرسانة عالية الجودة من مصانعنا المتطورة",
      image: concreteImage,
    },
    {
      icon: Factory,
      title: "المنتجات الأسمنتية",
      description: "إنترلوك، بلاط، بلوك بأحدث التقنيات",
      image: cementImage,
    },
  ];

  const stats = [
    { value: "20+", label: "سنة من الخبرة" },
    { value: "400+", label: "موظف متخصص" },
    { value: "500+", label: "مشروع منجز" },
    { value: "100%", label: "رضا العملاء" },
  ];

  const values = [
    { icon: Award, title: "الجودة", description: "التزامنا بأعلى معايير الجودة العالمية" },
    { icon: TrendingUp, title: "السرعة", description: "تنفيذ المشاريع في الوقت المحدد" },
    { icon: Users, title: "الأمانة", description: "الشفافية والمصداقية مع جميع عملائنا" },
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            تاريخ من التميز والإنجاز
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            منذ عام 2003، نشيد مسيرة التنمية بجودة لا تُضاهى
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link to="/services">استكشف خدماتنا</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20" asChild>
              <Link to="/contact">تواصل معنا</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 text-primary">
              عزاز البناء: جودة، التزام، وشراكة مستدامة
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              نحن لا نكتفي بإنشاء المباني، بل نصنع معايير التميز. في عزاز البناء، تجتمع أحدث التقنيات مع الكفاءات المتخصصة لتقديم منتجات صناعية وخدمات مقاولات بمعايير عالمية. هدفنا الثابت: أن نكون شريكك الأول في تجسيد رؤى البنية التحتية والتطوير العمراني بالمملكة.
            </p>
            <Button size="lg" variant="default" className="gradient-primary" asChild>
              <Link to="/about">اقرأ المزيد عنا</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">خدماتنا المتكاملة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم حلول بناء متكاملة تغطي جميع احتياجات مشاريعكم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-elegant hover:shadow-xl transition-smooth animate-fade-in group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60" />
                  <div className="absolute top-4 right-4">
                    <service.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">عرض جميع الخدمات</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">قيمنا</h2>
            <p className="text-lg text-muted-foreground">
              قيمنا جزء من ثقافتنا في العمل وتعاملنا مع عملائنا الكرام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 shadow-md hover:shadow-elegant transition-smooth animate-fade-in">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">لنبدأ مشروعك القادم</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            نحن هنا للإجابة عن استفساراتك وتلبية متطلبات مشروعك
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
            <Link to="/contact">تواصل معنا الآن</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
