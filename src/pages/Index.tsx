import { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, Factory, Hammer, TrendingUp, Award, Users, Calendar, HardHat, CheckCircle, Smile, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-construction.jpg";
import concreteImage from "@/assets/concrete-facility.jpg";
import cementImage from "@/assets/cement-products.jpg";
import roadsImage from "@/assets/roads-infrastructure.jpg";
import heroVideo from "@/assets/profile.mp4";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    { value: 20, label: "سنة من الخبرة", suffix: "+", icon: Calendar },
    { value: 400, label: "موظف متخصص", suffix: "+", icon: HardHat },
    { value: 500, label: "مشروع منجز", suffix: "+", icon: CheckCircle },
    { value: 100, label: "رضا العملاء", suffix: "%", icon: Smile },
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
        <video
          className="absolute inset-0 z-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="container mx-auto px-4 z-10 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            تاريخ من التميز والإنجاز
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            منذ عام 2003، نشيد مسيرة التنمية بجودة لا تُضاهى
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="gradient-primary text-white font-semibold transition-smooth hover:shadow-elegant" asChild>
              <Link to="/services">استكشف خدماتنا</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20" asChild>
              <Link to="/contact">تواصل معنا</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-20 mb-10">
        <div className="container mx-auto px-4 z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const StatCounter = () => {
                const { count, elementRef } = useCountUp({ end: stat.value, duration: 2500 });
                return (
                  <Card ref={elementRef} className="text-center p-6 shadow-md hover:shadow-elegant transition-smooth animate-fade-in">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="w-8 h-8 text-accent" />
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                        {count}{stat.suffix}
                      </div>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              };
              return <StatCounter key={index} />;
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-right">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
                عزاز البناء: جودة، التزام، وشراكة مستدامة
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                نحن لا نكتفي بإنشاء المباني، بل نصنع معايير التميز. في عزاز البناء، تجتمع أحدث التقنيات مع الكفاءات المتخصصة لتقديم منتجات صناعية وخدمات مقاولات بمعايير عالمية. هدفنا الثابت: أن نكون شريكك الأول في تجسيد رؤى البنية التحتية والتطوير العمراني بالمملكة.
              </p>
              <Button size="lg" variant="default" className="gradient-primary text-white font-semibold transition-smooth hover:shadow-elegant" asChild>
                <Link to="/about">اقرأ المزيد عنا</Link>
              </Button>
            </div>
            <div className="animate-fade-in-left relative">
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden shadow-elegant cursor-pointer group">
                    <div className="relative">
                      <video
                        className="w-full h-full object-cover"
                        src={heroVideo}
                        muted
                        loop
                        autoPlay
                        playsInline
                        poster={heroImage}
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white transition-all transform group-hover:scale-110" />
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 border-0">
                  {isModalOpen && (
                    <video src={heroVideo} controls autoPlay className="w-full h-full rounded-lg" />
                  )}
                </DialogContent>
              </Dialog>
            </div>
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
            <Button size="lg" className="gradient-primary text-white font-semibold transition-smooth hover:shadow-elegant" asChild>
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
      <section className="relative py-20 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">لنبدأ مشروعك القادم</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            نحن هنا للإجابة عن استفساراتك وتلبية متطلبات مشروعك
          </p>
          <Button size="lg" className="gradient-primary text-white font-semibold transition-smooth hover:shadow-elegant" asChild>
            <Link to="/contact">تواصل معنا الآن</Link>
          </Button>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-2xl font-bold text-primary mb-8">
            شركاء النجاح
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {/* Replace with actual partner logos */}
            <img src="https://placehold.co/150x60?text=Partner+1" alt="Partner 1" className="mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://placehold.co/150x60?text=Partner+2" alt="Partner 2" className="mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://placehold.co/150x60?text=Partner+3" alt="Partner 3" className="mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://placehold.co/150x60?text=Partner+4" alt="Partner 4" className="mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://placehold.co/150x60?text=Partner+5" alt="Partner 5" className="mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://placehold.co/150x60?text=Partner+6" alt="Partner 6" className="mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
