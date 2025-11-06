import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Route,
  Droplets,
  Factory,
  Boxes,
  Construction,
  CheckCircle2
} from "lucide-react";
import heroImagePage from "@/assets/Azaz006.png";
import concreteImage from "@/assets/concrete-facility.jpg";
import cementImage from "@/assets/cement-products.jpg";
import roadsImage from "@/assets/roads-infrastructure.jpg";
import kharsanahImage from "@/assets/kharsanah.jpg";
import InterlockImage from "@/assets/Interlock.jpg";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "المباني",
      description: "قسم المباني هو محور عمل الشركة منذ بداية مسيرتها، المختص بالإنشاءات الإنشائية للمباني بكافة أنواعها",
      features: [
        "الفلل والقصور والمجمعات السكنية",
        "المشاريع السكنية والفنادق",
        "المباني التجارية والتعليمية",
        "المباني الصحية والزراعية",
        "المباني الصناعية",
      ],
      image: cementImage, // Placeholder, you can change this
    },
    {
      icon: Route,
      title: "الطرق",
      description: "قسم متخصص في تخطيط وتصميم وتنفيذ شبكات الطرق المرتبطة بالمشاريع",
      features: [
        "القسم الفني للتخطيط والتصميم",
        "قسم المساحة لتحديد الخطوط المحورية",
        "قسم مراقبة الجودة والمختبرات",
        "قسم الأعمال الترابية",
        "قسم التنفيذ والإشراف",
      ],
      image: roadsImage,
    },
    {
      icon: Factory,
      title: "الخرسانة الجاهزة",
      description: "مصانع متطورة تقدم خرسانة جاهزة عالية الجودة باستخدام أجود الخامات",
      features: [
        "مصنع الخرسانة الجاهزة بجدة",
        "مصنع الخرسانة الجاهزة في عسفان",
        "مصنع الخرسانة الجاهزة في خميس مشيط",
        "شهادة ISO للجودة",
        "محطات متنقلة",
      ],
      image: kharsanahImage,
    },
    {
      icon: Boxes,
      title: "المنتجات الأسمنتية",
      description: "مصانع رائدة في تصنيع مواد البناء بأعلى المعايير",
      features: [
        "بلاط الأرصفة والإنترلوك",
        "البلوك الأسمنتي",
        "منتجات أسمنتية جمالية",
        "مصنع بالمنطقة الجنوبية",
        "مصنع بالمنطقة الغربية",
      ],
      image: InterlockImage,
    },
    {
      icon: Construction,
      title: "تفتيت الصخور",
      description: "قسم متخصص في أعمال تفتيت الصخور الضخمة والمعقدة فنياً",
      features: [
        "التفجير الآمن بأحدث التقنيات",
        "أعمال الخنادق والأنفاق",
        "أعمال السدود",
        "التفجير داخل المدن بأمان",
        "معدات قياس الاهتزازات",
      ],
      image: concreteImage, // Placeholder, you can change this
    },
    {
      icon: Droplets,
      title: "المياه والصرف الصحي",
      description: "تصميم وتنفيذ أعمال الماء وشبكات الصرف الصحي بطريقة علمية",
      features: [
        "محطات تحلية مياه البحر",
        "محطات معالجة الصرف الصحي",
        "شبكات توزيع المياه",
        "شبكات الصرف الصحي",
        "تصريف مياه الفيضانات",
      ],
      image: roadsImage,
    },
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 text-white flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImagePage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">خدماتنا المتكاملة</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            نقدم مجموعة شاملة من الخدمات في مجال المقاولات والإنشاءات
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center animate-fade-in`}
              >
                <div className="w-full md:w-1/2">
                  <Card className="overflow-hidden shadow-elegant">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </Card>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="shadow-elegant">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                هل تحتاج إلى استشارة لمشروعك؟
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                فريقنا جاهز لمساعدتك في اختيار الحلول المثالية لمشروعك
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 gradient-primary text-white rounded-lg font-semibold transition-smooth hover:shadow-elegant"
              >
                تواصل معنا الآن
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
