import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, PlayCircle, Star } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import heroImage from "@/assets/Azaz008.png";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import projectVideo from "@/assets/project.mp4";
import projectsVideo from "@/assets/projects.mp4";

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
    { name: "القطاع الخاص", count: 11350 },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);

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
          <h1 className="text-5xl font-bold mb-6">مشاريعنا</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            سجل حافل من الإنجازات النوعية في مختلف قطاعات البنية التحتية والتطوير العمراني
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const CategoryCounter = () => {
                const { count, elementRef } = useCountUp({ end: category.count, duration: 2000 });
                return (
                  <div ref={elementRef} key={index} className="text-center animate-fade-in">
                    <div className="text-4xl font-bold text-primary mb-2">{count}</div>
                    <div className="text-muted-foreground">{category.name}</div>
                  </div>
                );
              };
              return <CategoryCounter key={index} />;
            })}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4 text-primary">مشروع مميز</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نفخر بتقديم مشاريع استثنائية تلبي أعلى المعايير.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <div className="animate-fade-in-right cursor-pointer">
                  <Card className="overflow-hidden shadow-elegant group">
                    <div className="relative">
                      <video
                        className="w-full h-full object-cover"
                        src={projectVideo}
                        muted
                        loop
                        autoPlay
                        playsInline
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white transition-all transform group-hover:scale-110" />
                      </div>
                    </div>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 border-0">
                {isModalOpen && (
                  <video src={projectVideo} controls autoPlay className="w-full h-full rounded-lg" />
                )}
              </DialogContent>
            </Dialog>
            <div className="animate-fade-in-left">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold text-primary">دراسة حالة: مشروع يحدث فرقا</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                اكتشف في هذا الفيديو أحد أبرز إنجازاتنا مشروع يجسد خبرتنا في تنفيذ أعمال البنية التحتية المعقدة بدقةٍ عالية، والتزامٍ لا ينثني بالجودة والموثوقية.
              </p>
              <p className="text-muted-foreground">لأن كل مشروع ننفذه هو شهادة على تميزنا، نحرص دائما على الالتزام الكامل بالجداول الزمنية، والمواصفات الفنية، وأعلى معايير السلامة لنُسلّم أكثر من مجرد عمل .. نُسلّم ثقة.</p>
            </div>
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

      {/* Private Sector Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-right order-last md:order-first">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary">
                شريككم الموثوق في القطاع الخاص
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                نمتلك خبرة واسعة في تنفيذ مشاريع القطاع الخاص، من المجمعات السكنية والتجارية إلى المصانع والمشاريع الصناعية المتخصصة. نقدم حلولاً مبتكرة ومخصصة تلبي تطلعات عملائنا وتساهم في نمو أعمالهم.
              </p>
            </div>
            <Dialog open={isProjectsModalOpen} onOpenChange={setIsProjectsModalOpen}>
              <DialogTrigger asChild>
                <div className="animate-fade-in-left order-first md:order-last cursor-pointer">
                  <Card className="overflow-hidden shadow-elegant group">
                    <div className="relative">
                      <video
                        className="w-full h-full object-cover"
                        src={projectsVideo}
                        loop
                        autoPlay
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <PlayCircle className="w-20 h-20 text-white/70 group-hover:text-white transition-all transform group-hover:scale-110" />
                      </div>
                    </div>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 border-0">
                {isProjectsModalOpen && (
                  <video src={projectsVideo} controls autoPlay className="w-full h-full rounded-lg" />
                )}
              </DialogContent>
            </Dialog>
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
