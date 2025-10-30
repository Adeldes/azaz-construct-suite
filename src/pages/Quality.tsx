import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, CheckCircle2, FileCheck } from "lucide-react";
import heroImage from "@/assets/Azaz005.png";

const Quality = () => {
  const certifications = [
    {
      title: "شهادة ISO",
      description: "شهادة الآيزو على منتجات الخرسانة الجاهزة",
      icon: Award,
    },
    {
      title: "تصنيف وزارة الشؤون البلدية",
      description: "أعلى تصنيف في جميع مجالات العمل",
      icon: Shield,
    },
    {
      title: "شهادة المنشآت الصغيرة والمتوسطة",
      description: "اعتماد من الهيئة العامة للمنشآت الصغيرة والمتوسطة",
      icon: FileCheck,
    },
    {
      title: "تقارير المختبرات المعتمدة",
      description: "تقارير ACES وشهادات الجودة من مختبرات معتمدة",
      icon: CheckCircle2,
    },
  ];

  const classifications = [
    "المباني - الدرجة الأولى",
    "الطرق - الدرجة الأولى",
    "المياه والصرف الصحي - الدرجة الأولى",
    "الأعمال الكهربائية",
    "الأعمال الميكانيكية",
    "الأعمال الصناعية",
    "أعمال البنية التحتية",
    "أعمال شبكات الاتصالات",
    "توريد الخرسانة الجاهزة",
    "توريد المنتجات الأسمنتية",
  ];

  const qualityFeatures = [
    {
      title: "خرسانة ذات جودة عالية",
      description: "نستخدم أجود الخامات وأحدث التقنيات في إنتاج الخرسانة",
    },
    {
      title: "خدمات التوصيل في الموقع",
      description: "أحدث المعدات لضمان وصول الخرسانة في أفضل حالة",
    },
    {
      title: "معدات الصب المتطورة",
      description: "توفير أكبر عدد من معدات الصب لتسريع العمل",
    },
    {
      title: "اختبارات الجودة",
      description: "اختبارات قبل وبعد الصب حسب الكود المدني والأوروبي والسعودي",
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
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">الجودة والاعتمادات</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            التزامنا بأعلى معايير الجودة العالمية والاعتمادات الرسمية
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">شهاداتنا واعتماداتنا</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              حاصلون على أعلى الشهادات والاعتمادات المحلية والدولية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-md hover:shadow-elegant transition-smooth animate-fade-in text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Classifications Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">
              تصنيفات وزارة الشؤون البلدية والقروية
            </h2>
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {classifications.map((classification, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{classification}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">تميزنا في الجودة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              معايير صارمة تضمن أعلى مستويات الجودة في كل مشروع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {qualityFeatures.map((feature, index) => (
              <Card key={index} className="shadow-md hover:shadow-elegant transition-smooth animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Reports */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <FileCheck className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary">تقارير المختبرات المعتمدة</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نقوم بإجراء اختبارات شاملة لجميع موادنا من خلال مختبرات معتمدة دولياً مثل ACES، وذلك لضمان مطابقة جميع منتجاتنا للمواصفات القياسية السعودية (SASO) والمواصفات الأمريكية (ASTM) والبريطانية (BS). نوفر تقارير مفصلة لكل مرحلة من مراحل الإنتاج والتنفيذ.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quality;
