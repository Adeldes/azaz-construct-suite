import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "مشروع إسكان القوات الجوية بخميس مشيط",
      client: "وزارة الدفاع",
      company: "شركة جودت",
      description: "توريد وتنفيذ أعمال ربط الخدمات (الكهرباء، أعمال السفلتة والصرف الصحي)",
    },
    {
      name: "مشروع خط وادي العكاس لخدمة القرية التراثية",
      client: "وزارة المياه والبيئة والزراعة - منطقة عسير",
      company: "شركة عطية للمقاولات",
      description: "أعمال الحفر والتمديد والصرف الصحي",
    },
    {
      name: "مشروع استبدال خط نقل الفائض المعالج بوادي بيشة",
      client: "وزارة المياه والبيئة والزراعة - منطقة عسير",
      company: "شركة عطية للمقاولات",
      description: "المرحلة الثانية - أعمال الحفر والتمديد والصرف الصحي",
    },
    {
      name: "مشروع معالج الطفح لمياه الصرف الصحي",
      client: "وزارة المياه والبيئة والزراعة - منطقة عسير",
      company: "مؤسسة سلطان",
      description: "أحياء متفرقة بجنوب خميس مشيط",
    },
    {
      name: "مشروع تنفيذ شبكات الصرف الصحي لمركز الواديين",
      client: "وزارة المياه والبيئة والزراعة - منطقة عسير",
      company: "شركة عطية للمقاولات",
      description: "تنفيذ شبكات كاملة للصرف الصحي",
    },
    {
      name: "مشروع نقل خطوط الصرف الصحي",
      client: "وزارة المياه والبيئة والزراعة - منطقة عسير",
      company: "مؤسسة سلطان",
      description: "مناطق متفرقة بخميس مشيط",
    },
    {
      name: "مشروع تصريف السيول بمستودعات شركة الكهرباء",
      client: "الشركة السعودية للكهرباء - منطقة عسير",
      company: "مؤسسة سعيد بن عطعط",
      description: "أعمال تصريف السيول والحماية",
    },
    {
      name: "مشروع تنفيذ توصيلات منزلية",
      client: "وزارة المياه والبيئة والزراعة - منطقة القسيم",
      company: "شركة أعمال المحترفون",
      description: "منطقة الزلفي",
    },
    {
      name: "مشروع إسكان القوات المسلحة",
      client: "وزارة الدفاع",
      company: "شركة الجودة",
      description: "المدينة العسكرية بجازان - إيجار معدات",
    },
    {
      name: "مشروع شبكات المياه وخزانات قرى مدينة ضباء",
      client: "وزارة المياه والبيئة والزراعة - منطقة تبوك",
      company: "شركة زهران",
      description: "تنفيذ أعمال شبكات المياه",
    },
    {
      name: "مشروع صيانة وتأهيل منتزه جبال ببارق",
      client: "وزارة الشؤون البلدية والقروية - منطقة عسير",
      company: "شركة عبد الله بن جار الله",
      description: "أعمال صيانة وتطوير",
    },
    {
      name: "مشروع شبكة الصرف الصحي بمدينة ضمد",
      client: "وزارة المياه والبيئة والزراعة - منطقة جازان",
      company: "شركة محمد العلي السويلم",
      description: "تنفيذ شبكات الصرف الصحي",
    },
  ];

  const categories = [
    { name: "وزارة الدفاع", count: projects.filter(p => p.client.includes("الدفاع")).length },
    { name: "وزارة المياه", count: projects.filter(p => p.client.includes("المياه")).length },
    { name: "وزارة الشؤون البلدية", count: projects.filter(p => p.client.includes("البلدية")).length },
    { name: "القطاع الخاص", count: projects.filter(p => !p.client.includes("وزارة")).length },
  ];

  return (
    <div className="min-h-screen" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl font-bold mb-6">مشاريعنا</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            سجل حافل من المشاريع الناجحة في مختلف القطاعات
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-4xl font-bold text-primary mb-2">{category.count}</div>
                <div className="text-muted-foreground">{category.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-md hover:shadow-elegant transition-smooth animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-primary leading-tight">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{project.client}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      بالتعاون مع: {project.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            انضم إلى قائمة عملائنا الناجحين
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            دعنا نساعدك في تحقيق رؤيتك وتنفيذ مشروعك بأعلى معايير الجودة
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 gradient-primary text-white rounded-lg font-semibold transition-smooth hover:shadow-elegant"
          >
            ابدأ مشروعك معنا
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
